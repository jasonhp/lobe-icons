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
      viewBox="0 0 75 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M2 21.73V2.81h2.878V19h9.98v2.73zM17.722 21.73V2h2.69v19.73zM27.352 22c-1.416 0-2.517-.367-3.302-1.101-.784-.735-1.176-1.7-1.176-2.899 0-1.19.441-2.185 1.324-2.986.884-.802 2.294-1.203 4.23-1.203h3.659v-.04c0-2.271-1.04-3.406-3.12-3.406-.87 0-1.603.158-2.2.473a3.828 3.828 0 00-1.446 1.324l-1.842-1.5a5.763 5.763 0 012.266-2.054c.937-.477 2.002-.716 3.194-.716h.296c1.65 0 2.977.477 3.981 1.432 1.005.955 1.507 2.383 1.507 4.284v8.122H32.14v-2.203a5.325 5.325 0 01-2.004 1.831c-.816.428-1.744.642-2.784.642zm.592-2.405c1.04 0 1.905-.237 2.596-.71.69-.473 1.206-1.115 1.547-1.926v-1.027h-3.551c-1.058 0-1.814.17-2.266.507-.453.338-.68.795-.68 1.372 0 1.189.785 1.784 2.354 1.784zM37.776 21.73V8.216h2.69v2.216c.484-.792 1.085-1.414 1.802-1.864.717-.45 1.547-.676 2.488-.676h.296c1.04 0 1.914.257 2.623.77.708.514 1.232 1.252 1.573 2.216.52-.928 1.184-1.657 1.99-2.189.808-.531 1.722-.797 2.744-.797h.296c1.507 0 2.657.527 3.45 1.581.794 1.054 1.19 2.536 1.19 4.446v7.81h-2.69v-7.486c0-2.558-.878-3.838-2.636-3.838h-.269c-.887 0-1.638.282-2.252.845-.615.563-1.074 1.273-1.379 2.128v8.352h-2.69v-7.487c0-2.558-.879-3.838-2.636-3.838h-.269c-.888 0-1.639.282-2.253.845-.614.563-1.074 1.273-1.378 2.128v8.352h-2.69zM65.63 22c-1.417 0-2.518-.367-3.302-1.101-.785-.735-1.177-1.7-1.177-2.899 0-1.19.442-2.185 1.325-2.986.883-.802 2.293-1.203 4.23-1.203h3.658v-.04c0-2.271-1.04-3.406-3.12-3.406-.87 0-1.603.158-2.2.473a3.828 3.828 0 00-1.445 1.324l-1.843-1.5a5.763 5.763 0 012.266-2.054c.937-.477 2.002-.716 3.195-.716h.296c1.65 0 2.976.477 3.98 1.432C72.499 10.28 73 11.707 73 13.608v8.122h-2.582v-2.203a5.325 5.325 0 01-2.004 1.831c-.816.428-1.744.642-2.784.642zm.591-2.405c1.04 0 1.906-.237 2.596-.71.69-.473 1.206-1.115 1.547-1.926v-1.027h-3.55c-1.059 0-1.814.17-2.267.507-.453.338-.68.795-.68 1.372 0 1.189.785 1.784 2.354 1.784z"></path>
    </svg>
  );
});

export default Icon;
