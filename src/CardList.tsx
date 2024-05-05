import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import { MagicCard } from './interfaces';
import './Card.css'

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
        <ul className="card-list">
            {cards.map((card: MagicCard) => <li key={card.id} className="card-tile"><Card card={card} /></li>)}
        </ul>
    )
}

export default CardList;
