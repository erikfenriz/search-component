import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, key) => {
        return <Card
            key={key}
            id={robots[key].id}
            name={robots[key].name}
            email={robots[key].email}
        />
    });
    return (
        <div>
            {cardComponent}
        </div>
    )
};

export default CardList;

