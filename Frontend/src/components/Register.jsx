import React from "react";
import "../assets/css/Register.css";
//imagenes
import logo from "../assets/img/logo.png";
//servicios
import { Apiurl } from "../services/apiusuarios";
//librerias
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    form: {
      username: "",
      password: "",
      email: "",
      roles: [],
    },
    error: false,
    errorMsg: "",
  };
  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    //console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = Apiurl + "/api/auth/signup?";
    axios
      .post(url, this.state.form)

      .then((response) => {
        //        console.log(response);
        //        console.log(response.data.token);
        //        console.log(response.status);
        if (response.statusText === "OK") {
          localStorage.setItem("token", response.data.token);
          this.props.history.push("/");
        } else {
          //          console.log(response.status + "casi");
          this.setState({
            error: true,
            errorMsg: "Error de conexion",
          });
        }
        console.log("Sing Up ");
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMsg: "Error de conexion",
        });
        console.error("Error de conexion");
      });
  };

  render() {
    return (
      <React.Fragment>
        <div id="register">
          <h3 className="text-center text-white pt-5">
            <img src={logo} width="50px" alt="User Icon" /> Register form
          </h3>

          <div className="container">
            <div
              id="register-row"
              className="row justify-content-center align-items-center"
            >
              <div id="register-column" className="col-md-6">
                <div id="register-box" className="col-md-12">
                  <form
                    id="register-form"
                    className="form"
                    action=""
                    method="post"
                    onSubmit={this.manejadorSubmit}
                  >
                    <h3 className="text-center text-info">Registro</h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">
                        Usuario:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.manejadorChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="text-info">
                        E-mail:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={this.manejadorChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">
                        Contraseña:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.manejadorChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="roles" className="text-info">
                        Roles:
                      </label>
                      <br />
                      <input
                        type="roles"
                        name="roles"
                        className="form-control"
                        onChange={this.manejadorChange}
                      />
                    </div>
                    <div className="form-group">
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="Registrar"
                        onClick={this.manejadorBoton}
                      />
                    </div>
                    <hr />
                    {this.state.error === true && (
                      <div className="alert alert-danger" role="alert">
                        {this.state.errorMsg}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
