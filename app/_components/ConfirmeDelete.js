import React from 'react';
import { deleteBookings } from '../_lib/actions';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

export default function ConfirmeDelete({ onCloseModal, bookingId }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="pt-4 pb-0 space-y-[2rem]">
      <div>Are you sure you want to delete this reservation?</div>
      <div className="flex gap-2 justify-end">
        <button
          disabled={isPending}
          onClick={() => startTransition(() => deleteBookings(bookingId))}
          className="text-red-500 px-8 py-3 border-red-500 border font-semibold hover:bg-red-500 hover:text-white transition-all disabled:cursor-not-allowed disabled:border-none disabled:bg-gray-500 disabled:text-gray-300"
        >
          {isPending ? <SpinnerMini /> : 'Yes'}
        </button>
        <button
          onClick={onCloseModal}
          disabled={isPending}
          className="bg-accent-500 px-8 py-3 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:border-none disabled:text-gray-300"
        >
          No
        </button>
      </div>
    </div>
  );
}
