import React from 'react';
import ReservationForm from './ReservationForm';
import DateSelector from './DateSelector';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';

export default async function Reservation({ cabin }) {
  const [bookingDates, settings] = await Promise.all([
    getBookedDatesByCabinId(cabin.id),
    getSettings(),
  ]);

  return (
    <div className="grid grid-cols-2  border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookingDates={bookingDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
