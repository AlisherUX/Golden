import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import * as Style from "./style";

const BreadCrumbs = () => {
  return (
    <Style.BreadCrumb aria-label="breadcrumb">
      <Link underline="hover" color="inherit" to="/">
        Главная
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Style.BreadCrumb>
  );
};

export default BreadCrumbs;
