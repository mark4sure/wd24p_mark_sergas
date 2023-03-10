import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Employee from "./pages/Employee";

function Navigation() {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/features" className="nav-link" href="#">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pricing" className="nav-link" href="#">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employee" className="nav-link" href="#">Employee</Link>
                                </li>
                                <form className="d-flex" role="search">
                                    <button className="btn btn-outline-success" type="submit">Logout</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <br />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="features" element={<Features />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="employee" element={<Employee />} />
                </Routes>
            </Router>
        </div>
    )
};

export default Navigation;