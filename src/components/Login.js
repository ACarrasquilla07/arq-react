import React, { useContext, useEffect } from 'react';

function login() {
  console.log('login');
}

const Login = ({ history }) => (
  <div className="row card-deck">

    <div className="card col-md-6">
      <div className="img-login">
        Imagen
      </div>
    </div>
    <div className="card col-md-6">
      <form onSubmit={() => login()}>
        <span>Usuario</span>
        <input type="text" id="fname" name="firstname" placeholder="Tu usuario" />

        <span>Clave</span>
        <input type="password" id="lname" name="lastname" placeholder="Tu clave" />

        <span>Rol</span>
        <select id="country" name="country">
          <option value="admin">Administrador</option>
          <option value="tuyaAdmin">Tuya</option>
        </select>

        <input type="submit" value="Ingresar" onClick={login} />
      </form>
    </div>

  </div>

);

export default Login;
