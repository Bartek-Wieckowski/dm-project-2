'use client';
import { useEffect, useState } from 'react';

type Profile = {
  id: string;
  name: string;
  status: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true);
      const res = await fetch('https://rickandmortyapi.com/api/character/2');

      if (!res.ok) {
        setErr(true);
      }
      const data = await res.json();
      setProfile(data);
      setIsLoading(false);
    }
    fetchProfile();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error fetching data</p>;
  if (!profile) return null;

  return (
    <div>
      <ul key={profile.id}>
        <li>{profile.name}</li>
        <li>{profile.status}</li>
      </ul>
    </div>
  );
}
