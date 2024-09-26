'use client';
import { useOptimistic } from 'react';
import { deleteBookings } from '../_lib/actions';
import ReservationCard from './ReservationCard';
export default function ReservationList({ bookings }) {
  // const [optimisticBookings, optimisticDelete] = useOptimistic(
  //   bookings,
  //   (curBookings, bookingId) => {
  //     return curBookings.filter((booking) => +booking.id !== +bookingId);
  //   }
  // );

  // async function handleDelete(bookingId) {
  //   optimisticDelete(bookingId);
  //   await deleteBookings(bookingId);
  // }

  return (
    <ul className="space-y-6">
      {bookings.map((booking) => (
        <ReservationCard booking={booking} key={booking.id} />
      ))}
    </ul>
  );
}
