import { useEffect, useState } from "react";
import employees from "./users";

function EmployeeForm() {
  const initialState = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    hobbies: ""
  };
  const [user, setUser] = useState(initialState);
  const [users, setUsers] = useState(employees);
  const { name, username, email, phone, website, hobbies } = user;

  //   const [checkedState, setCheckedState] = useState(new Array(checking.length).fill(false))

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(users);
  const onSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, { ...user, id: getRandomID() }]);
    setUser(initialState);
  };
  const onDelete = (userid) => {
    const newUsers = users.filter((user) => user.id !== userid);
    setUsers(newUsers);
  };

  // useEffect(() => {
  //   onSubmit()
  // }, [])
  const getRandomID = () => {
    let rand = Math.round(Math.random() * 1000000);
    return rand;
  };

  console.log(getRandomID());

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="name"
            value={name}
            onChange={onInputChange}
          ></input>
        </div>
        <br />

        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            value={email}
            onChange={onInputChange}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="url"
            placeholder="www.example.com"
            name="website"
            value={website}
            onChange={onInputChange}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="tel"
            placeholder="Contact No"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            name="phone"
            value={phone}
            onChange={onInputChange}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value={hobbies}
            onChange={onInputChange}
          ></input>
          <br />
          <label htmlFor={hobbies}>Arts</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value={hobbies}
            onChange={onInputChange}
          ></input>
          <br />
          <label>Music</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value={hobbies}
            onChange={onInputChange}
          ></input>
          <br />
          <label>Sports</label>
        </div>
        <button>Submit</button>
      </form>

      {users.map((user, index) => {
        return (
          <div style={{ border: "1px solid" }}>
            <h2>{user.id}</h2>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeForm;
