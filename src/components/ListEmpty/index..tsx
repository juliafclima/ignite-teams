import { Container, Message } from "./styles";

import { Alert } from "react-native";

type ListEmptyProps = {
  message: string;
};

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
