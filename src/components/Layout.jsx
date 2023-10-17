import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MyAppBar from './appBar/appBar';
import { Suspense } from 'react';
import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <header>
        <MyAppBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
