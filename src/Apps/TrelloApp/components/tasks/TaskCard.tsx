import { css } from '@emotion/react';
import React, { Dispatch, FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskCardDeleteButton } from '../button/TaskCardDeleteButton';
import { TaskAddInput } from '../input/TaskAddInput';
import { taskCardListState } from './TaskCards';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';

export type TaskCardProps = {
  index: number;
  taskCardsList: Array<taskCardListState>;
  setTaskCardsList: Dispatch<React.SetStateAction<taskCardListState[]>>;
  taskCard: taskCardListState;
};

export interface TaskList {
  id: string;
  draggableId: string;
  text: string;
}

export const TaskCard: FC<TaskCardProps> = (props) => {
  const { index, taskCardsList, setTaskCardsList, taskCard } = props;
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState<Array<TaskList>>([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} css={[STaskCard]}>
          <div {...provided.dragHandleProps} css={STaskCardTop}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};

const STaskCard = css`
  width: 15em;
  padding: 1em 1.2em;
  margin: 1em 1%;
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
`;

const STaskCardTop = css`
  display: flex;
  justify-content: space-between;
`;
