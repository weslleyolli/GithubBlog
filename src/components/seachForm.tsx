import { useEffect } from "react";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  useEffect(() => {
    if (searchQuery.trim() === '') {
      fetch("https://api.github.com/users/weslleyolli/repos")
        .then(response => response.json())
        .then(data => console.log(data));
      return;
    }

    const handleSearch = () => {
      fetch(`https://api.github.com/search/repositories?q=${searchQuery}+user:weslleyolli`)
        .then(response => response.json())
        .then(data => console.log(data.items))
        .catch(error => console.error('Error fetching repositories:', error));
    };

    const debounce = setTimeout(handleSearch, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search content"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-baseInput w-full h-12 px-6 text-baseText placeholder:opacity-60 focus:outline-none"
      />
    </div>
  );
}
