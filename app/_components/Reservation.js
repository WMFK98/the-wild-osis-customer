import React from 'react';
import ReservationForm from './ReservationForm';
import DateSelector from './DateSelector';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import { auth } from '../_lib/auth';
import LoginMessage from './LoginMessage';

export default async function Reservation({ cabin }) {
  const [bookingDates, settings] = await Promise.all([
    getBookedDatesByCabinId(cabin.id),
    getSettings(),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-cols-2  border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookingDates={bookingDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
