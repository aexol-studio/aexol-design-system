import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Trans } from 'react-i18next';
// import * as classnames from 'classnames';
import * as styles from './styles/MenuItemsStyle';

type linkType = {
  name: string;
  to: string;
}

export interface IMenuItemsProps {
  links: linkType[];
  style?: React.CSSProperties;
}

export const MenuItems: React.FunctionComponent<IMenuItemsProps> = (props) => {
  const {
    links,
    style,
    ...restProps
  } = props

  const mapLinks = (el: linkType) => {
    return(
      <li
        key={el.name}
        className={styles.MenuItem}
      >
        <NavLink
          className={styles.MenuItemLink}
          to={el.to}
        >
          <Trans>{el.name}</Trans>
        </NavLink>
      </li>
    )
  }

  return (
    <ul
      className={styles.MenuLinksContainer}
      style={style}
      {...restProps}
    >
      {links.map(mapLinks)}
    </ul>
  )
};

export default MenuItems;
