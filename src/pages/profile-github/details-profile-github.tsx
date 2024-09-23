import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Header } from '../../components/header';
import { SearchForm } from '../../components/seachForm';
import { LogoutButton } from '../../components/button-logout';

interface RepositoryProps {
  id: number;
  name: string;
  updated_at: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
  };
}

interface UserProps {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  login: string;
  company: string;
  public_repos: number;
}

export function DetailsProfileGithub() {
  const { username } = useParams<{ username: string }>(); // Recebe o username da URL
  const [user, setUser] = useState<UserProps | null>(null);
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepositories(data));
    }
  }, [username]);

  return (
    <div className="w-screen min-h-screen max-w-full pb-10">
      <Header />

      <main className="w-full md:w-[864px] h-2/3 mx-auto relative bg-base flex flex-col p-4">
        {user && (
          <div className="bg-baseCard w-full h-auto md:h-52 relative md:absolute -top-0 pt-8 pb-8 md:pt-0 md:pb-0 md:-top-24 rounded-[10px] flex flex-col md:flex-row items-center gap-4 md:gap-8 px-4 md:px-8">

            {/* Divs GITHUB e LOGOUT no topo no mobile (lado a lado com o máximo de espaçamento) */}
            <div className="flex flex-row justify-between items-center w-full md:hidden">
              <a href={`https://github.com/${user.login}`}>
                <div className="flex gap-2 items-center hover:scale-105 transform transition-transform duration-200 cursor-pointer">
                  <span className="font-bold text-sm text-brandBlue">GITHUB</span>
                  <ExternalLink className="text-brandBlue size-5 mb-1" />
                </div>
              </a>
              <div className="flex items-center hover:scale-105 transform transition-transform duration-200 cursor-pointer">
                <LogoutButton />
              </div>
            </div>

            {/* Imagem de perfil */}
            <div className="w-20 h-20 md:w-36 md:h-36">
              <img className="rounded-lg" src={user.avatar_url} alt={user.name} />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row justify-between w-full md:w-[612px]">
                <h1 className="text-baseTitle font-bold text-lg md:text-2xl">{user.name}</h1>

                {/* Divs GITHUB e LOGOUT no desktop */}
                <div className="hidden md:flex gap-4 items-center">
                  <a href={`https://github.com/${user.login}`}>
                    <div className="flex gap-2 items-center hover:scale-105 transform transition-transform duration-200 cursor-pointer">
                      <span className="font-bold text-sm text-brandBlue">GITHUB</span>
                      <ExternalLink className="text-brandBlue size-5 mb-1" />
                    </div>
                  </a>
                  <div className="flex items-center hover:scale-105 transform transition-transform duration-200 cursor-pointer">
                    <LogoutButton />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-baseText text-sm md:text-base">{user.bio}</span>
              </div>
              <div className="flex flex-row flex-wrap gap-2 items-center w-full md:gap-6">
                <div className="text-baseText flex items-center gap-1 text-xs md:text-base">
                  <img src="/Github.png" alt="Github" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{user.login}</span>
                </div>
                <div className="text-baseText flex items-center gap-1 text-xs md:text-base">
                  <img src="/Company.png" alt="Company" className="w-4 h-4 md:w-5 md:h-5" />
                  {user.company === null ? <span>No company</span> : <span>{user.company}</span>}
                </div>
                <div className="text-baseText flex items-center gap-1 text-xs md:text-base">
                  <img src="/Users.png" alt="Followers" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{`${user.followers} followers`}</span>
                </div>
              </div>

            </div>
          </div>
        )}
        <div className="w-full mt-5 md:mt-44 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-baseTitle font-bold text-xl md:text-2xl">Publications</h1>
            <span className="text-baseText">{user?.public_repos} Publications</span>
          </div>
          <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex flex-wrap gap-1 md:gap-8">
          {repositories.map((repository) => (
            <a
              href={`/repository/${repository.owner.login}/${repository.name}`}
              key={repository.id}
              className="bg-baseCard w-full md:w-[48%] h-auto md:h-64 mt-6 rounded-[10px] p-4 md:p-8 flex flex-col gap-4 md:gap-6"
            >
              <div className="flex gap-1">
                <h1 className="text-baseTitle font-bold text-lg md:text-xl w-full md:w-[70%]">{repository.name}</h1>
                <span className="text-baseText text-xs md:text-sm mt-1">
                  {new Date(repository.updated_at).toLocaleDateString()}
                </span>
              </div>
              {repository.description === null ? (
                <span className="line-clamp-4 text-baseText">Without description</span>
              ) : (
                <span className="line-clamp-4 text-baseText">{repository.description}</span>
              )}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

