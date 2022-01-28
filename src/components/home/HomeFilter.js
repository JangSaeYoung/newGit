import styles from './HomeCard.module.css';

function HomeFilter({filter, text, onClickfilter}){
    return (
        <button
        className={filter === text? styles.black:styles.gray}
        onClick={onClickfilter}
    >
    {text}
    </button>   
    );
}


export default HomeFilter;