import CartWidget from "../CartWidget/CartWidget";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div>
                    <button variant="dprimary"><Link to="/">Home</Link></button>{' '}
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categories
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Link to="/category/cellphones">Cellphones</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/category/notebooks">Notebooks</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/category/others">Others</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar