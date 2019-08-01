import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaIdCardAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthContext from './../../context/auth/authContext';
import ContactContext from './../../context/contact/contactContext';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const contactContext = useContext(ContactContext);
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <span id="icon">
            <FaSignOutAlt />
          </span>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/Register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <span id="icon">
          <FaIdCardAlt className="icon" />
        </span>
        {title}
      </h1>
      <ul>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Contacts'
};

export default Navbar;
