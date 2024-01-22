// components/Layout.tsx
import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        {/* Coloque seu rodapé aqui */}
      </footer>
    </div>
  );
};

export default Layout;
