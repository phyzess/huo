import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesStar = ({
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
      d="M66.696 84.272a2.902 2.902 0 0 1-.51.67 2.15 2.15 0 0 1-.73.47c-.243.092-.5.147-.76.16h-.83c-.43-.13-.85-.25-1.28-.4l-1.3-.63c-.42-.18-.88-.49-1.21-.67-.33-.18-.48-.29-.71-.45-.61-.39-1.25-.71-1.82-1.15-.57-.44-1-.77-1.47-1.19l-1.35-1.32c-.43-.47-.87-.92-1.28-1.39-.41-.47-.84-.93-1.23-1.42-.72-.84-1.43-1.69-2.07-2.6a8.196 8.196 0 0 1-1.63-4c-.06-.44.25-.44.7-.21a5.254 5.254 0 0 1 1.48 1.25 26.107 26.107 0 0 0 5.08 5.88 11.87 11.87 0 0 0 2 1.44c.36.21.7.44 1.05.66l1 .65c.59.36 1.27.77 1.78 1.06.26.176.53.337.81.48.169.106.355.18.55.22a.28.28 0 0 0 .34-.16c.046-.12.076-.244.09-.37.01-.279-.01-.557-.06-.83 0-.27-.28-1.3-.5-2.11-.22-.81-.49-1.68-.77-2.51a39.371 39.371 0 0 1-1.4-3.92 6.691 6.691 0 0 1-.23-.93 2.003 2.003 0 0 1 .19-1.34c.178-.303.476-.514.82-.58.167-.057.337-.1.51-.13.57 0 1 .37 1.42 1 .53 1 1 2 1.58 3.09.58 1.09.8 2.3 1.18 3.52l.38 1.39.18.72.22 1c.42 1.83.49 3.59-.15 4.69l-.07-.04ZM24.246 40.351a58.105 58.105 0 0 0 4.29 4.92l2.34 2.37.84.84c.349.334.654.71.91 1.12.236.334.323.75.24 1.15l-.55 1.1-.87.88-.55.59c-.31.32-.61.65-.91 1-1.27 1.43-2.4 3-3.53 4.54a56.47 56.47 0 0 0-5.24 8.69c-.37.76-.71 1.53-1 2.31-.29.78-.46 1.18-.57 1.55a2.261 2.261 0 0 0-.13 1.16c.09.23.34.13.48 0l.47-.33 3-2.12c1.29-.88 2.6-1.73 3.93-2.53a42.31 42.31 0 0 1 5.37-2.74l1.43-.54c.48-.17 1-.3 1.46-.44a6.457 6.457 0 0 1 1.52-.27 11.2 11.2 0 0 1 1.54-.09c1.28 0 1.09.26.15.85-.23.16-.51.32-.82.53l-1 .73c-.832.528-1.701.996-2.6 1.4a46.209 46.209 0 0 0-5.08 2.73c-1.68 1.014-3.33 2.07-4.95 3.17-.9.61-1.3.9-3.2 2.31-.39.28-.77.49-1.15.74l-.29.19a.556.556 0 0 1-.25.12l-.46.11a1.781 1.781 0 0 1-.78 0 1.996 1.996 0 0 1-.78-.24 2.242 2.242 0 0 1-1-1.47 3.78 3.78 0 0 1-.09-1v-.58l.1-.62c.155-.84.38-1.666.67-2.47.14-.44.22-.59.32-.86s.21-.49.31-.73a66.007 66.007 0 0 1 7.69-13.09c.68-.86 1.37-1.71 2.09-2.53.36-.41.72-.83 1.09-1.22l.54-.58.21-.2.18-.17.08-.08v-.1c0-.03-.21-.24-.32-.36l-1.56-1.55a85.096 85.096 0 0 1-3.47-3.63 42.06 42.06 0 0 1-6-8.34 22.835 22.835 0 0 1-1.58-3.65c-.11-.32-.19-.65-.28-1-.106-.428-.19-.862-.25-1.3a9.876 9.876 0 0 1-.09-1.32c.01-.41.057-.818.14-1.22a2.73 2.73 0 0 1 1-1.86 3.69 3.69 0 0 1 2 .63c.72.43 1.46 1 2.19 1.52l1.53 1.1a47.126 47.126 0 0 0 9.94 5.43c.76.29 1.51.52 2.28.76 1.42.44 2.36.62 3 .87.519.185.99.482 1.38.87.164.13.318.275.46.43.17.23-.06.47-.68.72a6.193 6.193 0 0 1-2.89.33 23.102 23.102 0 0 1-5.5-1.25 31.205 31.205 0 0 1-5.17-2.36c-1.62-.94-3.19-2-4.71-3l-1.13-.8-.51-.37v.13c.07.28.14.56.23.85.18.58.391 1.151.63 1.71a30.3 30.3 0 0 0 4 6.55l-.09.01ZM64.566 19.931a.997.997 0 0 0 .09-.21.532.532 0 0 0 .06-.19.17.17 0 0 0 0-.17.4.4 0 0 0-.27-.05c-.125.012-.25.035-.37.07h-.1l-.43.21-.92.48c-1 .55-2 1.26-3 1.88a62.911 62.911 0 0 0-10 7.63 31.722 31.722 0 0 0-3.68 4.19c-1.45 1.87-2.67 3.87-4 5.79-.42.6-1 .26-1.37-.64a4.73 4.73 0 0 1 .19-3.73 33.102 33.102 0 0 1 2-3.41 29.991 29.991 0 0 1 2.46-3 40.426 40.426 0 0 1 5.7-5.24c2.47-1.86 4.81-4.05 7.44-5.83.73-.49 1.47-1 2.23-1.41.38-.22.76-.44 1.16-.65.59-.32 1.2-.65 1.81-.91a7.697 7.697 0 0 1 3.43-.74c.53.015 1.04.197 1.46.52.196.174.333.405.39.66l.27.72c.068.157.115.322.14.49v1c.044.349.044.702 0 1.05-.13.71-.19 1.42-.38 2.13s-.34 1.13-.51 1.65l-.52 1.42c-1.15 3-2.55 5.84-3.55 8.75a27.006 27.006 0 0 0-1.33 6.76v1.43c-.05 1.74-.19 2.2-1.41 2.76-.27.12-.54.28-.81.38-.91.34-1.81-.43-2.1-2.12a18.34 18.34 0 0 1 .55-7.25c.6-2.27 1.366-4.492 2.29-6.65.667-1.533 1.31-3.063 1.93-4.59.33-.76.54-1.49.81-2.23l.15-.53.07-.27v-.07l.12-.08Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="M12.626 28.96a14.096 14.096 0 0 1-.32-2.879c.018-.398.058-.796.12-1.19.09-.35.17-.7.27-1.05.236-.527.576-1 1-1.39.238-.21.522-.361.83-.44a3.21 3.21 0 0 1 .74-.11 5.453 5.453 0 0 1 1.62.21c.719.23 1.41.538 2.06.92l.66.43.66.48 1.33 1 1.31 1c.21.17.43.33.64.51l.36.3a63.445 63.445 0 0 0 10.21 7.43 22.612 22.612 0 0 0 5.1 2 33.1 33.1 0 0 0 6.79 1.2c.73.05.74.59.16 1.28a5.129 5.129 0 0 1-3.44 1.61 22.104 22.104 0 0 1-4.1-.24 21.332 21.332 0 0 1-3.89-1.18 32.539 32.539 0 0 1-6.91-3.85c-1.26-.92-2.58-1.78-3.9-2.64l-2-1.3-1-.67-.25-.19-.15-.12c-.36-.32-.78-.7-1.27-1.09a2.88 2.88 0 0 0-.84-.52c-.2-.06-.26.11-.3.22-.052.123-.08.256-.08.39a2.338 2.338 0 0 0 0 .59c.048.45.135.895.26 1.33.07.23.15.47.23.72l.24.6.29.69a42.594 42.594 0 0 0 4.48 8 27.3 27.3 0 0 0 4.88 4.9l1.21.86c1.24 1.29 1.44 1.89 1.11 3.13-.08.29-.12.58-.21.84a1.241 1.241 0 0 1-1 .79 3.732 3.732 0 0 1-2-.32 10.118 10.118 0 0 1-3.18-1.94 24.752 24.752 0 0 1-2.6-2.52 38.12 38.12 0 0 1-4.23-5.86 48.04 48.04 0 0 1-2.48-4.78c-.19-.41-.37-.82-.55-1.24l-.26-.6-.31-.78a33.554 33.554 0 0 1-1.42-4.54l.13.01ZM61.116 74.751c-1.26-3-2.45-5.91-3.61-9.18a19.61 19.61 0 0 1-.62-2.07 8.928 8.928 0 0 1-.32-2 5.107 5.107 0 0 1 .21-1.78c.077-.273.195-.532.35-.77 0 0 0-.13.14-.16a.828.828 0 0 1 .13-.19c.093-.103.197-.198.31-.28a5.512 5.512 0 0 1 3.53-.85c.69 0 1.45 0 2.09.08l1.34.09c2.3.16 4.55.14 6.77.14 2.52.041 5.039-.19 7.51-.69.59-.13 1.18-.29 1.75-.47l.84-.3.6-.25a4.613 4.613 0 0 0 1.35-.87c.235-.198.435-.434.59-.7 0-.16-.19-.2-.31-.25a2.302 2.302 0 0 0-.4-.11c-.27-.07-.56-.12-.86-.17l-1.06-.17c-3.61-.51-7.3-1-10.9-1.88a35.943 35.943 0 0 1-6.76-2.48 18.93 18.93 0 0 1-5.81-4.36c-1-1.19-.39-1.36.88-1 1.27.36 3.36 1.08 5.64 2a33.404 33.404 0 0 0 6.05 1.77c2.09.43 4.19.9 6.35 1.21 1.08.17 2.16.31 3.26.46l1.66.21 1.35.16c.54 0 1.08.11 1.61.18.987.103 1.962.304 2.91.6a3.89 3.89 0 0 1 1.67 1.12c.19.198.348.424.47.67.167.305.234.655.19 1a3.71 3.71 0 0 1-.7 1.92c-.38.52-.83 1-1.28 1.53a14.966 14.966 0 0 1-2.74 2.15l-.79.46c-.132.081-.27.155-.41.22l-.36.18c-.37.17-.75.33-1.13.48a27.738 27.738 0 0 1-4.58 1.34c-3.014.59-6.08.868-9.15.83-1.65 0-3.28-.08-4.89-.15h-1.69c-.14 0-.36 0-.43.14a2.004 2.004 0 0 0 0 .9l.11.47.06.24.16.52c.47 1.46 1 2.93 1.64 4.39 1.5 3.6 3.14 7.18 4.75 10.8.75 1.76 1.91 4.1 2.08 5.74.034.383.034.768 0 1.15.008.376-.14.739-.41 1a4.401 4.401 0 0 1-2.45.6 14.503 14.503 0 0 1-5.74-1.61 34.396 34.396 0 0 1-4.11-2.34 36.323 36.323 0 0 1-10.49-9.9 20.786 20.786 0 0 1-1.65-2.87 10.007 10.007 0 0 1-.83-4.36 2.74 2.74 0 0 1 1-2.06c.228-.229.484-.43.76-.6.89-.4 1.67 1 2.77 3.2.24.4.44.8.68 1.18l.37.58c.1.2.22.39.34.58a23.42 23.42 0 0 0 1.5 2.27 31.25 31.25 0 0 0 3.75 4.17 34.949 34.949 0 0 0 4.5 3.59c.8.52 1.62 1 2.45 1.49.21.12.42.22.63.33l.3.15s.06.07.08 0v-.09l-.23-.54-1-2.19-2-4.42.23-.18Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="M18.336 71.852a3.148 3.148 0 0 0-.65 1.12c0 .1-.06.27 0 .32.06.05.22 0 .37-.1.1-.062.197-.128.29-.2.137-.132.292-.243.46-.33-.07.1 1.32-.81 2.22-1.37.9-.56 2-1.23 3-1.8 2-1.18 4.11-2.21 6.2-3.25 1.89-.87 3.75-1.82 5.7-2.61.63-.25 1.25-.5 1.9-.7.65-.2 1.32-.37 2-.54a20.2 20.2 0 0 1 2.07-.26 3.11 3.11 0 0 1 .53 0l.54.13 1.06.29c.86.28.67.61 0 1.29-.33.35-.78.81-1.24 1.31a3.76 3.76 0 0 1-1.64 1c-1.11.4-2.21.83-3.33 1.34-1.12.51-2.26 1-3.41 1.44-2.28 1-4.57 2.2-6.91 3.35-.69.36-1.39.72-2.08 1.13-.69.41-1.34.85-2 1.29l-2.1 1.47-3.31 2.41-1.12.81-.4.25c-.11 0-.22.08-.33.12l-.65.25a5.705 5.705 0 0 1-.61.22l-.49.08c-.289.065-.584.099-.88.1a1.269 1.269 0 0 1-.55-.14 1.314 1.314 0 0 1-.5-.49 4.45 4.45 0 0 1-.46-2.38c.071-1.066.276-2.117.61-3.13.25-.76.53-1.54.86-2.31l.95-2.19c.49-1 1-2 1.53-3a91.25 91.25 0 0 1 5.36-8.67l2.15-3.28a29.92 29.92 0 0 1 2.27-3.21c.37-.44.71-.9 1.12-1.32a5.008 5.008 0 0 1 1.87-1.38 2.412 2.412 0 0 1 1.57.17c.234.075.461.169.68.28.32.19.42.55.41 1.06a3.662 3.662 0 0 1-.52 1.85l-1.71 2.94c-.56 1-1.25 1.87-1.88 2.81-1.28 1.87-2.57 3.77-3.82 5.7a110.813 110.813 0 0 0-2.81 4.3c-.45.73-.88 1.47-1.3 2.21l-.61 1.13-.27.51-.14-.02Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesStar);
export default Memo;
