import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function GitHubUserInput() {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim() === '') {
      setError('Please enter a GitHub username.');
      return;
    }

    // Redireciona para a página de detalhes, passando o nome do usuário
    navigate(`/profile/${username}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Enter your GitHub username</h1>
      <input
        type="text"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
