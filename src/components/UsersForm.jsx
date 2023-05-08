import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormUser = ({ createUserData, userSelectedData, updateUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  //register va a tener informacion del input
  //handleSubmit es la funcion que se ejecutara en el submit

  const getFormData = (data) => {
    //objeto.propiedad = valor
    //objeto["propiedad"] = valor
    console.log(data);
    if (userSelectedData) {
      //Actualizar
      updateUser(data);
    } else {
      //Crear un nuevo usuario
      createUserData(data);

      resetForm();
    }
  };

  useEffect(() => {
    if (userSelectedData !== null) {
      //Hay elemento seleccionado
      reset(userSelectedData);
    } else {
      //No hay elemento seleccionado
      resetForm();
    }
  }, [userSelectedData]);

  const resetForm = () => {
    reset({
      first_name: "",
      email: "",
      last_name: "",
      password: "",
      birthday: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(getFormData)}>
        <div className="input-wrapper">
          <label htmlFor="user-name">Nombre</label>
          <input
            type="text"
            id="user-name"
            {...register("first_name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-lastname">Apellido</label>
          <input
            type="text"
            id="user-lastname"
            {...register("last_name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-password">Contraseña</label>
          <input
            type="password"
            id="user-password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-email">Email</label>
          <input type="email" id="user-email" {...register("email")} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-birthday">Fecha de nacimiento</label>
          <input
            type="date"
            id="user-birthday"
            {...register("birthday", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Este input es requerido</span>
          )}
        </div>

        <button className="btn-edit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormUser;
