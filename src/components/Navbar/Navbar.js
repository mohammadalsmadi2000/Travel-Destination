import { Link } from "react-router-dom"

import './Navbar.css';


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
};


function Navbar() {
    return (<>
        <nav>
            <div>
                <Link to="/" style={linkStyle}>Home</Link>
            </div>
        </nav>
    </>
    );
}

export default Navbar;