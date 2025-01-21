import clsx from 'clsx';
import styles from './Logo.module.scss';

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <div
      className={clsx(styles.logo, className)}
      onClick={onClick}
    >
      <img
        src="../../../public/favicon.svg" 
        alt="Logo"
        className={styles.image}
      />
    </div>
  );
};

export default Logo;
