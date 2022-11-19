import styles from './Record.module.css';
import Tag from '../Tag/Tag';

// images can be directly written in src, if it is in public folder
function Record(props) {
    return (
        <div className={`${styles.outer} ${props.featured ? styles.featured : null}`}>
            <div className={styles.pic}>
                <img src={props.logo} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.details}>
                    <div className={styles.row1}>
                        <div className={styles.company_name}>{props.name}</div>
                        {props.new && <div className={styles.new}>New!</div>}
                        {props.featured && <div className={styles.featured_tab}>Featured</div>}
                    </div>
                    <div className={styles.row2}>
                        {props.position}    
                    </div>
                    <div className={styles.row3}>
                        <div className={styles.date}>{props.postedAt}</div>
                        <div className={styles.dot}></div>
                        <div className={styles.duration}>{props.contract}</div>
                        <div className={styles.dot}></div>
                        <div className={styles.loaction}>{props.location}</div>
                    </div>
                </div>
                <hr />
                <div className={styles.tags}>
                    <Tag name = {props.role}/>
                    <Tag name = {props.level}/>
                    {props.languages.map((lang) => <Tag name = {lang}/>)}
                    {props.tools.map((tool) => <Tag name = {tool}/>)}
                </div>
            </div>
        </div>
    );
}

export default Record;