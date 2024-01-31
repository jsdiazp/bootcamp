import Arrow from "../assets/icons/arrow.svg";

type SecondaryCard2Properties = {
  image: string;
};

export default function SecondaryCard2(properties: SecondaryCard2Properties) {
  return (
    <div
      id="secondary-card-2"
      className="parent-column"
      style={{
        backgroundImage: `url(${properties.image})`,
        backgroundSize: "cover",
        aspectRatio: "391 / 353",
        borderRadius: "40px",
        padding: "45px",
      }}
    >
      <div className="child-row flex-grow"></div>
      <div className="child-row parent-row">
        <div className="child-column flex-grow"></div>
        <div
          className="child-column parent-row"
          style={{
            backgroundColor: "white",
            padding: "18px 25px",
            borderRadius: "100px",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <div className="child-column" style={{ fontSize: "24px" }}>
            Ver todo
          </div>
          <div className="child-column">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
