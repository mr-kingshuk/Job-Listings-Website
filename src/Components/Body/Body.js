import styles from './Body.module.css';
import Card from '../Card/Card';
import Record from '../Record/Record';

function Body(props){
    return(
        <Card>
            <Record />
            <Record />
            <Record />
        </Card>
    );
}

export default Body;