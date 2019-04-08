import React from 'react';

import Label from './Label/Label';


const List = () =>  {
    return (       
        <div className="list">
            <h3 className="list-title">Tasks to Do</h3>
            <ul className="list-items">
                <Label />
                <Label />
                <Label />
            </ul>
            <button className="add-card-btn btn">Add a card</button>
        </div>
    );
    
}

export default List;



