// app/layout.jsx
import React from 'react';
import Navbar from '@/layout/navbar';

import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto px-4 py-6 container">{children}</main>
      <Toaster />
    </>
  );
};

export default Layout;
