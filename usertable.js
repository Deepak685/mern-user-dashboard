import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => (
  <table border="1" cellPadding="10" style={{ marginTop: "1rem", width: "100%" }}>
    <thead>
      <tr><th>Name</th><th>Email</th><th>Phone</th><th>Age</th><th>Actions</th></tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.age}</td>
          <td>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
