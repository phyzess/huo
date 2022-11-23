import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesNumber6 = ({
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
      d="m61.497 75.525.83-.52c.28-.18.52-.41.78-.61a10.982 10.982 0 0 0 1.48-1.33c.246-.224.47-.472.67-.74.21-.26.44-.52.66-.77.19-.25.367-.51.53-.78.184-.256.348-.527.49-.81.18-.43.36-.86.5-1.3.086-.465.196-.925.33-1.38.33-1.706.309-3.461-.06-5.16a12.219 12.219 0 0 0-2.27-4.82 9.542 9.542 0 0 0-1.73-1.69 9.739 9.739 0 0 0-2.14-1.13l-.73-.28a6.573 6.573 0 0 0-.77-.17 8.913 8.913 0 0 0-1.56-.25c-.53 0-1.06-.07-1.6-.11l-1.65.07c-.69 0-.67-.21-.14-.61a6.09 6.09 0 0 1 3-1.32c2.642-.275 5.3.333 7.56 1.73a11.692 11.692 0 0 1 4.94 6.17 18.152 18.152 0 0 1 .93 9.51 6.06 6.06 0 0 1-.36 1.31l-.45 1.28-.63 1.2c-.2.4-.434.782-.7 1.14a14.897 14.897 0 0 1-1.62 2l-.88.94-1 .85a20.113 20.113 0 0 1-5.37 3.26c-.728.31-1.477.572-2.24.78-.76.23-1.55.34-2.32.51-.77.17-1.57.19-2.36.21-.79.04-1.58.04-2.37 0a21 21 0 0 1-7.23-1.52 7.393 7.393 0 0 1-1.5-.72 3.446 3.446 0 0 1-1.5-1.53 1.86 1.86 0 0 1 .17-1.6 5.92 5.92 0 0 1 .41-.84 2.19 2.19 0 0 1 2.78-.54 45.596 45.596 0 0 0 4.87 1.56 18.42 18.42 0 0 0 5 .34 15.15 15.15 0 0 0 7.24-2.42l.01.09Z"
      fillRule="evenodd"
      fill={color}
    />
    <path
      d="M33.306 61.746c.743 3.596 2.4 6.94 4.81 9.71a23.13 23.13 0 0 0 9.22 6.26c2.574.86 5.3 1.167 8 .9.566-.037 1.128-.12 1.68-.25l.87-.13c.28-.07.56-.17.84-.25 1.168-.298 2.3-.717 3.38-1.25a23.707 23.707 0 0 0 3.14-1.88 21.665 21.665 0 0 0 2.77-2.32 13.672 13.672 0 0 0 2-2.79 10.11 10.11 0 0 0 1-3.16 10.62 10.62 0 0 0-1.33-6.63 11.292 11.292 0 0 0-4.57-4.27 14.001 14.001 0 0 0-6.36-1.51 16.66 16.66 0 0 0-8.3 2.19 27.607 27.607 0 0 0-3.6 2.54 22.255 22.255 0 0 0-3.28 3.17c-1.23 1.49-1.44 1.16-1.12-.66.266-1.26.658-2.49 1.17-3.67.355-.817.794-1.595 1.31-2.32.303-.39.638-.755 1-1.09.337-.349.698-.673 1.08-.97a20.81 20.81 0 0 1 10.42-4.33 19.32 19.32 0 0 1 11.59 2.18 15.183 15.183 0 0 1 4.8 4 16.427 16.427 0 0 1 2.87 5.67c.277 1.011.464 2.045.56 3.09l.07 1.59c0 .53-.06 1.07-.11 1.6a16.001 16.001 0 0 1-1.94 6 24.4 24.4 0 0 1-10.1 9.44 25.558 25.558 0 0 1-6.48 2.4l-1.68.36c-.57.1-1.16.11-1.74.16-.58.05-1.15.1-1.73.08l-1.72-.09a27.583 27.583 0 0 1-13.81-5.15 28.817 28.817 0 0 1-9.41-11 15.857 15.857 0 0 1-.89-2.08 16.32 16.32 0 0 1-.7-2.19l-.56-2.19c-.12-.75-.24-1.5-.34-2.25a27.378 27.378 0 0 1 .64-8.91 37.726 37.726 0 0 1 5.34-12 57.907 57.907 0 0 1 3.88-5.16c1.4-1.61 2.84-3.19 4.38-4.65a57.733 57.733 0 0 1 16-11.48 33.025 33.025 0 0 1 4.11-1.67c1.901-.682 3.932-.925 5.94-.71a4.994 4.994 0 0 1 1.64.51c.425.255.793.595 1.08 1 .293.3.548.637.76 1 .46 1.21-1.55 2.11-4.74 3.39a54.122 54.122 0 0 0-13.65 7.77 59.014 59.014 0 0 0-11.57 11.23 36.112 36.112 0 0 0-5.61 10.12 19.657 19.657 0 0 0-.85 10.6l-.16.05Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesNumber6);
export default Memo;