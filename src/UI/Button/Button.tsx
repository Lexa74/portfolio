import { ReactNode } from 'react';
import styles from './button.module.css';
import classNames from 'classnames';

interface ButtonProp
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  typeStyle?: 'primary' | 'secondary';
}

export const Button = ({
  typeStyle = 'primary',
  children,
  ...props
}: ButtonProp) => {
  return (
    <button {...props} className={classNames(styles.button, styles[typeStyle])}>
      {children}
    </button>
  );
};
