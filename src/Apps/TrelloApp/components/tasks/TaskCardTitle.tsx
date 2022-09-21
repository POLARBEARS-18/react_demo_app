import { Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { useState } from 'react';

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} onKeyDown={handleClick} tabIndex={0} role="button" css={[SInputTitleArea]}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputCardTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={10}
            css={[SInputTitle]}
          />
        </form>
      ) : (
        <Heading fontSize="2xl">{inputCardTitle}</Heading>
      )}
    </div>
  );
};

const SInputTitleArea = css`
  margin-bottom: 1em;
  cursor: pointer;
`;

const SInputTitle = css`
  font-size: 1.1rem;
  padding: 4px 6px;
  border-radius: 3px;
  border: none;
  outline: none;
`;
