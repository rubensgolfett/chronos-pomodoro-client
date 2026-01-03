import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { HomeIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <TimerIcon />
        <Heading>Chronos</Heading>
      </Container>

      <Container>
        <HomeIcon />
      </Container>

      <Container>
        <SettingsIcon />
      </Container>
      <Container>
        <SunIcon />
      </Container>
    </>
  );
}
