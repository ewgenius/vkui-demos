import { Icon24AddSquareOutline } from "@vkontakte/icons";
import { CellButton, Group, Header } from "@vkontakte/vkui";
import React from "react";

export const Navigation = () => {
  return (
    <Group header={<Header>View without panels</Header>}>
      <CellButton after={<Icon24AddSquareOutline />}>item 1</CellButton>
      <CellButton>item 2</CellButton>
      <CellButton>item 3</CellButton>
      <CellButton>item 4</CellButton>
      <CellButton>item 5</CellButton>
      <CellButton>item 6</CellButton>
    </Group>
  );
};
