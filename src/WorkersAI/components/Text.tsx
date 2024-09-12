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
      viewBox="0 0 134 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M34.127 6.765c4.391 0 7.277 2.853 7.277 7.59v.027c0 4.778-2.831 7.618-7.263 7.618-4.46 0-7.263-2.853-7.263-7.618v-.027c0-4.71 2.872-7.59 7.25-7.59zM6.281 2L9.4 16.116h.082L13.12 2h3.625l3.638 14.116h.083L23.598 2h4.281L22.64 21.7h-4.035L14.981 8.498h-.082L11.26 21.7H7.225L2 2h4.281zm27.846 7.89c-1.928 0-3.187 1.639-3.187 4.465v.027c0 2.867 1.245 4.492 3.215 4.492 1.942 0 3.187-1.639 3.187-4.492v-.027c0-2.826-1.272-4.464-3.215-4.464zm8.628 11.81h3.994v-8.191c0-2.13 1.15-3.304 3.12-3.304.574 0 1.12.082 1.449.218V6.915c-.3-.082-.711-.15-1.149-.15-1.71 0-2.9 1.05-3.337 2.853h-.083V7.065h-3.994V21.7zm29.69-14.935c4.295 0 6.99 2.907 6.99 7.33v1.23H69.34c.041 2.334 1.313 3.699 3.351 3.699 1.642 0 2.64-.901 2.928-1.72l.027-.082h3.666l-.041.15C78.819 19.529 76.795 22 72.609 22c-4.486 0-7.208-2.908-7.208-7.59v-.014c0-4.655 2.75-7.631 7.044-7.631zM56.376 2v10.922h.082l4.952-5.857h4.527l-5.54 6.293 5.814 8.342H61.6l-4.199-5.98-1.026 1.133V21.7h-3.994V2h3.994zm16.138 7.74c-1.642 0-2.873 1.093-3.133 3.072h6.224c-.246-2.02-1.436-3.071-3.091-3.071zm8.272 11.96h3.994v-8.191c0-2.13 1.15-3.304 3.119-3.304.574 0 1.121.082 1.45.218V6.915c-.301-.082-.712-.15-1.15-.15-1.709 0-2.899 1.05-3.337 2.853h-.082V7.065h-3.994V21.7zm15.522.3c3.775 0 6.415-1.884 6.415-4.75v-.015c0-2.157-1.258-3.358-4.322-4l-2.49-.532c-1.477-.314-1.983-.805-1.983-1.556v-.014c0-.942.862-1.556 2.243-1.556 1.478 0 2.34.792 2.476 1.843l.014.109h3.68v-.137c-.096-2.566-2.271-4.627-6.17-4.627-3.734 0-6.141 1.802-6.141 4.587v.013c0 2.184 1.436 3.604 4.281 4.205l2.49.519c1.436.314 1.928.764 1.928 1.542v.014c0 .942-.916 1.53-2.42 1.53-1.601 0-2.463-.67-2.723-1.817l-.027-.123H89.66l.013.123C89.99 20.13 92.246 22 96.308 22zm11.607-.3h4.336l1.491-4.778h6.976l1.491 4.778h4.336L119.665 2h-4.856l-6.894 19.7zm9.274-15.877h.082l2.49 8.013H114.7l2.49-8.013zM127.87 21.7H132V2h-4.13v19.7z"></path>
    </svg>
  );
});

export default Icon;
