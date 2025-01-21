import clsx from 'clsx';
import styles from './Card.module.scss';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      {children}
    </div>
  );
};

export default Card;
