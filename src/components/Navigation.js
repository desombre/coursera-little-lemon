import '../App.css';

function Navigation() {

  return (
    <nav>
      <ul>
        <li onClick={() => window.location.href =("/")}>
          Home
        </li>
        <li onClick={() => window.location.href =("/about")}>
          About
        </li>
        <li onClick={() => window.location.href =("/menu")}>
          Menu
        </li>
        <li onClick={() => window.location.href =("/book")}>
          Book
        </li>
      </ul>

    </nav>
   
  );
}

export default Navigation;
