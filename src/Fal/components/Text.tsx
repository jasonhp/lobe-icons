'use client';

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
      viewBox="0 0 31 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2.679 11.307c.966 0 1.175.053 1.175.55v7.503c0 2.326.052 2.43.261 2.43h3.63c.21 0 .288-.104.288-2.43v-7.504c0-.496.183-.549 1.358-.549h1.201c.183 0 .21-.13.21-1.202v-.183c0-1.072 0-1.177-.236-1.177H9.391c-1.175 0-1.358-.078-1.358-.549v-1.62c0-1.465.522-1.883 1.358-1.883.463 0 .784.128.95.195.06.024.1.04.12.04.079 0 .079-.235.079-1.229v-.34c0-.967 0-1.045-.052-1.098-.13-.078-.94-.261-2.116-.261-2.977 0-4.518 1.516-4.518 4.575v1.621c0 .47-.13.55-1.097.55H2.21C2.026 8.745 2 8.85 2 9.921v.183c0 1.071.026 1.202.209 1.202h.47zM28.625 4.693V19.36c0 2.326-.026 2.431-.314 2.431H24.76c-.288 0-.34-.105-.34-2.431V4.693c0-2.327.052-2.431.34-2.431h3.551c.288 0 .314.104.314 2.431z" />
      <path
        clipRule="evenodd"
        d="M18.666 13.268v-.549c0-1.307-.6-1.83-1.645-1.83-1.019 0-1.567.549-1.724 1.516a3.26 3.26 0 00-.029.207c-.022.186-.037.316-.154.316H11.59c-.21 0-.21-.052-.21-.235 0-1.386 1.307-4.262 5.85-4.262 3.213 0 5.512 1.281 5.512 4.837v5.229c0 .834.313 1.906.506 2.564.085.29.146.5.146.573 0 .104-.078.157-.157.157H19.32c-.183 0-.209-.105-.34-.758l-.104-.497c-.078-.392-.13-.523-.287-.523-.107 0-.194.123-.33.317-.13.186-.304.435-.584.703-.627.575-1.384.967-2.69.967-2.116 0-4.022-1.203-4.022-3.817 0-2.928 2.272-4.183 5.641-4.314.368-.016.673-.021.924-.025.944-.015 1.14-.019 1.14-.576zm0 3.79v-.522c0-.523-.13-.68-.574-.654l-.967.053c-1.227.078-1.958.705-1.958 1.882 0 1.15.627 1.726 1.54 1.726 1.02 0 1.96-.942 1.96-2.484z"
      />
    </svg>
  );
});

export default Icon;
