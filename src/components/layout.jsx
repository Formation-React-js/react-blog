import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <header>Barre de navigation</header>
      <main>
        {children}
      </main>
      <footer>Joli footer</footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
