import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 74 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M36.887 5.791H41V2.125h-4.113v3.666zM41 21.774V7.389h-4.113v14.385H41zM21.423 7.379v3.023h7.695s1.832.458 1.832 1.634V13.1h-6.963s-2.739.256-3.618 3.567c-.152 1.55.05 2.31.153 2.595.1.28.901 2.107 3.29 2.565h11.087V11.523s-.528-3.535-4.7-4.121l-8.776-.023zm3.923 11.6c-.753-.307-1.004-.815-1.057-.942-.052-.125-.226-.58-.023-1.041.453-.889 1.205-1.093 1.205-1.093h5.479v3.076h-5.604zm-8.866-6.964c2.629-1.392 2.295-4.897 2.295-4.897-.285-5.366-6.764-5.116-6.764-5.116H2V22h11.304c6.638-.026 6.16-5.272 6.16-5.272.122-3.503-2.984-4.713-2.984-4.713zM6.305 18.292v-4.314h6.739l.228.046s1.282.237 1.746 1.404c0 0 .27 1.096-.311 1.91 0 0-.427.755-1.63.945l-6.772.009zm6.545-8.252H6.305V5.9h6.517s1.416-.067 1.885 1.072c0 0 .281 1.21-.195 2.038 0 0-.455.847-1.662 1.029zM53.274 2v5.394h-4.308s-4.306.365-5.814 5.343c-.525 3.324.464 5.282.637 5.701.174.418 1.566 2.849 5.06 3.562h8.085V2.058L53.274 2zm-.065 16.727h-3.257s-2.269-.12-2.96-2.784c-.356-1.182.053-2.546.233-3.082.164-.538.926-1.779 2.497-2.256h3.486l.001 8.122zm5.707-10.849v10.5s.168 2.614 3.78 3.566H72V7.878h-4.015v10.56h-3.833s-1.225-.18-1.454-1.186V7.816l-3.782.062z"></path>
    </svg>
  );
});

export default Icon;
