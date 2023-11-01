import styles from './Languages.module.scss';

const Languages = ({ children }) => {
  return (
    <>
      <div className={styles.Languages}>{children}</div>
    </>
  );
};

export default Languages;
