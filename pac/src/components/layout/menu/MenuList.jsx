import styles from './Menu.module.scss';
import cn from 'clsx';
import { menu } from './menu.data';
import {Link } from "react-router-dom";

const MenuList = ({isShown}) => {

    const handleLogout = () => {

    }

    return (
        <nav className={cn(styles.menu, {
            [styles.show]: isShown
        })}>
            <ul>
                {menu.map((m, i) => 
                    <li key={`_menu_${i}`}>
                        <Link className={cn(styles.link)} to={m.link}>{m.title}</Link>
                    </li>)}
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )

}

export default MenuList;