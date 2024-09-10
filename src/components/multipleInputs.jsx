import React, { useState } from 'react';

function MultipleInputs() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div>
      <h2>Multiple Inputs</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleInputs;
