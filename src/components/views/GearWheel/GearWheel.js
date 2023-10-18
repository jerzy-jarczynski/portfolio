import styles from './GearWheel.module.scss';

const GearWheel = () => {
  const ImageSrc = `${process.env.PUBLIC_URL}/images/gearWheel.png`;

  return (
    <>
      <div className={styles.GearWheel}>
        <img src={ImageSrc} alt="Animated Gear Wheel" />
      </div>
    </>
  );
};

export default GearWheel;
