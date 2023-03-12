import { Link } from 'react-router-dom';
import './Tour.css'

function Tour({ id, name, img, path }) {
    console.log(path)
    return (
        <>
      
                <Link to={path} >
                    <div className="tour" >
                        <img src={img} alt={name} />
                        <div className="tour-info">
                            <h3 className="tour-title">{name}</h3>
                        </div>
                    </div>
                </Link>
        

        </>
    );
}

export default Tour;