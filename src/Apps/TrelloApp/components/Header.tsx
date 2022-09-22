import { Button, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const a = 'a';
  return (
    <div>
      <header css={[SHeader]}>
        <div css={SDivButton}>
          <Button size="md" css={SButton}>
            <Link to="/">ホームへ戻る</Link>
          </Button>
        </div>
        <div css={SDivText}>
          <Text fontSize="4xl" css={[SText]}>
            Sample Trello
          </Text>
        </div>
      </header>
    </div>
  );
};

const SDivButton = css`
  width: 200px;
`;

const SButton = css`
  top: 10%;
`;

const SDivText = css`
  width: 70%;
  margin-right: -50%;
`;

const SText = css`
  color: aliceblue;
  font-weight: 600;
  text-shadow: 2px 2px 2px black;
`;

const SHeader = css`
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #7ab6f2ec;
`;
