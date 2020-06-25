// Core Components
import { useState } from "react";
import { useRouter } from "next/router";
// Page Layout
import { getLayout } from "layouts/AuthLayout";

// Page Components
import { Div, Input, Icon, Button, Container, Row, Col } from "atomize";
import { Image } from "components/Image";
import { useStyletron } from "styletron-react";

const Index = () => {
  const [css] = useStyletron();
  const router = useRouter();

  const [auth, setAuth] = useState({ username: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }, key) => {
    setAuth((prev) => ({ ...prev, [key]: target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (auth.username === "comune.napoli" && auth.password === "preview") {
      return router.push("/home");
    }
  };

  return (
    <Div id="auth">
      <Container>
        <Row d="flex" justify="center">
          <Col size={{ xs: 10, sm: 8, md: 6 }} h="100vh" align="center">
            <Div d="flex" justify="center" m={{ y: "2rem" }}>
              <Image src="/img/logo.png" alt="greeNEETwork Logo" w="250px" />
            </Div>

            <form onSubmit={handleLogin}>
              <Input
                w="100%"
                placeholder="Nome Utente"
                onChange={(e) => handleChange(e, "username")}
                p={{ x: "2.5rem" }}
                m={{ y: "1rem" }}
                suffix={
                  <Icon
                    name="UserSolid"
                    color="success800"
                    size="16px"
                    cursor="pointer"
                    pos="absolute"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                  />
                }
              />
              <Input
                w="100%"
                placeholder="Password"
                onChange={(e) => handleChange(e, "password")}
                m={{ y: "1rem" }}
                type={showPassword ? "text" : "password"}
                suffix={
                  <Button
                    pos="absolute"
                    onClickCapture={(e) => {
                      e.preventDefault();
                      setShowPassword((prev) => !prev);
                    }}
                    bg="transparent"
                    w="3rem"
                    top="0"
                    right="0"
                    rounded={{ r: "md" }}
                  >
                    <Icon
                      name={showPassword ? "EyeSolid" : "Eye"}
                      color={showPassword ? "success300" : "success800"}
                      size="16px"
                    />
                  </Button>
                }
              />
              <Button w="100%" type="submit">
                Accedi
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

Index.getLayout = getLayout;

export default Index;
