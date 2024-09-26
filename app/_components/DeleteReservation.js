import { TrashIcon } from '@heroicons/react/24/solid';
import SpinnerMini from './SpinnerMini';
import Modal from './Modal';
import ConfirmeDelete from './ConfirmeDelete';

function DeleteReservation({ bookingId }) {
  return (
    <Modal>
      <Modal.Open opens="confirmeDelete">
        <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900">
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </button>
      </Modal.Open>
      <Modal.Window name="confirmeDelete">
        <ConfirmeDelete bookingId={bookingId} />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteReservation;
