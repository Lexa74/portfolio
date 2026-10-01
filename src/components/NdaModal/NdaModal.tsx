import { FormEvent, useState } from 'react';
import styles from './ndaModal.module.css';
import { Button } from '../../UI/Button/Button.tsx';

type NdaModalProps = {
  password: string;
  onClose: () => void;
  onSuccess: () => void;
};

export const NdaModal = ({ password, onClose, onSuccess }: NdaModalProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === password) {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <p className={styles.text}>
          Этот кейс находится под NDA,
          <br />
          для просмотра введите пароль
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            className={styles.input}
            placeholder="Пароль"
          />
          <Button type="submit">Открыть</Button>
        </form>
        {error && <p className={styles.error}>Неверный пароль</p>}
      </div>
    </div>
  );
};
