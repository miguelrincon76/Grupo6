import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="submit"
            name="submit"
            className="btn btn-info btn-md"
            value="Cotizaciones"
          />

          <input
            type="submit"
            name="submit"
            className="btn btn-info btn-md"
            value="Presupuestos"
          />

          <input
            type="submit"
            name="submit"
            className="btn btn-info btn-md"
            value="APU"
          />
          <input
            type="submit"
            name="submit"
            className="btn btn-info btn-md"
            value="Materiales"
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;
