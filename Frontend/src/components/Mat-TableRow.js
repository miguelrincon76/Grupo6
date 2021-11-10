import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class MaterialTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteMaterial = this.deleteMaterial.bind(this);
  }

  deleteMaterial() {
    axios
      .delete(
        "http://localhost:4000/materials/delete-material/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Material successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            className="edit-link"
            to={"/edit-material" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteMaterial} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
