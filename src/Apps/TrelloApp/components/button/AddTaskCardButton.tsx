import { Button } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { Dispatch, FC } from 'react';
import uuid from 'react-uuid';
import { taskCardListState } from '../tasks/TaskCards';

type AddTaskCardButtonProps = {
  taskCardsList: Array<taskCardListState>;
  setTaskCardsList: Dispatch<React.SetStateAction<taskCardListState[]>>;
};

export const AddTaskCardButton: FC<AddTaskCardButtonProps> = (props) => {
  const { taskCardsList, setTaskCardsList } = props;
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <div css={SAddTaskCardButtonArea}>
      <Button onClick={addTaskCard} css={SAddTaskCardButton}>
        +
      </Button>
    </div>
  );
};

const SAddTaskCardButtonArea = css`
  margin-left: 1%;
  margin-top: 1em;
`;

const SAddTaskCardButton = css`
  padding: 0.625em 1.125em;
  box-shadow: 3px 3px 8px 1px black;

  &:hover {
    box-shadow: none;
    transform: translate(1px, 1px);
  }
`;
