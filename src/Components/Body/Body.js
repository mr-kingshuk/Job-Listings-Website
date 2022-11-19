import styles from './Body.module.css';
import Card from '../Card/Card';
import Record from '../Record/Record';

import { DataContext } from '../../App';
import { useContext } from 'react';

function Body(){
    const data = useContext(DataContext);
    return(
        <Card>
            {data.map((record) =>
                <Record key = {record.id}
                name = {record.company}
                logo = {record.logo}
                new = {record.new}
                featured = {record.featured}
                position = {record.position}
                postedAt = {record.postedAt} 
                contract = {record.contract}
                location = {record.location}

                role = {record.role}
                level = {record.level}
                languages = {record.languages}
                tools = {record.tools}        
                                />
            )}
        </Card>
    );
}

export default Body;