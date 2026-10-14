import { TouchEvent, useEffect, useRef } from 'react';
import styles from './lightbox.module.css';
import classNames from 'classnames';

type LightboxImage = { src: string; alt: string };

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export const Lightbox = ({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) => {
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => onIndexChange((index - 1 + images.length) % images.length);
  const goNext = () => onIndexChange((index + 1) % images.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  };

  const current = images[index];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Закрыть"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className={classNames(styles.nav, styles.navPrev)}
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Предыдущее изображение"
      >
        ‹
      </button>

      <div
        className={styles.imageWrap}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img src={current.src} alt={current.alt} />
        <span className={styles.counter}>
          {index + 1} / {images.length}
        </span>
      </div>

      <button
        type="button"
        className={classNames(styles.nav, styles.navNext)}
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Следующее изображение"
      >
        ›
      </button>
    </div>
  );
};
