import { Button } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';
import { TaskList } from './TaskCard';
import { TasksProps } from './Tasks';

export interface TaskProps extends TasksProps {
  index: number;
  task: TaskList;
}

export const Task: FC<TaskProps> = (props) => {
  const { index, task, taskList, setTaskList } = props;
  const handleDelete = (id: string) => {
    setTaskList(taskList.filter((isTask) => isTask.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          css={STaskBox}
        >
          <p css={STaskText}>{task.text}</p>
          <Button colorScheme="blackAlpha" size="xs" css={STaskTrashButton} onClick={() => handleDelete(task.id)}>
            <FontAwesomeIcon icon={faTrash} />{' '}
          </Button>
        </div>
      )}
    </Draggable>
  );
};

const STaskBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-top: 0.625em;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgb(75, 75, 75);
`;
const STaskText = css`
  margin-left: 1em;
`;
const STaskTrashButton = css`
  margin-right: 0.5625em;
  border: none;
`;
