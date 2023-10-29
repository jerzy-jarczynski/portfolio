import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <Container>
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;