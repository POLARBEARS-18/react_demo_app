import { css } from '@emotion/react';
import React, { FC, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';

export const DragDropHome: FC = () => {
  const [items, setItem] = useState([
    { id: 0, text: 'item0' },
    { id: 1, text: 'item1' },
    { id: 2, text: 'item2' },
  ]);
  const onDragEnd = (result: DropResult) => {
    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, remove[0]);
  };

  return (
    <>
      <Link to="/">戻る</Link>

      <div css={[SDragDropArea]}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(droppaProvided) => (
              <div {...droppaProvided.droppableProps} ref={droppaProvided.innerRef}>
                {items.map((item, index) => (
                  <Draggable draggableId={item.text} index={index} key={item.id}>
                    {(draggaProvided) => (
                      <div
                        ref={draggaProvided.innerRef}
                        {...draggaProvided.draggableProps}
                        {...draggaProvided.dragHandleProps}
                        css={[SItem]}
                      >
                        {item.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppaProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};
const SDragDropArea = css`
  text-align: center;
  margin: 4em;
  width: 25em;
  border: 1px solid black;
`;
const SItem = css`
  margin-bottom: 1em;
  font-size: 3rem;
  border: 1px solid black;
`;
