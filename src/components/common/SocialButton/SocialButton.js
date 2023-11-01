import styles from './SocialButton.module.scss';

const SocialButton = ({ medium }) => {
  const ImageSrc = `${process.env.PUBLIC_URL}/images/${medium}.svg`;
  const ImageSrcHover = `${process.env.PUBLIC_URL}/images/${medium}-hover.svg`;

  return (
    <>
      <div className={styles.SocialButton}>
        <img
          className={styles.SocialButtonIcon}
          src={ImageSrc}
          alt={`${medium} icon grayscale`}
        />
        <img
          className={styles.SocialButtonIconHover}
          src={ImageSrcHover}
          alt={`${medium} icon colorful`}
        />
      </div>
    </>
  );
};

export default SocialButton;
