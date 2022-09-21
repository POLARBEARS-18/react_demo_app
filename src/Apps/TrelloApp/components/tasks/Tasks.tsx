import React, { Dispatch, FC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Task } from './Task';
import { TaskList } from './TaskCard';

export interface TasksProps {
  setTaskList: Dispatch<React.SetStateAction<TaskList[]>>;
  taskList: Array<TaskList>;
}

const reorder = (taskList: Array<TaskList>, startIndex: number, endIndex: number) => {
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
};

export const Tasks: FC<TasksProps> = (props) => {
  const { taskList, setTaskList } = props;

  const onDragEnd = (result: DropResult) => {
    reorder(taskList, result.source.index, result.destination!.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
