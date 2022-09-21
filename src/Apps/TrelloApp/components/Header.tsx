import { Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import React, { FC } from 'react';

export const Header: FC = () => {
  const a = 'a';
  return (
    <div>
      <header css={[SHeader]}>
        <Text fontSize="4xl" css={[SText]}>
          Sample Trello
        </Text>
      </header>
    </div>
  );
};

const SText = css`
  color: aliceblue;
  font-weight: 600;
  text-shadow: 2px 2px 2px black;
`;

const SHeader = css`
  text-align: center;
  background-color: #7ab6f2ec;
`;
