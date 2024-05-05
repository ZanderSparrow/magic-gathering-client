import React from 'react';

import { MagicCard } from './interfaces';

const Card = ({ card }: {card: MagicCard}) => {
    return (
        <div>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
        </div>
    )
}

export default Card;