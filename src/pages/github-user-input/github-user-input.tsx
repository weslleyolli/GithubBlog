import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';

export function GitHubUserInput() {
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSearch = async () => {
        setError(null);
      
        if (!username.trim()) {
          setError('Please enter a GitHub username.');
          return;
        }
      
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
      
          if (response.status === 404) {
            setError('User does not exist.');
          } else if (!response.ok) {
            throw new Error('Something went wrong.');
          } else {
            navigate(`/profile/${username}`);
          }
        } catch (err) {
          setError('Something went wrong while fetching the user.');
        }
      };

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="w-full">
                <Header />
            </div>
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-baseTitle font-bold text-xl md:text-3xl mb-6">Enter your GitHub username</h1>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                    className="bg-baseInput w-4/5 md:w-2/4 h-12 px-6 text-baseText placeholder:opacity-60 focus:outline-none mt-4"
                />
                <button
                    onClick={handleSearch}
                    className="bg-baseCard text-white p-2 rounded mt-6 w-32 hover:bg-opacity-80 transition-colors duration-200"
                >
                    Search
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}
