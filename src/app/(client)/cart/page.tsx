'use client';
import { getStripe } from '@/lib/get-stripe';

export default function Page() {
  const cart = [
    {
      price: 1,
      title: 'test',
      count: 1,
    },
  ];

  const pay = async () => {
    const stripe = await getStripe();
    if (!stripe) {
      return;
    }
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        body: JSON.stringify([{slug: "test",count:1}])
      });
      const data = await response.json();
      console.log(data);
      if (!data.ok) throw new Error('Something went wrong');
      await stripe.redirectToCheckout({
        sessionId: data.result.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={pay}>Pay</button>;
}
