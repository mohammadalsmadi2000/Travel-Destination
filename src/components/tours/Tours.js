import './Tours.css'

const data = require("../../data/db.json");

function Tours() {
    return (
        <div className="tours-container">
            {data.map((item) => (
                <div className="tour" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="tour-info">
                        <h3 className="tour-title">{item.name}</h3>
                        {/* <h3 className='tour-price'>{item.price}</h3> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tours;