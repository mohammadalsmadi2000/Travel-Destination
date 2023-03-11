
import { useParams } from "react-router-dom";
import Tour from "../tours/tour/Tour";
import './TourDetails.css'
import { useState } from "react";
const data = require("../../data/db.json");

function TourDetails() {
    const [seeMore, setSeeMore] = useState(true);

    const { id } = useParams();
    console.log(id);
    const element = data.filter((el) => {
        return id == el.id;
    })


    if (!element[0]) {
        return <div>Card not found</div>;
    }


    const toggleDescription = () => {
        setSeeMore(!seeMore);
    };

    const lines = element[0].info.split('.');
    const firstThreeLines = lines.slice(0, 3).join('.');
    const restOfDescription = seeMore ? lines.slice(3).join('.') : null;
    console.log(lines)


    return (
        <>
            <div className="details-container">
                <div className="details-image-container">
                    <img className="details-image" src={element[0].image} alt={element[0].name} />
                </div>
                <div className="details-content">
                    <h2 className="details-title">{element[0].name}</h2>
                    <div className="details-info">
                        <div className="details-info-item">
                            <span className="details-info-label">Price:</span>
                            <span className="details-info-value">{element[0].price} $</span>
                        </div>
                    </div>
                    <div className="details-div-info">
                        <p>
                            {seeMore ? <>{firstThreeLines}  <button onClick={toggleDescription}>
                                {!seeMore ? 'See Less' : 'See More'}
                            </button>
                            </> : <>{element[0].info} <button onClick={toggleDescription}>
                                {!seeMore ? 'See Less' : 'See More'}
                            </button></>}
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default TourDetails;