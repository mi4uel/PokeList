import React from "react";
const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div>
      <div className="container mx-auto flex justify-center w-[90%] lg:w-1/2 relative mt-2">
        <input placeholder="Buscar pokemon..." onChange={onChange} className="w-full px-4 py-2 rounded-full border border-slate-400"/>
        <button onClick={onClick} className="absolute top-50 bg-yellow-400 border border-cyan-600  text-slate-900 uppercase font-bold border-4 px-4 h-full rounded-full right-0 text-sm lg:text-lg">Buscar</button>
      </div>
    </div>
        
  );
};

export default Searchbar;