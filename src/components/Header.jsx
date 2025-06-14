import Link from "./Link";

function Header() {
  return (
    <nav>
      <ul>
        <Link 
          texto="Blog" 
          href="https://adalab.es/blog/" 
          openInNewTab={true} 
        />
        <Link 
          texto="Contacto" 
          href="https://adalab.es/contacto/" 
          openInNewTab={false} 
        />
      </ul>
    </nav>
  );
}

export default Header;