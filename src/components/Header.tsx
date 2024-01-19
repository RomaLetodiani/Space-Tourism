import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex gap-10">
      <p>header</p>
      <Link to="/space-tourism/Home">Home</Link>
      <Link to="/space-tourism/destination">destination</Link>
      <Link to="/space-tourism/crew">crew</Link>
      <Link to="/space-tourism/technology">tech</Link>
    </div>
  );
};

export default Header;
