import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchbarProps {
  setUsername: React.Dispatch<string>;
  isNoResults: boolean;
}
const Searchbar = ({ setUsername, isNoResults }: SearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(searchTerm);
    setSearchTerm("");
  };
  return (
    <form className="max-w-full relative" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Github username..."
        className="w-full h-14 rounded-lg px-10 text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isNoResults && (
        <p className="absolute top-5 right-24 text-red-500 font-bold text-sm">
          No results
        </p>
      )}
      <button
        type="submit"
        className="h-12 w-20 bg-deep-blue rounded-lg text-white absolute top-1 right-3"
      >
        Search
      </button>
      <SearchIcon />
    </form>
  );
};
export default Searchbar;
