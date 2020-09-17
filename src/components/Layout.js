import React from "react";
import Container from "@material-ui/core/Container";
import Form from "./Form";
import Photos from "./Photos";
import Header from "./Header";

export const FormContext = React.createContext();

export default class Layout extends React.Component {
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
    const { sol, camera, rover, page } = this.state;
    return (
      <>
        <Header />
        <Container>
          <FormContext.Provider
            value={{
              sol,
              camera,
              rover,
              page,
              onChange: this.onChange,
              onClick: this.onClick,
              nextPage: this.nextPage,
            }}
          >
            <Form />
            <Photos />
          </FormContext.Provider>
        </Container>
      </>
    );
  }
}
