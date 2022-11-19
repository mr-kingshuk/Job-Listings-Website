import styles from './Header.module.css';
//bg-header-mobile.svg and bg-header-desktop.svg
function Header(){
    return(
        <div className={styles.outer}>
            <img className={styles.img} src="./images/bg-header-desktop.svg" alt="bg-header" />
        </div>
    );
}

export default Header;