import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import { HiOutlineDotsVertical } from 'react-icons/hi';


function Header({onClickMenu}){


    return(
    <div className ={styles.header}>
        <div className ={styles.tab}>
            <FiMenu className = {styles.icon} onClick={onClickMenu}/>
            <img src= {youtube_logo} alt="logo" className ={styles.logo} />
        </div>
        <div className={styles['center-tab']}>
            <input className={styles.input} />
            <AiOutlineSearch className={styles['search-icon']} />
        </div>
        <div className={styles.tab}>
            <BsGrid3X3Gap className={styles.icon} />
            <HiOutlineDotsVertical className ={styles.icon} />
        </div>
    </div>
);
}

export default Header;