import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesCheckmate2 = ({
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
      d="M57.356 65.405c-2.22 2.56-4.43 5.13-6.72 7.66l-1.7 1.9-.88.94-1.29 1.42c-2 2.27-4 4.09-6 6-.44.3-.93.69-1.33.91l-1 .21c-.55.12-1.1.26-1.65.4a.883.883 0 0 1-.44 0 1.878 1.878 0 0 1-.51-.28 3.775 3.775 0 0 1-.59-.62 6.692 6.692 0 0 1-1.25-4c.002-2.007.146-4.012.43-6l.42-3.11.05-.38v-.23l.08-.46.15-.91c.4-2.42.8-4.83 1.24-7.22.44-2.39.89-4.78 1.28-7.16.19-1.18.37-2.37.53-3.54l.16-1.33c.02-.286.02-.573 0-.86 0-.25 0-.58-.3-.66a2.065 2.065 0 0 0-.75-.12 6.894 6.894 0 0 0-.79 0l-1.34.09c-2.14.18-4.35.38-6.57.45-2.9.15-5.808-.025-8.67-.52a21.924 21.924 0 0 1-8.13-3.39c-1.5-1.1-.68-1.77 1-2a30.246 30.246 0 0 1 7.18 0c2.523.396 5.079.54 7.63.43 2.64-.08 5.25-.4 8.2-.66.81-.17 1.5-.17 2.19-.17.67-.002 1.339.048 2 .15a5.133 5.133 0 0 1 1.71.55c.503.29.961.65 1.36 1.07a5.29 5.29 0 0 1 1.15 3.32c.037.667.037 1.334 0 2l-.08 1v.61c-.35 3-.88 5.77-1.44 8.58-.66 3.36-1.27 6.77-1.78 10.19l-.26 1.87-.1.84c-.06.56-.13 1.11-.17 1.75-.03.236-.03.475 0 .71 0 .14.14.23.22.14.078-.054.152-.114.22-.18l.93-.77c.31-.32.66-.64 1-1 .16-.19.34-.34.52-.52l1.18-1.34c1.6-1.93 3.23-3.84 4.81-5.81a546.292 546.292 0 0 0 8.74-11l13.1-16.87c3.33-4.39 6.35-8.91 9.77-13.29a34.96 34.96 0 0 1 2.32-2.84c.84-.82 1.57-1.47 2.21-2a5.534 5.534 0 0 1 1.71-1.16 5.128 5.128 0 0 1 3 .06c.37.088.731.209 1.08.36.48.27.49.87.28 1.83-.139.593-.312 1.178-.52 1.75-.05.161-.11.318-.18.47l-.26.43c-.18.31-.39.63-.61 1-.66 1-1.35 1.88-2 2.92-.65 1.04-1.41 1.93-2.14 2.89-1.42 2-2.93 3.9-4.42 5.91-3 3.94-6.08 8-9.29 12-4.75 5.84-9.65 11.76-14.56 17.68l-.13-.09Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesCheckmate2);
export default Memo;
