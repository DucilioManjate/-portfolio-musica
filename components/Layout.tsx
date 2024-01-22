
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav>
        {/* Coloque sua barra de navegação aqui */}
      </nav>
      <main>{children}</main>
      <footer>
        {/* Coloque seu rodapé aqui */}
      </footer>
    </div>
  );
};

export default Layout;
