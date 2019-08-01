import React, { useState, useContext, useEffect } from 'react';
import ContactContext from './../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const isValidPhone = phone => {
    const regex = new RegExp('^[0-9]*$');
    if (phone === '' || phone.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      if (isValidPhone(contact.phone)) {
        addContact(contact);
        clearAll();
      } else {
        alert('Please enter a valid phone number');
      }
    } else {
      if (isValidPhone(contact.phone)) {
        updateContact(contact);
        clearAll();
      } else {
        alert('Please enter a valid phone number');
      }
    }
  };

  const clearAll = () => {
    clearCurrent();
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  const { name, email, phone, type } = contact;

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="email@mail.com"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </label>
      <label>
        phone:
        <input
          type="text"
          placeholder="1234567890"
          name="phone"
          value={phone}
          onChange={onChange}
        />
      </label>

      <h5>Contact Type</h5>
      <label>
        Personal
        <input
          className="radio-first-child"
          type="radio"
          name="type"
          value="personal"
          checked={type === 'personal'}
          onChange={onChange}
        />
      </label>
      <label>
        Professional
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange}
        />
      </label>

      <div>
        <label>
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value={current ? 'Update Contact' : 'Add Contact'}
          />
        </label>
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
