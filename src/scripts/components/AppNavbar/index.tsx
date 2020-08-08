import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import { AppNavbarMenu } from '../AppNavbarMenu';
import styles from './index.modules.scss';

type Props = {
  className?: string;
};

const AppNavbarComponent: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.appNavbar, className)}>
      <AppNavbarMenu />
    </div>
  );
};

export { AppNavbarComponent as AppNavbar };
