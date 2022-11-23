import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesMess = ({
  size = 24,
  color = "currentColor",
  ...props
}: HuoIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M41.132 40.423c-1.9 3.09-3.78 6.2-5.6 9.36-.67 1.15-1.21 2.36-1.88 3.5l-3.54 6c-1.12 2-2.2 4.06-3.27 6.15-.94 1.86-1.77 3.79-2.68 5.68a28.013 28.013 0 0 1-1.89 3.6 23.082 23.082 0 0 1-2.51 3.23c-.59.61-.93.23-1-.68a8.997 8.997 0 0 1 .46-3.75c.25-.6.43-1.24.71-1.83l.8-1.79 1.57-3.65a61.905 61.905 0 0 1 3.58-7.39c.84-1.46 1.66-3 2.4-4.44.74-1.44 1.49-3 2.28-4.49 1.74-3.24 3.53-6.45 5.35-9.66l3.4-5.9c1.75-3 3.59-5.88 5.28-8.84.66-1.15 1.26-2.32 1.85-3.5.59-1.18 1.17-2.35 1.86-3.47.3-.49.55-1 .87-1.49.39-.675.907-1.269 1.52-1.75a1.997 1.997 0 0 1 1.44-.28c.236.014.47.044.7.09.35.1.53.42.58.92a4.2 4.2 0 0 1-.31 1.91 51.832 51.832 0 0 1-2.86 6.6c-1.15 2.18-2.36 4.3-3.55 6.44-1.79 3.16-3.59 6.34-5.46 9.48l-.1-.05ZM52.042 49.123l-5.31 8.79c-.64 1.07-1.17 2.2-1.82 3.27-2.27 3.86-4.66 7.6-7 11.36-1 1.66-1.94 3.42-2.91 5.1a45.91 45.91 0 0 1-3.91 6.39c-.49.62-1.11.17-1.48-.79a5.001 5.001 0 0 1 .07-3.76c.53-1.16 1.08-2.31 1.64-3.46.29-.57.57-1.15.87-1.71l1-1.65c1.3-2.186 2.674-4.343 4.12-6.47a39.784 39.784 0 0 0 2.34-4l1-2.09c.36-.7.73-1.4 1.12-2.09 1.7-3 3.41-6 5.16-9l3.21-5.54c1.6-2.81 3.19-5.63 4.73-8.45.59-1.1 1.12-2.22 1.66-3.35a37.43 37.43 0 0 1 1.72-3.33c.28-.47.52-.95.82-1.41 1.13-1.7 1.76-2.06 2.88-1.83.258.032.512.085.76.16.78.28.9 1.35.37 2.76a54.957 54.957 0 0 1-2.67 6.14c-1 2-2.14 4-3.24 6-1.62 3-3.36 6-5 9l-.13-.04ZM67.422 51.853l-4.7 8.35c-.58 1-1 2.1-1.64 3.1-2.1 3.58-4.5 6.88-6.63 10.37-1 1.54-1.79 3.15-2.59 4.74a44.015 44.015 0 0 1-3.45 6c-.43.59-1 .24-1.32-.61a5.16 5.16 0 0 1-.17-3.5c.4-1.13.79-2.26 1.25-3.36.46-1.1 1-2.15 1.57-3.2a66.399 66.399 0 0 1 3.59-6.16c1.56-2.41 2.78-5.08 4.15-7.61 1.52-2.78 3.024-5.582 4.51-8.41l2.74-5.24 4.17-8c1.06-2.06 1.89-4.21 2.91-6.28.23-.46.45-.9.71-1.34 1-1.59 1.66-1.92 2.83-1.66a6.4 6.4 0 0 1 .78.18c.82.3 1 1.34.66 2.68a38.909 38.909 0 0 1-2.12 5.85c-.83 1.92-1.68 3.84-2.69 5.7l-4.44 8.4h-.12ZM70.302 66.684l-3.42 4.94c-.42.6-.73 1.26-1.15 1.85-1.47 2.12-3 4.23-4.3 6.42a33.566 33.566 0 0 0-1.61 3 20.69 20.69 0 0 1-2 3.86c-.28.36-.84 0-1.26-.6a2.672 2.672 0 0 1-.43-2.3 43.45 43.45 0 0 1 4.28-8c1-1.49 1.8-3.23 2.72-4.83 1-1.76 2.12-3.46 3.23-5.16l2-3.14c1-1.59 2.09-3.15 3-4.79.71-1.27 1.22-2.63 1.83-3.93.14-.29.24-.6.39-.88.57-1 1-1.22 2-.89.235.061.466.138.69.23a1.53 1.53 0 0 1 .81 1.94 22.307 22.307 0 0 1-1.45 3.73c-.61 1.19-1.31 2.35-2 3.5-1.06 1.72-2.2 3.38-3.29 5.08l-.04-.03Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="m50.053 32.204 10.09 5.17c1.22.62 2.5 1.13 3.71 1.77l6.42 3.42c1 .57 2.17 1.16 3.22 1.77l3.15 1.89a68.178 68.178 0 0 0 5.6 3.09c1.2.6 2.45 1.08 3.64 1.69l3.63 1.85c.75.39.51.83-.36 1.17a7.171 7.171 0 0 1-4 .25 18.708 18.708 0 0 1-2.1-.62c-.68-.26-1.34-.55-2-.84a65.42 65.42 0 0 1-3.85-1.87c-2.49-1.32-4.89-2.61-7.26-4-2.89-1.7-6.18-3-9.27-4.47l-10.26-4.99c-2.1-1-4.207-1.98-6.32-2.94-3.2-1.47-6.4-3-9.67-4.2-1.27-.49-2.54-.88-3.84-1.27l-1.93-.55-1.9-.62c-.56-.19-1.12-.34-1.68-.56a6.65 6.65 0 0 1-2.09-1.08 2.132 2.132 0 0 1-.63-1.35 4.758 4.758 0 0 1-.09-.71c0-.37.28-.61.76-.77a4.23 4.23 0 0 1 2-.12c2.497.292 4.964.808 7.37 1.54 2.41.76 4.82 1.65 7.21 2.6 3.54 1.42 7.06 2.94 10.49 4.61l-.04.14ZM40.393 41.344l10.27 5.07c1.25.62 2.55 1.12 3.8 1.74l13.09 6.63c1.93 1 3.94 1.82 5.88 2.73a56.915 56.915 0 0 1 7.45 3.69c.73.48.34 1.09-.62 1.47a5.847 5.847 0 0 1-4 0l-4-1.54c-.66-.26-1.32-.52-2-.81l-1.92-.91c-2.56-1.22-5.09-2.54-7.58-3.92-3-1.63-6.3-2.87-9.45-4.31-3.46-1.6-6.92-3.21-10.37-4.86l-3.14-1.47c-1.06-.47-2.13-.93-3.21-1.37-3.28-1.34-6.6-2.68-9.95-3.78-1.3-.42-2.62-.77-3.93-1.09-1.31-.32-2.63-.61-3.93-1-.57-.15-1.14-.27-1.71-.43-2.1-.63-2.68-1.06-2.92-2.15a5.183 5.183 0 0 1-.15-.74c-.06-.78 1-1.24 2.72-1.09 5.09.33 10 2 14.9 3.71 3.63 1.32 7.24 2.75 10.81 4.36l-.04.07ZM38.882 58.633c2.91 1.58 5.8 3.16 8.72 4.68 1.07.56 2.19 1 3.25 1.54l5.6 2.89c1.88.94 3.8 1.84 5.74 2.72 1.72.77 3.5 1.45 5.25 2.15a30.832 30.832 0 0 1 6.53 3.24c.63.45.28.9-.56 1.17a6.106 6.106 0 0 1-3.47 0l-3.46-1.02-3.42-1.27c-2.28-.87-4.56-1.8-6.81-2.9-1.35-.67-2.77-1.22-4.19-1.85-1.42-.63-2.82-1.21-4.18-1.87-3-1.46-6-3-8.93-4.52-1.83-.93-3.64-1.88-5.47-2.78-2.78-1.37-5.6-2.76-8.39-3.96-2.19-.92-4.45-1.55-6.68-2.26-.5-.15-1-.3-1.46-.49-1.79-.73-2.26-1.22-2.31-2.31a4.691 4.691 0 0 1 0-.74c.07-.77 1-1.11 2.51-.93 1.1.127 2.191.314 3.27.56 1.07.27 2.15.57 3.21.91 2.16.67 4.271 1.485 6.32 2.44 3.06 1.39 6 2.95 9 4.46l-.07.14ZM42.292 71.283c1.88.91 3.78 1.79 5.65 2.75.68.34 1.4.59 2.08.95l7.12 3.87c1.06.56 2.14 1.06 3.23 1.53a19.002 19.002 0 0 1 4 2.09c.38.3 0 .85-.61 1.26a2.72 2.72 0 0 1-2.39.36 72.708 72.708 0 0 1-8.32-4 44.926 44.926 0 0 0-5.17-2.24c-1.92-.8-3.81-1.68-5.72-2.53-1.18-.52-2.35-1-3.54-1.54-1.8-.75-3.59-1.55-5.42-2.17-1.42-.49-2.9-.76-4.32-1.12-.32-.08-.64-.13-1-.23-1.17-.37-1.44-.76-1.32-1.82.011-.241.038-.482.08-.72a1.55 1.55 0 0 1 1.8-1.16c1.376.143 2.738.4 4.07.77 1.34.4 2.66.88 4 1.39 2 .77 3.88 1.63 5.82 2.47l-.04.09Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="M22.783 46.634c1.2-1.92 2.39-3.84 3.54-5.78.42-.71.75-1.47 1.17-2.17 1.47-2.5 3-5 4.4-7.51a34.509 34.509 0 0 0 1.62-3.49 25.624 25.624 0 0 1 2-4.48c.57-.88 2.59 1.31 1.95 3.15a47.757 47.757 0 0 1-4.51 9.19c-1.09 1.74-2 3.68-3 5.51-1.13 2-2.31 4-3.49 5.92l-2.17 3.62c-1.08 1.84-2.21 3.65-3.19 5.52-.76 1.45-1.33 3-2 4.47-.14.33-.25.66-.41 1-.58 1.2-1 1.46-1.93 1.28a6.116 6.116 0 0 1-.64-.14c-.69-.22-.95-1-.67-1.94a42.179 42.179 0 0 1 3.76-8.26c1.11-2 2.3-3.95 3.45-5.92l.12.03Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesMess);
export default Memo;