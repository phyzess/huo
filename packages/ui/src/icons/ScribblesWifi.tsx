import * as React from "react";
import { SVGProps, memo } from "react";

interface HuoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}
const SvgScribblesWifi = ({
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
      d="M69.874 84.822c.2.4-.26.72-1 1.09-.35.118-.73.118-1.08 0a6.412 6.412 0 0 1-.62-.78 5.349 5.349 0 0 1-.37-1.64c0-.42-.08-.87-.1-1.27-.02-.4 0-.77 0-1a8.792 8.792 0 0 1 .53-2.78 19.406 19.406 0 0 1 2.82-5c.283-.344.62-.638 1-.87l3.62-2.53c.23-.117.423-.293.56-.51a6.437 6.437 0 0 1 2.16-1.21c.54-.19 1.1-.36 1.55-.49.33-.069.664-.11 1-.12.67.02 1.337.077 2 .17.643.068 1.282.178 1.91.33.17.05.37 0 .51.22.34.54.71.48 1.08.55.51.13.995.34 1.44.62.235.21.425.465.56.75.16.25-.16.95-.24 1-.27.19-.19.57-.26.88-.02.108-.046.215-.08.32a6.72 6.72 0 0 1-1.39.6c-.457.194-.925.364-1.4.51h-.53c-.372.027-.742.074-1.11.14l-.6.1-.53.16-.64.2c-.18.045-.37.045-.55 0-.409.136-.801.317-1.17.54-.375.207-.739.434-1.09.68-.423.293-.916.47-1.43.51a.33.33 0 0 0-.27.14l-1.07.78-.56.38-.52.45c-.177.15-.338.317-.48.5l-.4.57c-.07.058-.143.111-.22.16a.898.898 0 0 0-.26.21 9.008 9.008 0 0 0-1.4 3 4.846 4.846 0 0 1-.42.81c-.13.288-.227.59-.29.9 0 .09-.16.25-.33.43s-.36.42-.33.5ZM48.394 78.892a2.86 2.86 0 0 1-.87 2.47c-.21.25-.91.32-1 0-.27-.52-.56-1-.8-1.61a5.447 5.447 0 0 1-.25-1.09 19.229 19.229 0 0 1-.4-2.22 22.534 22.534 0 0 1-.1-2.58v-1.13l.06-.9a21.233 21.233 0 0 1 1.11-5.62 37.355 37.355 0 0 1 5.45-10.32c.51-.701 1.1-1.339 1.76-1.9 2.32-1.87 4.53-3.75 6.88-5.53.421-.272.796-.61 1.11-1a7.075 7.075 0 0 1 1.34-1.02 28.407 28.407 0 0 1 2.73-1.55c.96-.48 1.944-.907 2.95-1.28.602-.22 1.217-.404 1.84-.55 2.64-.459 5.326-.6 8-.42a2.11 2.11 0 0 1 1.14.27 4.5 4.5 0 0 0 2.38.77c.554.12 1.1.28 1.63.48.52.23 1 .51 1.53.78.47.351.893.761 1.26 1.22.35.37-.16.91-.33.93-.51.06-.29.51-.37.79a.92.92 0 0 1-.11.29 29.2 29.2 0 0 0-2.9.35c-1.41.28-2.74.61-3 .65a37 37 0 0 0-3.76.57 22.7 22.7 0 0 0-4.18 1.42c-.42.153-.856.254-1.3.3-.98.43-1.924.942-2.82 1.53-1.33.81-2.57 1.77-2.67 1.83-.531.326-1.045.68-1.54 1.06a6.813 6.813 0 0 1-1.7.87c-.237.098-.449.248-.62.44-.79.75-1.59 1.47-2.39 2.21a31.671 31.671 0 0 0-2.38 2.25c-.389.403-.743.838-1.06 1.3-.33.44-.65.9-1 1.37a6.014 6.014 0 0 1-.42.45 2.534 2.534 0 0 0-.49.6 23.31 23.31 0 0 0-3.1 7.3 21.62 21.62 0 0 0-1 4.17 10.638 10.638 0 0 0-.61 2.05ZM17.594 71.342c.04.372.04.747 0 1.12-.033.339-.1.674-.2 1a7.295 7.295 0 0 1-1 1.92c-.28.39-1.16.4-1.32-.07-.29-.9-.59-1.83-.83-2.79a14.291 14.291 0 0 1-.13-1.85c0-.5 0-1.09-.08-1.72-.08-.63 0-1.32.05-2 .085-2.547.36-5.084.82-7.59a34.867 34.867 0 0 1 2.88-9 64.367 64.367 0 0 1 10.81-15.6 27.986 27.986 0 0 1 3.12-2.84c3.83-2.93 7.63-5.8 11.64-8.47a7.993 7.993 0 0 0 1.95-1.43 12.956 12.956 0 0 1 2.29-1.58c.64-.34 1.33-.78 2.12-1.15l2.47-1.12a41.808 41.808 0 0 1 8-2.52c4.3-.67 8.664-.824 13-.46a3.889 3.889 0 0 1 1.82.34 9.794 9.794 0 0 0 3.84 1.2c.89.24 1.77.47 2.64.75.87.28 1.7.69 2.53 1.06.778.49 1.501 1.06 2.16 1.7.62.53-.15 1.2-.43 1.21-.82 0-.41.62-.5 1a.873.873 0 0 1-.15.38 7.508 7.508 0 0 1-1.54-.13l-.71-.1h-.82l-1.76-.07-1.79.09c-.539.013-1.077.06-1.61.14-.64.1-1.283.167-1.93.2-.06 0-.9.1-2.14.1-1.54.082-3.072.259-4.59.53a39.81 39.81 0 0 0-7.5 2.05 12.98 12.98 0 0 1-2.27.53c-.09 0-.76.31-1.71.72s-2.16 1.06-3.38 1.66c-2.43 1.25-4.74 2.71-4.93 2.8-1 .5-1.87 1.12-2.82 1.66a13.968 13.968 0 0 1-3 1.43 4.534 4.534 0 0 0-1.11.73 102.922 102.922 0 0 0-8.71 7.35c-.67.7-1.32 1.43-2 2.16l-1.8 2.28c-.23.27-.49.51-.73.77-.305.317-.592.65-.86 1a61.824 61.824 0 0 0-3.64 5.85c-.58 1-1.08 2-1.61 3.05-.53 1.05-.89 2.12-1.25 3.2-.146.45-.32.89-.52 1.32-.25.6-.58 1.31-.81 2.05-.23.74-.52 1.48-.71 2.12-.19.64-.25 1.21-.25 1.52a16.803 16.803 0 0 1-.6 1.76 6.575 6.575 0 0 0-.4 1.74Z"
      fillRule="evenodd"
      fill={color}
    />
  </svg>
);
const Memo = memo(SvgScribblesWifi);
export default Memo;