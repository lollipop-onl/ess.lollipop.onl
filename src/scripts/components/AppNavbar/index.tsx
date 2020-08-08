import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import { AppNavbarMenu } from '../AppNavbarMenu';
import { NavbarMenuItem } from '../../types/app';
import styles from './index.modules.scss';

type Props = {
  className?: string;
};

const AppNavbarComponent: FC<Props> = ({ className }) => {
  const menuItems = useMemo<NavbarMenuItem[]>(() => [
    {
      label: 'Enhanced SS',
      isEmphasized: true,
      children: [
        {
          label: 'このアプリについて',
          onClick: () => {
          },
        },
        {
          label: '設定',
          onClick: () => {
          },
        },
        {
          label: 'キーバインディング',
          onClick: () => {},
        },
      ],
    },
    {
      label: 'ファイル',
      children: [
        {
          label: 'ファイルを開く',
          onClick: () => {},
        },
        {
          label: '最近使用したファイル',
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
    <div className={cn(styles.appNavbar, className)}>
      <AppNavbarMenu menuItems={menuItems} />
    </div>
  );
};

export { AppNavbarComponent as AppNavbar };
