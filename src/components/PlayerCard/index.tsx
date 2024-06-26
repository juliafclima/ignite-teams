import { ButtonIcon } from "@components/ButtonIcons";

import { Container, Icon, Name } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person-outline" />

      <Name>{name}</Name>

      <ButtonIcon icon="delete-outline" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
