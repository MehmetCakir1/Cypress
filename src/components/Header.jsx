import React from "react";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="text-center py-5">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-slate-300 w-full max-w-[20rem] p-1"
        placeholder="Type here"
      />
      <h1 className="search-term">{searchTerm}</h1>
    </header>

  );
};

export default Header;
