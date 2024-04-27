import SearchIcon from "./icons/SearchIcon";

type Props = {};
const Searchbar = (props: Props) => {
  return (
    <div className="max-w-full relative">
      <input
        type="text"
        placeholder="Search Github username..."
        className="w-full h-14 rounded-lg text-center"
      />
      <button className="h-12 w-20 bg-deep-blue rounded-lg text-white absolute top-1 right-3">
        Search
      </button>
      <SearchIcon />
    </div>
  );
};
export default Searchbar;
