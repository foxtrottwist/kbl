import styled, { css } from 'styled-components/macro';

type Size = 'large' | 'medium' | 'small';

type KeyProps = {
  size: Size;
};

export const Key = styled.span<{ size: Size }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #282c34;
  border-radius: 4.5%;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          height: 5rem;
          width: 5rem;
          margin-bottom: 1rem;
          border-width: 2px;
        `;

      case 'medium':
        return css`
          height: 1.5rem;
          width: 4rem;
          border-width: 0.5px;
        `;

      case 'small':
        return css`
          height: 1.5rem;
          width: 1.5rem;
          border-width: 0.5px;
        `;
    }
  }}
`;
