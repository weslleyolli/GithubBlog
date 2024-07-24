import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';


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
  name: string
  bio: string
  followers: number
  login: string
  company: string
}

export function DetailsProfileGithub() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/weslleyolli")
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  useEffect(() => {
    fetch("https://api.github.com/users/weslleyolli/repos")
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  const calculateDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className='w-screen min-h-screen max-w-full pb-10'>
      <Header />
      <main className='w-[864px] h-2/3 m-auto relative bg-base flex flex-col'>
        {user && (
          <div className='bg-baseCard w-full h-52 absolute -top-24 rounded-[10px] flex items-center gap-8 px-8'>
            <div className='w-36 h-36'>
              <img className='rounded-lg' src={user.avatar_url} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between w-[612px]'>
                <h1 className='text-baseTitle font-bold text-2xl'>{user.name}</h1>
                <a href="https://github.com/weslleyolli" className='flex gap-2 items-center'>
                  <span className='font-bold text-sm text-brandBlue'>GITHUB</span>
                  <ExternalLink className='text-brandBlue size-5 mb-1' />
                </a>
              </div>
              <div>
                <span className='text-baseText'>{user.bio}</span>
              </div>
              <div className='flex gap-6 h-10 items-end'>
                <div className='text-baseText flex items-center gap-2'>
                  <img src="/Github.png" alt="" className='size-5' />
                  <span>{user.login}</span>
                </div>
                <div className='text-baseText flex items-center gap-2'>
                  <img src="/Company.png" alt="" className='size-5' />
                  {user.company === null ? (
                    <span>No company</span>
                  ): <span>{user.company}</span>}
                </div>
                <div className='text-baseText flex items-center gap-2'>
                  <img src="/Users.png" alt="" className='size-5' />
                  <span>{`${user.followers} followers`}</span>
                </div>
              </div>
            </div>
          </div>
        )
        }


        <div className='w-full mt-44 flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-baseTitle font-bold text-2xl'>Publications</h1>
            <span className='text-baseText'>6 Publications</span>
          </div>
          <div>
            <input
              type="text"
              placeholder='Search content'
              className='bg-baseInput w-full h-12 px-6 text-baseText placeholder:opacity-60'
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-8'>
          {repositories.map(repository => (
              <Link to={`/repository/${repository.owner.login}/${repository.name}`} key={repository.id} className='bg-baseCard w-[48%] h-64 mt-10 rounded-[10px] p-8 flex flex-col gap-6'>
                <div className='flex gap-1'>
                  <h1 className='text-baseTitle font-bold text-xl w-[70%]'>{repository.name}</h1>
                  <span className='text-baseText text-sm mt-1'>{calculateDaysAgo(repository.updated_at)} dias atrás</span>
                </div>
                {repository.description === null ? <span className='line-clamp-4 text-baseText'>Without description</span>: <span className='line-clamp-4 text-baseText'>{repository.description}</span> }
              </Link>
            )
          )}
        </div>
      </main>
    </div>
  )
}