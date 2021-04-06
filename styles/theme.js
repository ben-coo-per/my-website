import { extendTheme } from "@chakra-ui/react";

const colors = {
  darkChocolate: "#261C15",
  queenBlue: "#33658A",
  babyPowder: "#FFFFF8",
  ghostGray: "ECECEC",
  flame: "#F05D23",
  bg: "#F7F7F3",
};

const textStyles = {
  h1: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "100px",
    letterSpacing: "-1.8%",
    color: "darkChocolate",
  },
  h2: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "72px",
    letterSpacing: "-1.5%",
    color: "darkChocolate",
  },
  h3: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "50px",
    lineheight: "57.45px",
    letterSpacing: "-2%",
    color: "darkChocolate",
  },
  h4: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "36px",
    lineheight: "57.45px",
    letterSpacing: "-2%",
    color: "darkChocolate",
  },
  h5: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "24px",
    lineheight: "57.45px",
    letterSpacing: "-2%",
    color: "darkChocolate",
  },
  subtitle: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "50px",
    lineheight: "60.51px",
    color: "darkChocolate",
  },

  bold: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "24px",
    lineheight: "27.58px",
    color: "darkChocolate",
  },
  body: {
    fontFamily: "Inter, Roboto, sans-serif",
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
  link: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    lineheight: "60.51px",
    color: "darkChocolate",
  },
  selectedLink: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "18px",
    lineheight: "60.51px",
    color: "queenBlue",
  },
};

const styles = {
  global: (props) => ({
    "html, body": {
      color: colors.darkChocolate,
      bg: colors.bg,
    },
    a: {
      color: "secondary.100",
    },
  }),
};

const layerStyles = {};

const theme = extendTheme({ colors, textStyles, layerStyles, styles });

export { theme };
