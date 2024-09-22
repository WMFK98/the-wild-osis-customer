import '@/app/_styles/globals.css';
import Logo from './_components/Logo';
import Navigation from './_components/Navigation';
import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
import 'react-day-picker/dist/style.css';
import { ReservationProvider } from './_components/ReservationContext';
const josfin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

console.log(josfin);
export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the tailin Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josfin.className} antialiased   text-primary-50 flex flex-col bg-primary-950  min-h-screen`}
      >
        <hearder>
          <Header />
        </hearder>
        <div className="flex-1 px-8 py-12 grid">
          <main className=" max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
