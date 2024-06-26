import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { getProfileByUsername } from '@/graphql/queries';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        user = await getProfileByUsername(credentials.username as string);

        if (!user) {
          throw new Error('Invalid email or password');
        }

        if (!user.userProfiles[0].userProfilePassword) {
          throw new Error('Invalid email or password');
        }

        const isMatched = await compare(credentials.password as string, user.userProfiles[0].userProfilePassword);

        if (!isMatched) {
          throw new Error('Password did not matched');
        }

        const userData = {
          username: user.userProfiles[0].userProfileName,
          avatar: user.userProfiles[0].userProfileAvatar,
          id: user.userProfiles[0].id,
        };

        return userData;
      },
      // async authorize(credentials) {
      //   if (!credentials?.username || !credentials?.password) {
      //     throw new Error('Invalid credentials');
      //   }

      //   const user = await getProfileByUsername(credentials.username as string);

      //   if (!user) {
      //     throw new Error('No user found');
      //   }

      //   if (!user.userProfilePassword) {
      //     throw new Error('No password found');
      // }

      //   const isValid = await compare(credentials.password as string, user.userProfilePassword);

      //   if (!isValid) {
      //     throw new Error('Invalid password');
      //   }

      //   const userData = {
      //     id: user.id, name: user.userProfileName, avatar: user.userProfileAvatar
      //   }
      //   return userData;
      // },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
