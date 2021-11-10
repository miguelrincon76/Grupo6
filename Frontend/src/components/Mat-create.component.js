import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateMaterial extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeMaterialName = this.onChangeMaterialName.bind(this);
    this.onChangeMaterialEmail = this.onChangeMaterialEmail.bind(this);
    this.onChangeMaterialRollno = this.onChangeMaterialRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
  }

  onChangeMaterialsName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeMaterialEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeMaterialRollno(e) {
    this.setState({ rollno: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const materialObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    };

    axios
      .post("http://localhost:4000/materials/create-materials", materialObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      email: "",
      rollno: "",
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeMaterialName}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeMaterialEmail}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeMaterialRollno}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Materials
          </Button>
        </Form>
      </div>
    );
  }
}
