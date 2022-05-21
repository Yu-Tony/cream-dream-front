import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none" };
const TypographyStyle = {
  color: "text.primary",
  fontSize: 30,
  m: 1,
  fontWeight: "bold",
};

const borderedStyle = {
  border: 2,
  borderColor: "text.primary",
  borderRadius: 16,
  mt: 1,
  padding: "0 0.5rem",
};

const giveStyle = (bordered) => {
  if (bordered) return { ...TypographyStyle, ...borderedStyle };

  return TypographyStyle;
};

function LinkButton({ page, label, bordered }) {
  return (
    <Link to={`/${page}`} style={linkStyle}>
      <Typography sx={giveStyle(bordered)}>{label}</Typography>
    </Link>
  );
}

export default LinkButton;
