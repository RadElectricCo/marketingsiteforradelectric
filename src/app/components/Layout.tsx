import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
