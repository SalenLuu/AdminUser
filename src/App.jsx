import "./App.css";
import { useState, useEffect } from "react";
import FormUser from "./components/UsersForm";
import UsersList from "./components/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [userDataUpdate, setUserDataUpdate] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUsers(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const getAPIData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUsers(resp.data))
      .catch((error) => console.error(error));
  };

  const addUser = (data) => {
    /* 
        axios
        .post( "url", body )
    */

    axios
      .post("https://users-crud.academlo.tech/users/", data)
      .then(() => getAPIData())
      .catch((error) => console.error(error));
  };

  const deleteUser = (userId) => {
    /*
        axios
        .delete( "url" )
    */

    axios
      .delete(`https://users-crud.academlo.tech/users/${userId}/`)
      .then(() => getAPIData())
      .catch((error) => console.error(error));
  };

  const selectUser = (userData) => {
    setUserDataUpdate(userData);
  };

  const updateUser = (editedUser) => {
    const index = users.findIndex((user) => user.id === editedUser.id);

    users[index] = editedUser;
    setUsers([...users]);
    setUserDataUpdate(null);
  };

  return (
    <div className="App">
      <FormUser
        createUserData={(data) => addUser(data)}
        userSelectedData={userDataUpdate}
        updateUser={updateUser}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
