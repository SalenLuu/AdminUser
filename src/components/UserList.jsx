const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <ul>
      {users?.map((userElement, index) => (
        <li key={`user-${index}`} className="user-box">
          <h4>
            <span>Nombre:</span> {userElement.first_name}{" "}
            {userElement.last_name}
          </h4>
          <h4>
            <span>Email:</span> {userElement.email}
          </h4>
          <h4>
            <span>Fecha de nacimiento:</span> {userElement.birthday}
          </h4>

          <button
            className="btn-delete"
            onClick={() => deleteUser(userElement.id)}
          >
            Eliminar
          </button>
          <button className="btn-edit" onClick={() => selectUser(userElement)}>
            Seleccionar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
