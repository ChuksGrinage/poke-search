
import React, { ReactNode } from 'react';
import styles from './Card.module.css';
import classNames from 'classnames';

interface CardProps {
    name: string;
    spriteURL: string;
    onCardClick: (e: string) => void;
    flippable?: boolean;
    back?: ReactNode;
}

const Card: React.FC<CardProps> = ({ name, spriteURL, onCardClick, flippable, back }) => {
  
    const flipped = flippable ? styles.flippable : null;
    return (
      <div className={classNames(styles.card, flipped)} onClick={() => onCardClick(name)}>
        <div className={styles.front}>
          <img className={styles.sprite} src={spriteURL} alt={name} />
          <h3>{name}</h3>
        </div>
        {flippable && <div className={styles.back}>{back}</div>}
      </div>
    );
}

export default Card;
