import React from 'react';

import Card from './Card';

const CardList = () => {
    return (
        <div>
            {[1,2,3].map(item => <Card key={item} />)}
        </div>
    )
}

export default CardList;
