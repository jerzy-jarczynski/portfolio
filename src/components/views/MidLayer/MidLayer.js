import GearWheel from 'components/views/GearWheel/GearWheel';
import styles from './MidLayer.module.scss';

const MidLayer = () => {
  return (
    <>
      <div className={styles.MidLayer}>
        <GearWheel />
      </div>
    </>
  );
};

export default MidLayer;
