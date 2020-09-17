import React from "react";
import Container from "@material-ui/core/Container";
import Form from "./Form";
import Photos from "./Photos";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <Photos />
      </Container>
    </>
  );
}
