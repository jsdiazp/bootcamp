type Link = {
  url: string;
  name: string;
};

type HeaderProperties = {
  links: Link[];
  brand: string;
};

function Header(properties: HeaderProperties): React.ReactNode {
  let linkItems: React.ReactNode[] = [];

  for (let iterador = 0; iterador < properties.links.length; iterador++) {
    const link = properties.links[iterador];

    linkItems = [
      ...linkItems,
      <a
        key={iterador}
        href={link.url}
        className="child-column"
        style={{ fontSize: "15px", textDecoration: "none", color: "black" }}
      >
        {link.name}
      </a>,
    ];
  }

  return (
    <div id="header" className="child-row parent-row">
      <div
        className="child-column parent-row"
        style={{ gap: "50px", alignItems: "center" }}
      >
        <div
          className="child-column"
          style={{ fontSize: "35px", fontStyle: "italic" }}
        >
          {properties.brand}
        </div>
        <div
          id="links"
          className="child-column parent-row"
          style={{ gap: "25px" }}
        >
          {linkItems}
        </div>
      </div>
      <div className="child-column flex-grow"></div>
      <div
        className="child-column"
        style={{
          padding: "13px 25px",
          border: "1px solid black",
          borderRadius: "100px",
        }}
      >
        Menú
      </div>
    </div>
  );
}

export default Header;
