import clsx from 'clsx';
import styles from './NavLink.module.scss';

const NavLink = ({ active, children }) => {
  return (
    <div className={clsx(styles.NavLink, { [styles.NavLinkActive]: active })}>
      {children}
    </div>
  );
};

export default NavLink;
