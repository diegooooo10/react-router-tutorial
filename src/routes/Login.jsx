import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { UsuarioContext } from "../context/UsuarioContext";

export const Login = () => {

  const initialForm = {
    nombre: '',
    tecnologia: '',
    email: '',
    redes: '',

  }

  const {formState, nombre, tecnologia, email, redes, onInputChange} = useForm(initialForm)
  const { setUsuario } = useContext(UsuarioContext);

  
  onsubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)
  }

  return (
    <>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Ingresa un nombre"
            value={nombre}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">
            Tecnologia
          </label>
          <input
            type="text"
            className="form-control"
            name="tecnologia"
            placeholder="Ingresa una tecnologia"
            value={tecnologia}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Ingresa un email"
            value={email}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="redes" className="form-label">
            Redes
          </label>
          <input
            type="text"
            className="form-control"
            name="redes"
            placeholder="Ingresa una de tus redes"
            value={redes}
            onChange={onInputChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
    </>
  );
};
