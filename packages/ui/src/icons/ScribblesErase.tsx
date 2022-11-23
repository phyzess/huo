import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesErase = ({
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
      d="m70.964 36.55-14.36 11.679c-2.38 2-4.74 3.9-7.06 5.88-1.16 1-2.31 2-3.44 3l-.51.44-.42.37c-.21.188-.398.4-.56.63-.07.11-.15.26-.07.37.08.11.26.06.38.07.56 0 1.07-.09 1.61-.09l7.62-.62c2.65-.2 5.32-.42 8-.52 1.34 0 2.69-.06 4-.07h3c.478-.001.955.022 1.43.07l.79.09c.25 0 .47.13.71.19.473.118.955.192 1.44.22.903.102 1.798.26 2.68.47.742.18 1.452.466 2.11.85a4 4 0 0 1 1.48 1.45c0 .08.07.18.11.27.04.09 0 .2 0 .29.026.176.026.354 0 .53a3.086 3.086 0 0 1-.31.85 6.294 6.294 0 0 1-1.16 1.58 20.006 20.006 0 0 1-4.64 3.19l-1.36.74-1.07.56-1.77.9-3.35 1.83c-3.11 1.6-6.17 3.25-9.17 5.04-.74.45-1.47.91-2.18 1.38l-1 .72-.47.33-.28.21a6.192 6.192 0 0 0-1.67 1.72 1.374 1.374 0 0 0-.12.34c0 .14.11.24.23.28.252.067.51.104.77.11H60.044a44.38 44.38 0 0 1 7 .52 14.286 14.286 0 0 1 6.87 2.69c1.29 1.09 1.42 2 1.12 2.11-.3.11-1.1-.19-2.26-.38-2.34-.42-6.18-.09-11.15-.09-2.07 0-4.17.07-6.33.15l-2.42.08h-3.2a8 8 0 0 1-2.64-.53 4.003 4.003 0 0 1-1.53-1.1 3.56 3.56 0 0 1-.51-.77 3.976 3.976 0 0 1-.32-1 3.627 3.627 0 0 1 .23-2 10.447 10.447 0 0 1 3.17-4.4c.78-.68 1.68-1.34 2.45-1.89l.77-.53.73-.47c1-.61 1.93-1.19 2.89-1.75 3.83-2.17 7.75-4.17 11.62-6.08 1-.48 1.91-1 2.86-1.48.66-.35.46-.23.6-.29l.25-.09c.17-.07.37-.15.6-.27.122-.057.24-.124.35-.2.11-.08.24-.2.21-.32a.69.69 0 0 0-.43-.35 3.673 3.673 0 0 0-1-.22h-1.09l-2 .07c-2.73.14-5.51.4-8.31.59-2.8.19-5.62.49-8.45.75l-5.13.45a22.158 22.158 0 0 1-3.41.11 12.8 12.8 0 0 1-3-.2 6.002 6.002 0 0 1-2.09-.88 2.759 2.759 0 0 1-.39-.32.592.592 0 0 1-.19-.26.107.107 0 0 1 0-.07s.14-.08.07 0l-.11-.14a2.28 2.28 0 0 1-.19-1.21 6.096 6.096 0 0 1 .7-2.25 11.65 11.65 0 0 1 1.92-2.6c.82-.9 1.75-1.78 2.66-2.65l1.36-1.28.88-.79a80.85 80.85 0 0 1 3.56-3.19c4.76-4.06 9.58-8 14.37-11.93 2.95-2.42 5.9-4.85 8.81-7.3 1.42-1.24 2.857-2.496 4.31-3.77l1.17-1 1.09-1 .72-.72c.23-.27.49-.55.7-.85.11-.155.2-.323.27-.5.08-.21-.17-.3-.32-.34-.702-.1-1.416-.1-2.12 0-.72.07-1.45.18-2.18.32l-1.2.23-2 .43a136.236 136.236 0 0 0-15.48 4.62 131.509 131.509 0 0 0-23.42 11.41c-1.62 1-3.15 2.06-4.76 3.08l-3.75 2.4c-.475.296-.966.566-1.47.81-.407.225-.828.425-1.26.6a10.15 10.15 0 0 1-3.63.85c-.43.047-.866.067-1.3.06-.54-.09-.36-.74.35-2a21.013 21.013 0 0 1 4.05-4.93c1.56-1.32 3.19-2.59 4.86-3.8 1.67-1.21 3.42-2.33 5.2-3.42a117.633 117.633 0 0 1 11.1-5.91 150.965 150.965 0 0 1 24-8.79c1.7-.46 3.41-.89 5.15-1.29l1.33-.3c.84-.16 1.68-.35 2.51-.5 1.67-.32 3.32-.56 4.9-.72a14.682 14.682 0 0 1 4.14.08 5.558 5.558 0 0 1 2.49 1.18c.309.267.584.569.82.9.147.224.278.458.39.7a4.28 4.28 0 0 1 .27 2.91 6.777 6.777 0 0 1-1.18 2.49c-.757 1.033-1.6 2-2.52 2.89-1 1-2 1.94-3.08 2.89l-1.66 1.33h-.11l-.07.06-.1.09-.2.18-.4.35c-2.14 1.88-4.29 3.7-6.44 5.51l-.15-.12Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesErase);
export default Memo;