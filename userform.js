import React, { useEffect, useState } from "react";

const UserForm = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", age: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const validate = () => {
    const err = {};
    if (!formData.name) err.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Invalid email";
    if (!/^\d{10}$/.test(formData.phone)) err.phone = "Phone must be 10 digits";
    if (formData.age < 1 || formData.age > 100) err.age = "Age must be 1–100";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSave(formData);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <h3>{user ? "Edit User" : "Add User"}</h3>
        <input placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} /><br/>
        {errors.name && <span>{errors.name}</span>}<br/>

        <input placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /><br/>
        {errors.email && <span>{errors.email}</span>}<br/>

        <input placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} /><br/>
        {errors.phone && <span>{errors.phone}</span>}<br/>

        <input type="number" placeholder="Age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} /><br/>
        {errors.age && <span>{errors.age}</span>}<br/>

        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
