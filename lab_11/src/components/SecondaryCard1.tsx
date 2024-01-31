type SecondaryCard1Properties = {
  category: "Publicidad";
  title: string;
  callToAction: string;
};

export default function SecondaryCard1(properties: SecondaryCard1Properties) {
  return (
    <div
      id="secondary-card-1"
      className="parent-column flex-grow"
      style={{
        padding: "45px",
        backgroundColor: "#b8d3d8",
        borderRadius: "40px",
        gap: "12px",
        alignItems: "flex-start",
      }}
    >
      <div
        className="child-row"
        style={{
          padding: "13px 19px",
          border: "1px solid black",
          borderRadius: "100px",
          fontSize: "15px",
        }}
      >
        · {properties.category}
      </div>
      <div className="child-row" style={{ fontSize: "30px" }}>
        {properties.title}
      </div>
      <div
        className="child-row"
        style={{ fontSize: "15px", textDecoration: "underline" }}
      >
        {properties.callToAction}
      </div>
    </div>
  );
}
