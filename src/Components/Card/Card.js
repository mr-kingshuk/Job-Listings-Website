import styles from './Card.module.css';

function Card(props){
    /**
     * Dot Operator notation :- 
     * object.propertyName
     * object[expression]
     */
    //checks if props exists or not, and passes value accordingly
    let addStyles = props.styleGuide && styles[props.styleGuide];
    return(
        <div className={`${styles.outer} ${addStyles}`}>
            {props.children}
        </div>
    );
}

export default Card; 