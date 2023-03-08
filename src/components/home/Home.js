import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home() {
    return (
        <div>
            <Header title="Travel Destination" />
            <Tours />
            <Footer />
        </div>

    );
}

export default Home;