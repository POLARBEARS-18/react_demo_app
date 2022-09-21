import { css } from '@emotion/react';
import React, { Dispatch, FC, SetStateAction } from 'react';
import uuid from 'react-uuid';
import { TaskList } from '../tasks/TaskCard';

interface TaskAddInputProps {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: Array<TaskList>;
  setTaskList: Dispatch<SetStateAction<Array<TaskList>>>;
}

export const TaskAddInput: FC<TaskAddInputProps> = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const taskId = uuid();
    e.preventDefault();
    // 空文字の場合は追加しない
    if (inputText === '') {
      alert('タスクを追加してください');
      return;
    }

    // カード追加
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskList.length}`,
        text: inputText,
      },
    ]);
    setInputText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a task" value={inputText} onChange={handleChange} css={STaskAddInput} />
      </form>
    </div>
  );
};

const STaskAddInput = css`
  width: 100%;
  font-size: 1.3rem;
  padding: 0.5em 0.5em;
  border-radius: 3px;
  border: none;
  outline: none;
`;
