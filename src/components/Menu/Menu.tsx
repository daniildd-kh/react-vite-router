
import clsx from "clsx";
import styles from "./Menu.module.scss";
import Anchor from "../Anchor/Anchor";
import { MenuItem } from "./types";


type MenuProps = {
  items: MenuItem[];
  className?: string;
};

const Menu = ({ items, className, ...props }:MenuProps) => {
  return (
    <nav className={clsx(styles.menu, className)} {...props}>
      <ul className={styles.menuList}>
        {items.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Anchor
              href={item.href}
              className={clsx(styles.menuLink, item.className)}
            >
              {item.label}
            </Anchor>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
