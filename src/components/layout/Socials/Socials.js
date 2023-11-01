import styles from './Socials.module.scss';

const Socials = ({ children }) => {
  return (
    <>
      <div className={styles.Socials}>{children}</div>
    </>
  );
};

export default Socials;
