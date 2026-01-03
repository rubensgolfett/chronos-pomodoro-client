import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
// import { SunIcon } from "lucide-react";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";


export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      {/* <Container>
        <SunIcon />
      </Container> */}
    </>
  );
}
