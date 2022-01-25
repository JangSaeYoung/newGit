import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({children, activeMenu}){

    const [hideMenu, setHideMenu] = useState(true);

    const onClickMenu = () => {
        setHideMenu(hideMenu =>!hideMenu);
      }

    return(
    < div className={styles.container}>
        <Header onClickMenu={onClickMenu} />
        <div className ={styles.layout}>
            {hideMenu? <Menu activeMenu={activeMenu} />:<div></div>}
            <div className={ hideMenu ? styles.contents : styles.widecontents}>{children}</div>
        </div> 
    </div>
    );
}

export default Layout;