import { Button } from "@components/Button";
import { Container } from "./styles";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard/index.";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty/index.";
import { useState } from "react";

export function Groups() {
  const [groups] = useState<string[]>([
    "Galera da Rocket",
    "Galera do Ignite"
  ]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
