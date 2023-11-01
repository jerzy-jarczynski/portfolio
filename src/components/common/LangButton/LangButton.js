import clsx from 'clsx';
import styles from './LangButton.module.scss';

const LangButton = ({ active, language }) => {
  const ImageSrc = `${process.env.PUBLIC_URL}/images/${language}.svg`;
  const ImageSrcHover = `${process.env.PUBLIC_URL}/images/${language}-active.svg`;

  return (
    <>
      <div
        className={clsx(styles.LangButton, {
          [styles.LangButtonActive]: active,
        })}
      >
        <img
          className={styles.LangButtonIcon}
          src={ImageSrc}
          alt={`${language} icon grayscale`}
        />
        <img
          className={styles.LangButtonIconActive}
          src={ImageSrcHover}
          alt={`${language} icon colorful`}
        />
      </div>
    </>
  );
};

export default LangButton;
