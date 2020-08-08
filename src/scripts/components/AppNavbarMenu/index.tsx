import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './index.modules.scss';
import { AppNavbarMenuContext } from '../AppNavbarMenuContext';
import { NavbarMenuItem } from '../../types/app';

type Props = {
  className?: string;
  menuItems: NavbarMenuItem[];
};

const AppNavbarMenuComponent: FC<Props> = ({ className, menuItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cn(styles.appNavbarMenu, className)}>
      {menuItems.map((item, index) => (
        <div className={styles.item}>
          <button
            type="button"
            className={cn(styles.button, {
              [styles.Emphasized]: item.isEmphasized,
              [styles.Actived]: activeIndex === index,
            })}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >{item.label}
          </button>
          {activeIndex === index && item.children ? (
            <AppNavbarMenuContext
              className={styles.menuContext}
              menuItems={item.children}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export { AppNavbarMenuComponent as AppNavbarMenu };
