import React, { FC, useState, useMemo } from 'react';
import cn from 'classnames';
import styles from './index.modules.scss';
import { AppNavbarMenuContext } from '../AppNavbarMenuContext';
import { NavbarMenuItem } from '../../types/app';

type Props = {
  className?: string;
};

const AppNavbarMenuComponent: FC<Props> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuItems = useMemo<NavbarMenuItem[]>(() => [
    {
      label: 'Enhanced SS',
      isEmphasized: true,
      children: [
        {
          label: 'このアプリについて',
          onClick: () => {
            setActiveIndex(null);
          },
        },
        {
          label: '設定',
          onClick: () => {
            setActiveIndex(null);
          },
        },
        {
          label: 'キーバインディング',
          onClick: () => {
            setActiveIndex(null);
          },
        },
      ],
    },
    {
      label: 'ファイル',
      children: [
        {
          label: 'ファイルを開く',
          onClick: () => {
            setActiveIndex(null);
          },
        },
        {
          label: '最近使用したファイル',
          onClick: () => {
            setActiveIndex(null);
          },
        },
      ],
    },
    {
      label: '編集',
    },
    {
      label: '表示',
    },
    {
      label: 'ヘルプ',
    },
  ], []);

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
      { activeIndex === null ? null : (
        <button
          type="button"
          className={styles.foundation}
          onClick={() => setActiveIndex(null)}
        >Close Menu
        </button>
      )}
    </div>
  );
};

export { AppNavbarMenuComponent as AppNavbarMenu };
