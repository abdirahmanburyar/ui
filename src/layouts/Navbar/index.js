import React from "react";
import { useSelector, connect } from "react-redux";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { logout } from "../../redux/admin/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./navbar.style.css";
import _ from "lodash";
const Header = ({ logout }) => {
  const auth = useSelector((state) => state.admin.user);
  return (
    <Navbar fixed="top" bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faEye} />
      </Navbar.Brand>

      <Nav className="mr-auto"></Nav>
      {!_.isEmpty(auth) ? (
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {auth.role.toUpperCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item href="#">{auth.fullName}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#" onClick={async (e) => await logout()}>
              <div className="logout">
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </Navbar>
  );
};

export default connect(null, { logout })(Header);
