import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Page Not Found 🚀</Heading>

          <p>
            Oops! It seems that the page you are trying to access does not
            exist. Maybe it went on vacation, decided to explore the universe,
            or got lost somewhere between two black holes. 🌌
          </p>

          <p>
            But don't worry, you are not lost in space (yet). You can safely go
            back to the <a href="/">main page</a> or{" "}
            <a href="/history">to the history</a> — or you can stay here and
            pretend you found a secret page that only the coolest explorers can
            access. 🧭✨
          </p>

          <p>
            If you think this page should exist (or if you want to chat about
            time travel and wormholes), just get in touch. Otherwise, use the
            menu to return to the real world.
          </p>

          <p>
            In the meantime, here's a thought: "If a page does not exist on the
            internet, did it really exist?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
