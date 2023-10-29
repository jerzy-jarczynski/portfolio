import Logo from 'components/common/Logo/Logo';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <>
      <div className={styles.MainMenu}>
        <Logo />
      </div>
    </>
  );
};

export default MainMenu;
