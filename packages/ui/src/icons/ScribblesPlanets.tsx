import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesPlanets = ({
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
      d="M80.384 44.256c-3.19 13.58-36.33 31.05-45.02 33.35a.86.86 0 0 1-.78-.12l-3.53-2.9s26.89-13.12 31.61-17.66c4.72-4.54 17.44-13.69 17.44-13.69l.28 1.02Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="M30.054 78.296a36.614 36.614 0 0 1-6.24-5.15 32.382 32.382 0 0 1-4.76-6.59 30.175 30.175 0 0 1-3.56-15.71c.07-1.967.308-3.924.71-5.85a28.92 28.92 0 0 1 1.72-5.61 36.001 36.001 0 0 1 12.81-15.7 34.177 34.177 0 0 1 9.2-4.4c.83-.2 1.64-.47 2.48-.61l2.53-.45 2.54-.19c.85-.08 1.7 0 2.54 0h1.13l1.12.12c.74.09 1.49.13 2.23.25 1.472.247 2.927.581 4.36 1 1.423.406 2.822.894 4.19 1.46.69.28 1.34.63 2 .94.687.29 1.355.624 2 1a30.998 30.998 0 0 1 8.84 7.25 22.6 22.6 0 0 1 4.8 10.41c0 1.22-.1 1.75-.36 1.77-.26.02-.7-.47-1.46-1.22l-6-6.91a30.522 30.522 0 0 0-16.74-10 32.995 32.995 0 0 0-9.89-.83c-1.65.139-3.286.416-4.89.83a33.052 33.052 0 0 0-4.75 1.75 27.404 27.404 0 0 0-9.55 7.76 32.096 32.096 0 0 0-5.69 11.29 26.933 26.933 0 0 0-.37 13.72 25.43 25.43 0 0 0 6.8 12 30.906 30.906 0 0 0 7 5.24 28.919 28.919 0 0 0 8.22 3.06 26.88 26.88 0 0 0 13.04-.36 35.833 35.833 0 0 0 11.74-6.26 30.483 30.483 0 0 0 6.5-7.8 34.85 34.85 0 0 0 3.61-9.36l.25-1.07c.07-.36.11-.72.17-1.08.09-.72.26-1.44.31-2.17.37-2.73.27-4.49.49-5.75.091-.547.225-1.085.4-1.61.21-.46.39-.82.57-1.18.18-.36.29-.75.42-1 .24-.37.62-.05 1.41 1a8.198 8.198 0 0 1 1.33 3.5c.1.555.16 1.116.18 1.68a34.545 34.545 0 0 1-1 10.33 36.422 36.422 0 0 1-4.23 9.81 38.502 38.502 0 0 1-3.3 4.35c-.59.7-1.218 1.367-1.88 2l-2.07 1.82-.51.46-.56.4-1.13.83c-.76.51-1.48 1.1-2.28 1.53l-2.42 1.27c-.4.21-.8.44-1.21.63l-1.27.51-1.87.76c-.63.271-1.279.498-1.94.68-.68.19-1.36.4-2 .56l-2.07.37c-2.75.392-5.54.426-8.3.1a38.577 38.577 0 0 1-15.34-5.48v-.1Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="M71.554 53.576a112.906 112.906 0 0 1-17.94 11.45c-2.29 1.17-4.56 2.44-6.85 3.44-4.08 1.9-8.224 3.673-12.43 5.32-4.241 1.637-8.584 3-13 4.08a52.815 52.815 0 0 1-6 1.2c-1.05.137-2.111.184-3.17.14a8.513 8.513 0 0 1-3.33-.74 4.9 4.9 0 0 1-1.92-1.63 5.44 5.44 0 0 1-.86-2.37 7.263 7.263 0 0 1 .1-2.37 9.45 9.45 0 0 1 .76-2.09 12.73 12.73 0 0 1 5.89-5.78c.82-.37 1.31-.26 1.38 0 .07.26-.16.81-.49 1.48-.33.67-.79 1.48-1.3 2.44-.26.46-.5 1-.79 1.47l-.95 1.54a5.45 5.45 0 0 0-.94 2.44c-.024.337.014.676.11 1a.998.998 0 0 0 .36.53 4.39 4.39 0 0 0 2.34.68c1.14.05 2.281-.007 3.41-.17 1.19-.15 2.4-.38 3.61-.65s2.41-.69 3.61-1.07c2.4-.78 4.8-1.64 7.2-2.54a153.827 153.827 0 0 0 17.22-7.74c3.12-1.55 6.18-3.11 9.13-4.88 2.95-1.77 5.84-3.67 8.62-5.71a113.56 113.56 0 0 0 9.85-8.1c2.36-2.22 4.66-4.48 6.88-6.86 1.09-1.18 2.15-2.41 3.26-3.63 1.11-1.22 2.15-2.4 3.09-3.64a16.884 16.884 0 0 0 1.87-3c.12-.26.25-.51.34-.77l.15-.38c.035-.092.065-.186.09-.28a3.46 3.46 0 0 0 .15-.92.9.9 0 0 0-.41-.74 1.558 1.558 0 0 0-.83-.21 6.36 6.36 0 0 0-1 .13 6.86 6.86 0 0 0-1.53.46 12.07 12.07 0 0 0-2.55 1.46 28.305 28.305 0 0 1-3.63 1.66 4.64 4.64 0 0 1-1.24.12 8.068 8.068 0 0 1-1.15-.29c-.33-.11-.7-.15-.93-.26-.4-.18-.36-.64-.09-1.57a6.28 6.28 0 0 1 2.39-3 15.65 15.65 0 0 1 7-3c.74-.195 1.497-.319 2.26-.37a8.002 8.002 0 0 1 3.14.38c.97.33 1.823.938 2.45 1.75.612.831.941 1.837.94 2.87a10.618 10.618 0 0 1-.67 3.17c-.064.208-.14.412-.23.61l-.21.49c-.15.33-.31.63-.47.95a22.437 22.437 0 0 1-2.19 3.39c-1.56 2-3.26 3.78-4.75 5.45a124.708 124.708 0 0 1-15.67 14.73l-.08-.07ZM39.364 45.395c-.418.26-.86.477-1.32.65-.446.127-.9.22-1.36.28a7.395 7.395 0 0 1-2.51-.21l-.87-.22a5.939 5.939 0 0 1-.86-.38 5.089 5.089 0 0 1-2.19-2.52 4.566 4.566 0 0 1-.31-1.61c0-.27 0-.53.09-.78l.2-.74a6.373 6.373 0 0 1 1.31-2.2 4.07 4.07 0 0 1 2.71-1.47c.32 0 .33.25.2.63a3.215 3.215 0 0 1-.68 1.15 2.99 2.99 0 0 0-.71.84 3.17 3.17 0 0 0-.37.95 3.615 3.615 0 0 0-.1.91c.02.287.02.574 0 .86 0 .73.7 1.21 1.47 1.5a3.938 3.938 0 0 0 2.8.11c.5-.22.917-.596 1.19-1.07.464-.788.57-1.738.29-2.61a3.782 3.782 0 0 0-1.23-1.68 2.565 2.565 0 0 1-.38-.26 1.26 1.26 0 0 1-.35-1.36c0-.14.05-.29.08-.43.12-.45.57-.68 1.32-.62 1.167.2 2.228.802 3 1.7.42.479.758 1.022 1 1.61.08.31.15.63.2.95.05.32 0 .66.05 1a6.41 6.41 0 0 1-2.62 5.09l-.05-.07Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesPlanets);
export default Memo;