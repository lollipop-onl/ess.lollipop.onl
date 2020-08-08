import React, { FC } from 'react';
import cn from 'classnames';
import styles from './index.modules.scss';
import { NavbarMenuItem } from '../../types/app';

type Props = {
  className?: string;
  menuItems: NavbarMenuItem[];
};

const AppNavbarMenuContextComponent: FC<Props> = ({ className, menuItems }) => (
  <div className={cn(styles.appNavbarMenuContext, className)}>
    <div className={styles.menu}>
      {menuItems.map((item) => (
        <button
          type="button"
          className={styles.button}
          onClick={item.onClick}
        >{item.label}
        </button>
      ))}
    </div>
  </div>
);

export { AppNavbarMenuContextComponent as AppNavbarMenuContext };
