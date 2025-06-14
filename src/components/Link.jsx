
function Link({ texto, href, openInNewTab }) {
  return (
    <li className="menu-item">
      <a
        title={texto}
        className="menu-link"
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
      >
        {texto}
      </a>
    </li>
  );
}

export default Link