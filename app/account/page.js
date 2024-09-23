import Image from 'next/image';
import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Guest area',
};

export default async function Home() {
  const session = await auth();
  const firstname = session.user.name.split(' ').at(0);
  return (
    <div className="font-semibold text-2xl text-accent-400 md-7">
      Welcome, {firstname}
    </div>
  );
}
