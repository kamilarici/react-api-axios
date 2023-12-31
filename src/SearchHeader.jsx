import { useState } from "react";

const SearchHeader = ({ search }) => {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // debugger;
    //! childdan parente atılan değer
    search(valueInput);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input
          type="text"
          value={valueInput}
          onChange={handleChange}
          placeholder="car,child,pen,home,hour...vb"
        />
        {/* <div>{valueInput}</div> */}
      </form>
    </div>
  );
};

export default SearchHeader;
