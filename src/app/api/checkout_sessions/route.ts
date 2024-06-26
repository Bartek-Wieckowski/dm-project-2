import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// data needed for checkout
export interface CheckoutBody {
  slug: string;
  count: number;
}
[];

export async function POST(request: NextRequest) {
  try {
    // you can implement some basic check here like, is user valid or not
    const data = (await request.json()) as CheckoutBody;

    //get data about product based on slug

    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik'],
      locale: 'pl',
      //you can map body here
      line_items: [
        {
          price: 'price_1PW0WuDPCSlQA7kuwaCebP6c', // Replace with your price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      //should come from env
      success_url: 'http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/checkout/cancel',
      // metadata: {
      // 	userId: loggedUser.id,
      // 	priceId,
      // },
    });
    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
    console.log(error);
    return new NextResponse('Internal Server', { status: 500 });
  }
}
