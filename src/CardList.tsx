import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import { MagicCard } from './interfaces';

const CardList = () => {
    const [cards, setCards] = useState<MagicCard[]>([]);;

    useEffect(() => {
        axios.get('http://localhost:8000/cards/',
          {headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        })
        .then(response => {
            console.log("Success");
            setCards(response.data);
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {cards.map((card: MagicCard, idx) => <Card key={idx} card={card} />)}
        </div>
    )
}

export default CardList;
