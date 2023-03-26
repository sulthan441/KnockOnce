import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = { name, email, phone, date };
    axios.post('http://localhost:5000/appointments/add', appointment)
      .then(res => console.log(res.data))
      .catch(err => console.log(`Error: ${err}`));
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <div id='form div' className='indDivs'>
        <label className='labels' htmlFor="name">Name:</label>
        <input className='inputs' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='indDivs'>
        <label className='labels' htmlFor="email">Email:</label>
        <input className='inputs' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='indDivs'>
        <label className='labels' htmlFor="phone">Phone:</label>
        <input className='inputs' type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className='indDivs'>
        <label className='labels' htmlFor="date">Date:</label>
        <input className='inputs' type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;