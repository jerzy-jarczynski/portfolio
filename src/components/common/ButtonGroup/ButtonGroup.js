import styles from './ButtonGroup.module.scss';

const ButtonGroup = ({ children }) => {
  return (
    <>
      <div className={styles.ButtonGroup}>{children}</div>
    </>
  );
};

export default ButtonGroup;
