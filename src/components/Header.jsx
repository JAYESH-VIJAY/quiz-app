import PropTypes from "prop-types";
function Header(type) {
  
  return (
    <header className={`header ${type}`}>
      <h1 className="title">Quizzfinity</h1>
    </header>
  );
}

Header.propTypes = {
  type: PropTypes.string,
};
export default Header;
