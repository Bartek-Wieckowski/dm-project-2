'use client';
import styles from './hotelContactUs.module.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContactUsFormSchema, ContactUsFormSchemaType } from '@/validators/validators';
import { BASE_URL } from '@/lib/helpers';

type contactUsFormProps = {
  hotelName: string;
};

export default function HotelContectUs({ hotelName }: contactUsFormProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactUsFormSchemaType>({ mode: 'onTouched', resolver: zodResolver(ContactUsFormSchema) });

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/hotels/mails`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      alert('Message successfully sent');
      reset();
    } catch (error) {
      console.error(error);
      alert('Error, please try resubmitting the form');
    }
  });

  return (
    <>
      <h3>Contact Us</h3>
      <form onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          <input className="input" placeholder="phone number" {...register('phoneNumber')} required />
          {errors?.phoneNumber && <p className={styles.errorMsg}>{errors?.phoneNumber?.message}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <input className="input" placeholder="message" {...register('message')} required />
          {errors?.message && <p className={styles.errorMsg}>{errors?.message?.message}</p>}
        </div>
        <div className={styles.inputWrapper}>
          <input type="hidden" {...register('hotelName')} value={hotelName} />
        </div>
        <button type="submit" className={styles.buttonSend} disabled={isSubmitting || !isValid}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  );
}
