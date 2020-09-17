import React from "react";
import Container from "@material-ui/core/Container";
import Form from "./Form";
import Photos from "./Photos";
import Header from "./Header";
import { updatePlanets, planetsFetchData } from "../redux/actions";
import { connect } from "react-redux";

class Layout extends React.Component {
  state = {
    rover: "opportunity",
    camera: "fhaz",
    sol: 1,
    page: 1,
    isLoading: true,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nextPage = (e) => {
    this.setState(
      (state) => {
        return { page: state.page + 1 };
      },
      () => {
        const { sol, camera, rover, page } = this.state;
        this.props.updatePlanets({ rover, camera, sol, page });
      }
    );
  };

  showPhotos = (event) => {
    event.preventDefault();

    if (this.state.sol > 0) {
      this.setState({ page: 1 }, () => {
        const { sol, camera, rover, page } = this.state;
        this.props.planetsFetchData({ rover, camera, sol, page });
      });
    }
  };

  render() {
    const { sol, camera, rover, page } = this.state;
    return (
      <>
        <Header />
        <Container>
          <Form
            onChange={this.onChange}
            showPhotos={this.showPhotos}
            rover={rover}
            sol={sol}
            page={page}
            camera={camera}
          />
          <Photos nextPage={this.nextPage} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = { updatePlanets, planetsFetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
