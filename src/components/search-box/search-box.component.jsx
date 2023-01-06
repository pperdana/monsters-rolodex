import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangehandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangehandler}
    />
  );
};

export default SearchBox;
