import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchbarProps {
  setUsername: React.Dispatch<string>;
  isNoResults: boolean;
}

const Searchbar = ({ setUsername, isNoResults }: SearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(searchTerm);
  };

  return (
    <form
      className="max-w-full relative dark:text-white"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchInput" className="sr-only">
        Search Github username
      </label>
      <div className="relative">
        <input
          id="searchInput"
          type="text"
          placeholder="Search Github username..."
          className="w-full h-14 rounded-lg px-10 text-sm dark:bg-shaded-dark-blue"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inputRef}
        />
      </div>
      {isNoResults && (
        <p className="absolute top-5 right-28 text-red-500 font-bold text-sm">
          No results
        </p>
      )}
      <button
        type="submit"
        className={`h-12 bg-deep-blue rounded-lg text-white px-5 absolute top-1 right-3 hover:opacity-30 dark:hover:opacity-70 ${
          isNoResults ? "opacity-30 dark:opacity-70" : ""
        }`}
      >
        Search
      </button>
      <SearchIcon />
    </form>
  );
};

export default Searchbar;
