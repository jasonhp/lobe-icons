import { forwardRef } from 'react';

import type { IconType } from '@/types';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 45 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        clipRule="evenodd"
        d="M2 2v2.712h8.136L9.57 7.198H4.26v14.576h2.712v-1.356h9.717v1.356h2.938V7.198H12.51l.677-2.486h8.362V2H2zm4.972 16.045v-2.938h9.717v2.825l-9.717.113zm0-8.361v2.937l9.717-.113V9.684H6.972z"
      ></path>
      <path d="M28.893 2.113h-2.825v10.735c0 1.92-1.133 4.988-2.712 7.231L25.729 22c1.873-2.578 3.164-6.667 3.164-8.927V2.113zM32.96 3.017h2.712v16.61h-2.711V3.017zM42.452 2H39.74v19.661h2.712V2z"></path>
    </svg>
  );
});

export default Icon;
