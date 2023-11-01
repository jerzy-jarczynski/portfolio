import GearWheel from 'components/layout/GearWheel/GearWheel';
import { Container } from 'react-bootstrap';
import styles from './MidLayer.module.scss';

const MidLayer = () => {
  return (
    <div className={styles.MidLayer}>
      <Container>
        <GearWheel />
      </Container>
    </div>
  );
};

export default MidLayer;
