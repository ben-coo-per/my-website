import { extendTheme } from "@chakra-ui/react";

const colors = {
  darkChocolate: "#261C15",
  queenBlue: "#33658A",
  babyPowder: "#FFFFF8",
  flame: "#F05D23",
  white: "#F7F7F3",
};

const textStyles = {
  h1: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "100px",
    letterSpacing: "-1.8%",
    color: "darkChocolate",
  },
  h2: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "72px",
    letterSpacing: "-1.5%",
    color: "darkChocolate",
  },
  h3: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "50px",
    lineheight: "57.45px",
    letterSpacing: "-2%",
    color: "darkChocolate",
  },
  h4: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "36px",
    lineheight: "57.45px",
    letterSpacing: "-2%",
    color: "darkChocolate",
  },
  h5: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "24px",
    lineheight: "57.45px",
    letterSpacing: "-2%",
    color: "darkChocolate",
  },
  subtitle: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "30px",
    lineheight: "34.47px",
    color: "darkChocolate",
  },
  bold: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "24px",
    lineheight: "27.58px",
    color: "darkChocolate",
  },
  body: {
    fontFamily: "Ubuntu, Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "24px",
    lineheight: "34.47px",
    color: "darkChocolate",
  },
  caption: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    color: "darkChocolate",
  },
};

const styles = {
  global: (props) => ({
    "html, body": {
      color: colors.darkChocolate,
      bg: colors.white,
    },
    a: {
      color: "secondary.100",
    },
  }),
};

const layerStyles = {};

const theme = extendTheme({ colors, textStyles, layerStyles, styles });

export { theme };
