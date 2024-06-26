import { Container, Subtitle, Title } from "./styles";

type HighlightProps = {
  readonly title: string;
  readonly subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
