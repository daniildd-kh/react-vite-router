import React from 'react';
import clsx from 'clsx';
import styles from './Section.module.scss';

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={clsx(styles.section, className)}>
      {children}
    </section>
  );
};

export default Section;
