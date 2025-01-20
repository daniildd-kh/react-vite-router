import React, { ReactNode } from 'react';
import { useAnchorContext } from './AnchorContext';
import clsx from 'clsx';
import styles from './Anchor.module.scss'

type AnchorProps = {
  children?: ReactNode;
  href?: string;
  className?: string;
}

const Anchor = ({ children, href, className, ...props }: AnchorProps) => {
  const AnchorComponent = useAnchorContext();

  return (
    <AnchorComponent href={href} className={clsx(styles.anchor, className)} {...props}>
      {children}
    </AnchorComponent>
  );
};

export default Anchor;
