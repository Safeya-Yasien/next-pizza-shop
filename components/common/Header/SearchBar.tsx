import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  // console.log("SearchBar render");

  return (
    <form className="relative ">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

      <Input
        type="text"
        placeholder="Search pizzas..."
        className="pl-10 w-full lg:w-80 h-12 rounded-full border-pizza-orange focus-visible:border-pizza-orange-hover focus-visible:ring-1  focus-visible:ring-pizza-orange-hover"
      />
    </form>
  );
};

export default SearchBar;
