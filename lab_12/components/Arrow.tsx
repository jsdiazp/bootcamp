type ArrowProps = {
  color?: string;
};
function Arrow(props: ArrowProps) {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4H53M53 4V54M53 4L3 54"
        stroke={props.color || "white"}
        stroke-width="8"
      />
    </svg>
  );
}

export default Arrow;
