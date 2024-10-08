'use client';
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { useReservation } from './ReservationContext';

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookingDates, cabin }) {
  // CHANGE

  const { regular_price, discount } = cabin;

  const { range, setRange, resetRange } = useReservation();
  const displeyRange = isAlreadyBooked(range, bookingDates) ? {} : range;
  const numNights = differenceInDays(displeyRange.to, displeyRange.from);
  const cabinPrice = numNights * (regular_price - discount);
  // SETTINGS

  const { min_booking_length, max_booking_length } = settings;
  const monthCaptionStyle = {
    borderBottom: '1px solid currentColor',
    paddingBottom: '1000rem',
  };

  return (
    <div styles={{}} className="flex flex-col justify-between">
      <DayPicker
        styles={{
          month_caption: monthCaptionStyle,
        }}
        onSelect={setRange}
        selected={displeyRange}
        className="pt-12 scale-75 place-self-center"
        mode="range"
        min={min_booking_length + 1}
        max={max_booking_length}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookingDates.some((date) => isSameDay(curDate, date))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regular_price - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regular_price}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regular_price}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{' '}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
