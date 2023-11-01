import { Container } from 'react-bootstrap';
import styles from './Socials.module.scss';

const Socials = ({ children }) => {
  return (
    <>
      <div className={styles.Socials}>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Socials;
