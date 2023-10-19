import { useAuth } from "../../../hooks/useAuth";
import styles from './Header.module.scss';
import { TbArrowNarrowLeft, TbUser } from 'react-icons/tb';
import Menu from "../menu/Menu";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({backLink = ''}) => {
    const { isAuth } = useAuth();
    const style = { color: "white", fontSize: "1.5em" }
    const { pathname } = useLocation();
    const navigate = useNavigate();


    return (
        <header className={styles.header}>
            {pathname !== '/' ? (
            <button onClick={() => {navigate(backLink)}}>
                {<TbArrowNarrowLeft style={style}/>}
            </button>
            ) : 
            <button onClick={() => {navigate(isAuth ? '/profile' : '/auth')}}>
                {<TbUser style={style}/>}
            </button>
            }
            <Menu />
        </header>
    )
    

}

export default Header; 