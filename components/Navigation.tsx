import { Icon24AddSquareOutline } from "@vkontakte/icons";
import {
  CellButton,
  Group,
  Header,
  ModalCard,
  ModalRoot,
  View,
} from "@vkontakte/vkui";
import React, { useState } from "react";

export const Navigation = () => {
  const [modal, setModal] = useState(null);
  return (
    <View
      modal={
        <ModalRoot activeModal={modal} onClose={() => setModal(null)}>
          <ModalCard id="1" onClose={() => setModal(null)}>
            test
          </ModalCard>
        </ModalRoot>
      }
    >
      <Group header={<Header>View without panels</Header>}>
        <CellButton after={<Icon24AddSquareOutline />}>item 1</CellButton>
        <CellButton>item 2</CellButton>
        <CellButton>item 3</CellButton>
        <CellButton>item 4</CellButton>
        <CellButton>item 5</CellButton>
        <CellButton>item 6</CellButton>
        <CellButton onClick={() => setModal("1")}>Open modal</CellButton>
      </Group>
    </View>
  );
};
