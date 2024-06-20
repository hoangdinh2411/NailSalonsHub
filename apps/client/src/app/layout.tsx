import type { Metadata } from 'next';
import '../styles/global.scss';
import Header from 'components/shared/Header/Header';
import Footer from 'components/shared/Footer/Footer';

export const metadata: Metadata = {
  title: 'Create Turborepo',
  description: 'Generated by create turbo'
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='vn'>
      <body suppressHydrationWarning={true}>
        <div className='app_wrapper'>
          <Header />
          <main>
            <div className='app__container'>{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
