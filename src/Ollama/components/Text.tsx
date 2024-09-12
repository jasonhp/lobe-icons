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
      viewBox="0 0 87 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M11.333 2c-2.959 0-5.272.943-6.94 2.884C2.78 6.717 2 9.09 2 12.027c0 2.911.78 5.283 2.394 7.116C6.06 21.03 8.374 22 11.333 22c2.931 0 5.244-.943 6.939-2.83 1.614-1.806 2.42-4.178 2.42-7.143s-.806-5.364-2.42-7.17C16.577 2.943 14.264 2 11.332 2zm0 2.776c1.99 0 3.523.62 4.599 1.914 1.049 1.294 1.587 3.073 1.587 5.337s-.538 4.016-1.587 5.283c-1.076 1.267-2.609 1.914-4.6 1.914-1.99 0-3.55-.674-4.625-1.995-1.05-1.294-1.56-3.019-1.56-5.202 0-2.21.51-3.935 1.56-5.23 1.102-1.347 2.636-2.02 4.626-2.02zM22.979 2v19.623h3.066V2h-3.066zm6.159 0v19.623h3.066V2h-3.066zm12.21 5.31c-1.775 0-3.173.296-4.195.943-1.21.701-1.964 1.833-2.26 3.37l3.04.242c.161-.728.564-1.267 1.156-1.617.511-.323 1.184-.458 2.044-.458 1.99 0 2.986.89 2.986 2.722v.54l-3.04.08c-2.044.054-3.63.485-4.76 1.294-1.237.835-1.829 2.048-1.829 3.612 0 1.159.43 2.102 1.29 2.857.835.728 1.964 1.105 3.417 1.105 1.21 0 2.259-.216 3.146-.62.78-.377 1.453-.89 1.99-1.59v1.833h2.852v-8.895c0-1.698-.43-2.992-1.291-3.882-.969-1.024-2.502-1.536-4.546-1.536zm2.77 7.951v.701c0 1.078-.43 1.968-1.237 2.669-.806.674-1.802 1.024-2.985 1.024-.672 0-1.21-.189-1.64-.512-.431-.324-.62-.728-.62-1.213 0-1.614 1.129-2.473 3.41-2.58l3.073-.089zM56.572 7.31c-1.344 0-2.609.593-3.765 1.806V7.687H49.74v13.936h3.066v-8.356c0-.917.269-1.725.807-2.372.538-.7 1.237-1.024 2.125-1.024 1.828 0 2.743 1.05 2.743 3.18v8.572h3.066v-8.518c0-1.024.242-1.806.78-2.372.511-.593 1.13-.862 1.883-.862 1.075 0 1.829.242 2.313.754.457.486.699 1.294.699 2.4v8.598h3.066v-9.138c0-1.536-.484-2.776-1.398-3.746-.969-.97-2.152-1.429-3.578-1.429-.941 0-1.72.162-2.34.485-.699.324-1.371.917-2.017 1.78-.887-1.51-2.34-2.265-4.384-2.265zm22.593 0c-1.775 0-3.174.296-4.196.943-1.21.701-1.963 1.833-2.26 3.37l3.04.242c.161-.728.565-1.267 1.156-1.617.511-.323 1.184-.458 2.044-.458 1.99 0 2.986.89 2.986 2.722v.54l-3.04.08c-2.043.054-3.63.485-4.76 1.294-1.237.835-1.829 2.048-1.829 3.612 0 1.159.43 2.102 1.291 2.857.834.728 1.964 1.105 3.416 1.105 1.21 0 2.26-.216 3.147-.62.78-.377 1.452-.89 1.99-1.59v1.833H85v-8.895c0-1.698-.43-2.992-1.291-3.882-.968-1.024-2.501-1.536-4.545-1.536zm2.77 7.951v.701c0 1.078-.43 1.968-1.237 2.669-.807.674-1.802 1.024-2.986 1.024-.672 0-1.21-.189-1.64-.512-.43-.324-.619-.728-.619-1.213 0-1.614 1.128-2.473 3.41-2.58l3.072-.089z"></path>
    </svg>
  );
});

export default Icon;
