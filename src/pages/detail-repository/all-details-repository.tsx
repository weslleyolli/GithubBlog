import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from '../../components/header';
import { ChevronLeft, ExternalLink } from 'lucide-react';

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

export function AllDetailsRepository() {
  const { username, repoName } = useParams<{ username: string; repoName: string }>();
  const [repository, setRepository] = useState<RepositoryProps | null>(null);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setRepository(data);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchRepository();
  }, [username, repoName]);

  if (!repository) {
    return <div>Loading...</div>;
  }

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
      <main className='w-full max-w-[864px] h-auto md:h-2/3 mx-auto relative bg-base flex flex-col p-4 md:p-0'>
        {/* Removendo o absolute no mobile, mantendo no desktop */}
        <div className='bg-baseCard w-full h-auto md:h-52 rounded-[10px] flex flex-col gap-4 md:gap-8 p-4 md:p-8 md:absolute md:-top-24'>
          <div className="flex w-full justify-between">
            <Link to={`/profile/${username}`} className="flex items-center gap-2">
              <ChevronLeft className='text-brandBlue size-5' />
              <span className='font-bold text-sm text-brandBlue'>BACK</span>
            </Link>
            <a href={repository.html_url} className="flex gap-2 items-center">
              <span className='font-bold text-sm text-brandBlue'>SEE ON GITHUB</span>
              <ExternalLink className='text-brandBlue size-5' />
            </a>
          </div>
          <h1 className='text-baseTitle font-bold text-xl md:text-2xl'>{repository.name}</h1>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {repository.owner && (
              <div className='text-baseText flex items-center gap-2'>
                <img src="/Github.png" alt="" className='w-4 h-4 md:w-5 md:h-5' />
                <span>{repository.owner.login}</span>
              </div>
            )}
            <div className='text-baseText flex items-center gap-2'>
              <img src="/Calendar.png" alt="" className='w-4 h-4 md:w-5 md:h-5' />
              <span>{calculateDaysAgo(repository.updated_at)} days ago</span>
            </div>
            <div className='text-baseText flex items-center gap-2'>
              <img src="/Comments.png" alt="" className='w-4 h-4 md:w-5 md:h-5' />
              <span>5 comments</span>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-44">
          <span className="text-baseText text-sm md:text-base">
            {repository.description || 'Without description.'}
          </span>
        </div>
      </main>
    </div>
  );
}