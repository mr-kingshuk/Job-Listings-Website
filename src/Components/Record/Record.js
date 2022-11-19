import styles from './Record.module.css';
import photosnap from '../../Images/photosnap.svg';

function Record(props) {
    return (
        <div className={`${styles.outer} ${styles.featured}`}>
            <div className={styles.pic}>
                <img src={photosnap} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.details}>
                    <div className={styles.row1}>
                        <div className={styles.company_name}>Photosnap</div>
                        <div className={styles.new}>New!</div>
                        <div className={styles.featured_tab}>Featured</div>
                    </div>
                    <div className={styles.row2}>
                        Senior Frontend Developer
                    </div>
                    <div className={styles.row3}>
                        <div className={styles.date}>1d ago</div>
                        <div className={styles.dot}></div>
                        <div className={styles.duration}>Full Time</div>
                        <div className={styles.dot}></div>
                        <div className={styles.loaction}>USA Only</div>
                    </div>
                </div>
                <hr />
                <div className={styles.tags}>
                    <button className={styles.tag_name}>Frontend</button>
                    <button className={styles.tag_name}>Senior</button>
                    <button className={styles.tag_name}>HTML</button>
                    <button className={styles.tag_name}>CSS</button>
                    <button className={styles.tag_name}>JavaScript</button>
                </div>
            </div>
        </div>
    );
}

export default Record;