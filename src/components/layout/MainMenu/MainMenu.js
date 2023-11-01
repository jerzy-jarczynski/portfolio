import Logo from 'components/common/Logo/Logo';
import ButtonGroup from 'components/common/ButtonGroup/ButtonGroup';
import Button from 'components/common/Button/Button';
import Navigation from '../Navigation/Navigation';
import NavLink from 'components/common/NavLink/NavLink';
import { Container } from 'react-bootstrap';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <>
      <div className={styles.MainMenu}>
        <Container>
          <div className={styles.MainMenuRow}>
            <Logo />
            <Navigation>
              <NavLink active>About</NavLink>
              <NavLink>Portfolio</NavLink>
              <NavLink>Timeline</NavLink>
            </Navigation>
            <ButtonGroup>
              <Button variant={'default'}>CV</Button>
              <Button variant={'default'}>Contact Me</Button>
              <Button variant={'important'}>GitHub</Button>
            </ButtonGroup>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainMenu;
