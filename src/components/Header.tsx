import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex gap-10">
      <p>header</p>
      <Link to="/">Home</Link>
      <Link to="/destination">destination</Link>
      <Link to="/crew">crew</Link>
      <Link to="/technology">tech</Link>
    </div>
  );
};

export default Header;
