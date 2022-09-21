import { css } from '@emotion/react';
import React, { FC } from 'react';
import { TaskCardProps } from '../tasks/TaskCard';

type TaskCardDeleteButtonProps = Omit<TaskCardProps, 'index'>;

export const TaskCardDeleteButton: FC<TaskCardDeleteButtonProps> = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;

  const taskCardDelete = (id: string) => {
    setTaskCardsList(taskCardsList.filter((target) => target.id !== id));
  };

  return (
    <div>
      <button type="button" onClick={() => taskCardDelete(taskCard.id)} css={STaskCardDeleteButton}>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
};

const STaskCardDeleteButton = css`
  font-size: 1em;
  color: rgb(158, 46, 46);
`;
