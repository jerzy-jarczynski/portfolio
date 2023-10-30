import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ variant, children }) => {
  return (
    <div
      className={clsx(styles.Button, {
        [styles.ButtonImportant]: variant === 'important',
      })}
    >
      {children}
    </div>
  );
};

export default Button;
