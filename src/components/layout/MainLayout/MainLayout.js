import React from 'react';
import Container from 'react-bootstrap/Container';
import MainMenu from '../MainMenu/MainMenu';
import Socials from '../Socials/Socials';
import SocialButton from 'components/common/SocialButton/SocialButton';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <MainMenu />
      <Container>{children}</Container>
      <Socials>
        <SocialButton medium="LinkedIn" />
        <SocialButton medium="Facebook" />
        <SocialButton medium="X" />
        <SocialButton medium="Google" />
      </Socials>
      <Footer />
    </div>
  );
};

export default MainLayout;
