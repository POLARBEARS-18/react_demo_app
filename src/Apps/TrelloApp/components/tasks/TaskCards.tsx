import { css } from '@emotion/react';
import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { AddTaskCardButton } from '../button/AddTaskCardButton';
import { TaskCard, TaskList } from './TaskCard';

export type taskCardListState = Pick<TaskList, 'id' | 'draggableId'>;

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState<Array<taskCardListState>>([
    {
      id: '0',
      draggableId: 'item0',
    },
  ]);

  const reorder = (CardsList: Array<taskCardListState>, startIndex: number, endIndex: number) => {
    const remove = CardsList.splice(startIndex, 1);
    CardsList.splice(endIndex, 0, remove[0]);
  };

  const onDragEnd = (result: DropResult) => {
    reorder(taskCardsList, result.source.index, result.destination!.index);
    setTaskCardsList(taskCardsList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} css={STaskCardArea}>
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const STaskCardArea = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
