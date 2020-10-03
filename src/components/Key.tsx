import styled, { css } from 'styled-components/macro';

type Size = 'auto' | 'large' | 'small';

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
      case 'auto':
        return css`
          height: 1.5rem;
          width: auto;
          padding: 0 0.5rem;
          border-width: 0.5px;
        `;

      case 'large':
        return css`
          height: 5rem;
          width: 5rem;
          margin-bottom: 1rem;
          border-width: 2px;
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
