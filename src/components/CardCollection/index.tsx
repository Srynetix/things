import React from 'react';
import styles from './styles.module.scss';

interface Props {
    children: JSX.Element
}

const CardCollection = (props: Props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
};

export default CardCollection;
