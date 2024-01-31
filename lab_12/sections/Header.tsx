import styles from "./Header.module.css";

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
      <div className={`child-column parent-row ${styles.leftColumn}`}>
        <div className={`child-column ${styles.brand}`}>{properties.brand}</div>
        <div id="links" className={`child-column parent-row ${styles.links}`}>
          {linkItems}
        </div>
      </div>
      <div className="child-column flex-grow"></div>
      <div className={`child-column ${styles.menu}`}>Menú</div>
    </div>
  );
}

export default Header;
