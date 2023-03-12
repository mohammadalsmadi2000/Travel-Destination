import './Tours.css'
import Tour from './tour/Tour';
import React from 'react'
const data = require("../../data/db.json");

function Tours() {
    return (
        <div className="tours-container">
            {data.map((item) => (
               <React.Fragment key={item.id}>
                <Tour id={item.id} name={item.name} img={item.image} path={`/city/${item.id}`} />
                </React.Fragment>
            ))}
        </div>

    );
}

export default Tours;