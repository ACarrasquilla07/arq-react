import React, { useContext, useEffect } from 'react';
import Context from '../context/context';

const Login = ({ history }) => {


  const { state, dispatch } = useContext(Context);
  const formLogin = state.get('formLogin').toJS();

  function login() {
    console.log('login');
    console.log(formLogin);
  }

  return (
    <div className="row card-deck">

      <div className="card col-md-6">
        <div className="img-login">
          Imagen
        </div>
      </div>
      <div className="card col-md-6">
        <form
          onSubmit={() => {
            login();
          }}
        >
          <span>Usuario</span>
          <input
            type="text"
            id="usuario"
            placeholder="Tu usuario"
            onChange={(e) => dispatch({
              key: ['formLogin', 'fields', 'usuario', 'value'],
              payload: e.target.value,
            })}
          />

          <span>Clave</span>
          <input type="password" id="lname" name="lastname" placeholder="Tu clave" />

          <span>Rol</span>
          <select id="country" name="country">
            <option value="admin">Administrador</option>
            <option value="tuyaAdmin">Tuya</option>
          </select>

          <button
            id="btn_buscarAfiliado"
            type="button"
            className="btn btn-login"
            onClick={login}
          >
            Ingresar
          </button>
        </form>
      </div>

    </div>

  );
};

export default Login;
