import Container from 'react-bootstrap/Container';
import MainMenu from '../MainMenu/MainMenu';
import Socials from '../Socials/Socials';
import SocialButton from 'components/common/SocialButton/SocialButton';
import Languages from '../Languages/Languages';
import LangButton from 'components/common/LangButton/LangButton';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <MainMenu />
      <Container>{children}</Container>
      <div className={styles.MainLayoutActions}>
        <Socials>
          <SocialButton medium="LinkedIn" />
          <SocialButton medium="Facebook" />
          <SocialButton medium="X" />
          <SocialButton medium="Google" />
        </Socials>
        <Languages>
          <LangButton language="Polish" />
          <LangButton active language="English" />
        </Languages>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
