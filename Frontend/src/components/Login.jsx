import React from "react";
//estilos CSS
import "../assets/css/Login.css";
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
      email: "",
      password: "",
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
    // console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = Apiurl + "/api/auth/signin?";
    axios
      .post(url, this.state.form)

      .then((response) => {
        //        console.log(response);
        //        console.log(response.data.token);
        //        console.log(response.status);
        if (response.statusText === "OK") {
          localStorage.setItem("token", response.data.token);
          this.props.history.push("/dashboard");
        } else {
          //          console.log(response.status + "casi");
          this.setState({
            error: true,
            errorMsg: "Error de conexion",
          });
        }
        //        console.log("Log in ");
      })
      .catch((error) => {
        this.setState({
          error: true,
          errorMsg: "Error de conexion",
        });
        //        console.error("Error de conexion");
      });
  };

  render() {
    return (
      <React.Fragment>
        <div id="login">
          <h3 className="text-center text-white pt-5">
            <img src={logo} width="50px" alt="User Icon" /> Login form
          </h3>

          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    className="form"
                    action=""
                    method="post"
                    onSubmit={this.manejadorSubmit}
                  >
                    <h3 className="text-center text-info">Ingreso a la App</h3>
                    <div className="form-group">
                      <label htmlFor="email" className="text-info">
                        email:
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
                      <label htmlFor="remember-me" className="text-info">
                        <span>Recuerdame</span> 
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="Ingresar"
                        onClick={this.manejadorBoton}
                      />
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="/register" className="text-info">
                        Registrarse
                      </a>
                    </div>
                    <br /> <br />
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
