import React from "react";
import Layout from "./Layout";

export default function Form(props) {
  const { sol, camera, rover, page, onChange, showPhotos } = props;
  return (
    <Layout
      onClick={showPhotos}
      onChange={onChange}
      sol={sol}
      camera={camera}
      rover={rover}
      page={page}
    />
  );
}
