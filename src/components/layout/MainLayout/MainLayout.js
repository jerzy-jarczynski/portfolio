import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <div className={styles.MainLayout}>{children}</div>
    </Container>
  );
};

export default MainLayout;
