/** ナビゲーションバーのメニューアイテム */
export type NavbarMenuItem = {
  /** メニューラベル */
  label: string;
  /** 強調するか */
  isEmphasized?: boolean;
  /** クリックされたときの処理 */
  onClick?: ()=> void | Promise<void>;
  /** サブリスト */
  children?: NavbarMenuItem[];
};
