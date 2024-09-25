import UpdateReservationForm from '@/app/_components/UpdateReservationForm';
import { auth } from '@/app/_lib/auth';
import { getBooking, getBookings, getCabin } from '@/app/_lib/data-service';
import { redirect } from 'next/navigation';

export default async function Page({ params }) {
  const session = await auth();
  const { bookingId } = params;

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(Number(bookingId)))
    redirect('/account/reservations');

  const booking = await getBooking(bookingId);
  const { max_capacity } = await getCabin(booking.cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>
      <UpdateReservationForm maxCapacity={max_capacity} booking={booking} />
    </div>
  );
}
