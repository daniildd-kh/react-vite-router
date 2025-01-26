import clsx from 'clsx';
import styles from './Logo.module.scss';

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <a
      className={clsx(styles.logo, className)}
      onClick={onClick}
    >
      <img
        src="/favicon.svg" 
        alt="Logo"
        className={styles.image}
      />
    </a>
  );
};

export default Logo;
