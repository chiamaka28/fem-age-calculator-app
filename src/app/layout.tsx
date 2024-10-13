import './globals.css';
import { poppins } from './ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={` ${poppins.variable}`}>
      <body className={`h-screen bg-lightGrey`}>
        <header className='sr-only'>
          <h1>AGE CALCULATOR APP</h1>;
        </header>
        {children}
      </body>
    </html>
  );
}
