import styles from './Filter.module.css';
import Card from '../Card/Card';
import FilterButton from '../FilterButton/FilterButton';

function Filter(){
    return(
        <Card styleGuide = "first">
            <div className={styles.outer}>
                <div className={styles.filter_btn}>
                    <FilterButton name="HTML"/>
                    <FilterButton name="CSS"/>
                    <FilterButton name="JavaScript"/>
                    <FilterButton name="Senior"/>
                </div>
                <button className={styles.clear}>Clear</button>
            </div>
        </Card>
    );
}

export default Filter;