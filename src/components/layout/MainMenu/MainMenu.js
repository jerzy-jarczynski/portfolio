import Logo from 'components/common/Logo/Logo';
import ButtonGroup from 'components/common/ButtonGroup/ButtonGroup';
import { Container } from 'react-bootstrap';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <>
      <div className={styles.MainMenu}>
        <Container>
          <Logo />
          <ButtonGroup>Dupa</ButtonGroup>
        </Container>
      </div>
    </>
  );
};

export default MainMenu;
