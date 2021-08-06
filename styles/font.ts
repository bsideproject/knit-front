import { CSSProperties } from 'react';
import { css } from '@emotion/react';

// TODO: font 적용 확인
export const fontFamily = 'Noto Sans KR, sans-serif';

export const GlobalFonts = `
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/NotoSans/NotoSansKR-Regular.woff');
}
`;

export const set = (
  fontSize: CSSProperties['fontSize'],
  fontWeight: CSSProperties['fontWeight'] = 'normal'
) => {
  return css`
    font-size: ${fontSize}px;
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-style: normal;
    text-decoration: none;
    text-align: justify;
    letter-spacing: -0.025rem;
    -webkit-font-smoothing: antialiased;
  `;
};

export const ellipse = (line = 1) => {
  if (line === 1) {
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    `;
  }

  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line};
  `;
};
