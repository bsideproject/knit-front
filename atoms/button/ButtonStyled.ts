import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { MouseEventHandler } from 'react';
import * as font from '~/styles/font';
import { Color, Size } from '~/@types';

export interface ButtonProps {
  color: Color;
  size?: Size;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const buttonSize = ({ size }: ButtonProps) => {
  let cssSize;
  switch (size) {
    case Size.XSMALL:
      cssSize = css`
        padding: 0 13px;
        height: 26px;
        ${font.set(12)};
      `;
      break;

    case Size.SMALL:
      cssSize = css`
        padding: 0 16px;
        height: 32px;
        ${font.set(14)};
      `;
      break;
    case Size.MIDDLE:
      cssSize = css`
        padding: 0 20px;
        height: 40px;
        ${font.set(16)};
      `;
      break;
    case Size.LARGE:
      cssSize = css`
        padding: 0 24px;
        height: 48px;
        ${font.set(20)};
      `;
      break;

    default:
      break;
  }
  return cssSize;
};

const colorStyles = ({ theme, color, disabled }: ButtonProps & { theme: Theme }) => {
  const background = theme.palette[color];
  switch (color) {
    case Color.PRIMARY:
      if (disabled) {
        return css`
          background: #a09db1;
          color: ${theme.palette.white};
        `;
      }
      return css`
        background: ${background};
        color: ${theme.palette.white};
        &:hover {
          background: #8550d8;
        }
        &:active {
          background: #4708aa;
        }
      `;
    case Color.SECONDARY:
      if (disabled) {
        return css`
          background: #dddddd;
          border: 1px solid #a09db1;
          color: #a09db1;
        `;
      }
      return css`
        border: 1px solid #5c16cb;
        background: ${background};
        color: ${theme.palette.primary};
      `;
    case Color.TERTIARY:
      if (disabled) {
        return css`
          background: #dddddd;
          color: #a09db1;
        `;
      }
      return css`
        background: ${background};
        color: ${theme.palette.primary};
      `;
    case Color.QUATENARY:
      if (disabled) {
        return css`
          background: ${background};
          color: #a09db1;
        `;
      }
      return css`
        background: ${background};
        color: ${theme.palette.primary};
      `;

    case Color.DANGER:
      if (disabled) {
        return css`
          background: ${background};
          color: #a09db1;
        `;
      }
      return css`
        background: ${background};
        color: ${theme.palette.white};
        background: #ff0000;
        border-radius: 8px;
        &:hover {
          background: #ff2f2f;
          border-radius: 8px;
        }
        &:active {
          background: #c90202;
          border-radius: 8px;
        }
      `;
    case Color.BLUE:
      return css`
        background: ${theme.palette.blue};
        color: ${theme.palette.white};
      `;
      break;

    default:
      return null;
  }
};
export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 4px;

  /* Size */
  ${buttonSize}

  /* Color */
  ${colorStyles}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
