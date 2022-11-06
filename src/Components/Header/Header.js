import styles from './Header.module.css';
import imgMobile from '../../Images/bg-header-mobile.svg';
import imgDesktop from '../../Images/bg-header-desktop.svg';

function Header(){

    //
    let bgHeader = imgDesktop;

    return(
        <div className={styles.outer}>
            <img className={styles.img} src={bgHeader} alt="bg-header" />
        </div>
    );
}

export default Header;