import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="nonzero"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 72 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M59.548 2v.582c-.886 0-1.44.092-1.662.277-.203.166-.175.461.083.886l10.554 15.9c.37.536.665.896.887 1.08.24.167.554.268.942.305v.582a41.192 41.192 0 00-1.22-.055A22.994 22.994 0 0067.5 21.5c-.758 0-1.533.019-2.327.056-.776.018-1.358.037-1.746.055v-.581c.887 0 1.46-.056 1.718-.167.258-.11.258-.37 0-.775L54.45 3.967c-.35-.536-.637-.896-.858-1.08-.222-.185-.545-.287-.97-.305V2c.296.018.711.046 1.247.083.554.019 1.108.028 1.662.028.794 0 1.533-.01 2.216-.028.702-.037 1.302-.065 1.8-.083zm1.108 9.585l.056.193c.037.111.074.231.11.36l.084.167-3.214 4.653c-.683.998-1.052 1.792-1.108 2.383-.037.572.157.997.582 1.274.443.259 1.053.406 1.828.443v.554a13.026 13.026 0 00-.914-.027c-.35-.019-.71-.028-1.08-.028a21.6 21.6 0 00-1.08-.028h-.86c-.48 0-.932.01-1.357.028-.424 0-.784.018-1.08.055v-.554c.61-.13 1.191-.425 1.745-.886.554-.48 1.117-1.127 1.69-1.94l4.598-6.647zM69.548 2v.554c-.572.11-1.126.397-1.662.859-.535.461-1.062 1.062-1.579 1.8l-4.46 6.427-.11-.36-.083-.36 3.074-4.405c.665-.96 1.053-1.726 1.164-2.299.13-.572.009-.988-.36-1.246-.351-.259-.914-.398-1.69-.416V2c.35.018.72.037 1.108.055.388 0 .766.01 1.136.028h1.052c.499 0 .951-.01 1.358-.028.424-.018.775-.037 1.052-.055zM51.637 2v.554c-.61.037-1.071.148-1.385.332-.314.185-.526.49-.637.915-.11.406-.166.988-.166 1.745v8.005c0 1.256-.083 2.373-.25 3.352-.166.979-.461 1.82-.886 2.52-.462.776-1.145 1.404-2.05 1.885-.886.461-1.948.692-3.185.692-.887 0-1.746-.102-2.577-.305a4.937 4.937 0 01-2.188-1.163 5.977 5.977 0 01-1.302-1.634c-.314-.591-.526-1.302-.637-2.133-.11-.85-.166-1.893-.166-3.13V4.935c0-.683-.056-1.182-.166-1.496a.925.925 0 00-.61-.664c-.314-.13-.785-.204-1.413-.222V2c.425.018.97.037 1.635.055a81.225 81.225 0 004.266 0c.701-.018 1.274-.037 1.717-.055v.554c-.628.018-1.108.092-1.44.222a.998.998 0 00-.638.664c-.11.314-.166.813-.166 1.496v9.585c0 .942.047 1.81.139 2.604.11.794.305 1.486.582 2.077.295.573.72 1.025 1.274 1.358.572.314 1.31.47 2.216.47 1.366 0 2.419-.304 3.158-.914.757-.628 1.283-1.477 1.579-2.548.314-1.09.47-2.327.47-3.712v-8.2c0-.794-.073-1.403-.221-1.828-.148-.424-.406-.73-.776-.914-.369-.203-.895-.323-1.579-.36V2c.351.018.804.037 1.358.055.554.019 1.062.028 1.523.028.48 0 .942-.01 1.385-.028.462-.018.84-.037 1.136-.055zM25.605 2v.554c-.628.018-1.108.092-1.44.222a.998.998 0 00-.637.664c-.111.314-.166.813-.166 1.496v13.85c0 .629.046 1.1.138 1.413.11.314.314.527.61.638.313.092.756.138 1.329.138h1.8c.795 0 1.46-.11 1.995-.332a3.429 3.429 0 001.385-.998c.37-.443.656-1.015.859-1.717.203-.702.36-1.524.47-2.465h.638a26.009 26.009 0 00-.083 2.327c0 .369.009.914.027 1.634.037.702.093 1.431.167 2.188a82.136 82.136 0 00-3.186-.055 204.035 204.035 0 00-3.158-.028H24.72c-.665 0-1.385.01-2.16.028-.758 0-1.534.009-2.328.027-.775 0-1.523.01-2.244.028v-.554c.628-.037 1.1-.11 1.413-.221a.924.924 0 00.61-.665c.11-.333.166-.831.166-1.496V4.936c0-.683-.055-1.182-.166-1.496a.926.926 0 00-.638-.664c-.313-.13-.775-.204-1.384-.222V2c.424.018.969.037 1.634.055a81.23 81.23 0 004.266 0c.701-.018 1.274-.037 1.717-.055zM16.155 2a46.23 46.23 0 00-.166 2.16 66.313 66.313 0 00-.028 1.607c0 .425.01.831.028 1.22.018.387.037.72.055.996h-.637c-.166-1.348-.397-2.4-.692-3.158-.277-.775-.702-1.33-1.275-1.662-.572-.35-1.394-.526-2.465-.526H9.507c-.591 0-1.043.056-1.357.166-.296.093-.499.296-.61.61-.11.295-.166.766-.166 1.412v13.796c0 .683.074 1.2.222 1.55.147.333.424.555.83.666.407.11 1.007.175 1.801.194v.581a27.323 27.323 0 00-1.939-.055c-.794-.019-1.616-.028-2.465-.028-.739 0-1.45.01-2.133.028-.665 0-1.228.018-1.69.055v-.554c.628-.037 1.099-.11 1.413-.221a.924.924 0 00.61-.665c.11-.333.165-.831.165-1.496V4.936c0-.683-.055-1.182-.166-1.496a.926.926 0 00-.637-.664c-.314-.13-.776-.204-1.385-.222V2c.72.018 1.468.037 2.244.055.794 0 1.57.01 2.327.028h6.675c1.09-.018 2.06-.046 2.91-.083zm-4.238 9.695v.554H6.543v-.554h5.374zm.582-3.656a37.183 37.183 0 00-.111 2.41c.018.554.027 1.062.027 1.523 0 .462.01.97.028 1.524.019.554.065 1.357.139 2.41h-.637a12.707 12.707 0 00-.333-1.745c-.148-.573-.415-1.034-.803-1.385-.388-.351-.97-.527-1.745-.527v-.554c.59 0 1.052-.12 1.385-.36.35-.24.618-.554.803-.942.185-.388.314-.785.388-1.19a20.8 20.8 0 00.221-1.164h.638z"></path>
    </svg>
  );
});

export default Icon;
