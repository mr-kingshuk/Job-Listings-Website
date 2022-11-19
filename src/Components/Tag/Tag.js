import styles from './Tag.module.css';

function Tag(props){
    return(<button className={styles.btn}>{props.name}</button>)
}

export default Tag;