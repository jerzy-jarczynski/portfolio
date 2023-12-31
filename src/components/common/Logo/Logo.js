import styles from './Logo.module.scss';

const Logo = () => {
  const ImageSrc = `${process.env.PUBLIC_URL}/images/LogoImage.svg`;

  return (
    <div className={styles.Logo}>
      <div className={styles.LogoImage}>
        <img src={ImageSrc} alt="The HedgeHog Logo" />
      </div>
      <div className={styles.LogoText}>Jerzy Jarczyński</div>
    </div>
  );
};

export default Logo;
