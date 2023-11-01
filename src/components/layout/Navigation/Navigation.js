import styles from './Navigation.module.scss';

const Navigation = ({ children }) => {
  return (
    <>
      <div className={styles.Navigation}>{children}</div>
    </>
  );
};

export default Navigation;
