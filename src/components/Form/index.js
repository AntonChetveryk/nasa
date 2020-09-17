import React from "react";

import { connect } from "react-redux";
import { planetsFetchData } from "../../redux/actions";
import Layout from "./layout";

class Form extends React.Component {
  state = {
    rover: "opportunity",
    camera: "fhaz",
    sol: 1,
    page: 1,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nextPage = (e) => {
    this.setState((state) => {
      return { page: state.page + 1 };
    });
  };

  onClick = (event) => {
    const { sol, camera, rover, page } = this.state;
    event.preventDefault();
    if (sol > 0) {
      this.props.planetsFetchData({ rover, camera, sol, page });
    }
  };

  render() {
    const { sol, camera, rover } = this.state;
    return (
      <Layout
        onClick={this.onClick}
        onChange={this.onChange}
        nextPage={this.nextPage}
        sol={sol}
        camera={camera}
        rover={rover}
      />
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { planetsFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
