import styles from './FilterButton.module.css';

function FilterButton(props){
    return(
    <div className={styles.btn}>
        <div className={styles.name}>{props.name}</div>
        <button>
            <img src="images/icon-remove.svg" alt="" />
        </button>
    </div>)
}

export default FilterButton;