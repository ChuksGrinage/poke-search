
import React, { ReactNode } from 'react';
import styles from './Card.module.css';
import classNames from 'classnames';

interface CardProps {
    name: string;
    spriteURL: string;
    onCardClick: (e: string) => any;
    flippable?: boolean;
    back?: ReactNode;
    // render?: (display: boolean, setDisplay: any) => ReactNode;
}

const Card: React.FC<CardProps> = ({ name, spriteURL, onCardClick, flippable, back }) => {
  
    // const [display, setDisplay] = useState(false);
    const flipped = flippable ? styles.flippable : null;
    return (
      <div className={classNames(styles.card, flipped)} onClick={() => onCardClick(name)}>
        <div className={styles.front}>
          <img className={styles.sprite} src={spriteURL} alt={name} />
          <h3>{name}</h3>
          {/* {render && render(display, setDisplay)} */}
        </div>
        {flippable && <div className={styles.back}>{back}</div>}
      </div>
    );
}

export default Card;
