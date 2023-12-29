interface ValueProps {
  title: string;
  icon: string;
  image: string;
}

function Value(props: ValueProps): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <img src={props.icon} alt="" />
        <div>{props.title}</div>
      </div>
      <img width={274} src={props.image} alt="" />
    </div>
  );
}

export default Value;
