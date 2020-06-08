/**
 * App Theme
 */
import { ThemeProvider, StyleReset } from "atomize";
import { theme } from "styletron";
import { useStyletron } from "styletron-react";

export const AuthLayout = (props) => {
  const [css] = useStyletron();
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <div id="login">{props.children}</div>
    </ThemeProvider>
  );
};

export const getLayout = (page) => <AuthLayout>{page}</AuthLayout>;
