import './Tours.css'
import Tour from './tour/Tour';
const data = require("../../data/db.json");

function Tours() {
    return (
        <div className="tours-container">
            {data.map((item) => (

                <Tour id={item.id} name={item.name} img={item.image} path={`/city/${item.id}`} />
            ))}
        </div>

    );
}

export default Tours;