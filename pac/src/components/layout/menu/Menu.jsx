import styles from './Menu.module.scss';
import { TbMenu2 } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';
import MenuList from "./MenuList";
import { useOutside } from "../../../hooks/useOutside";


const Menu = () => {
    const {isShown, ref, setShown} = useOutside(false);
    const style = { color: "white", fontSize: "1.5em" }
    
    
    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setShown(!isShown)}>
                {isShown ? <IoMdClose style={style} />: <TbMenu2 style={style}/>}
            </button>
            <MenuList isShown={isShown}/>
        </div>
    )
}

export default Menu;