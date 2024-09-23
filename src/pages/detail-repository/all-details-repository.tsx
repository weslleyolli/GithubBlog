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
      <main className='w-[864px] h-2/3 m-auto relative bg-base flex flex-col'>
        <div className='bg-baseCard w-full h-52 absolute -top-24 rounded-[10px] flex flex-col gap-8 p-8 '>
          <div className="flex w-full justify-between">
            <Link to={`/profile/${username}`} className="flex">
              <ChevronLeft className='text-brandBlue size-5' />
              <span className='font-bold text-sm text-brandBlue mt-[1px]'>BACK</span>
            </Link>
            <a href={repository.html_url} className="flex gap-1">
              <span className='font-bold text-sm text-brandBlue mt-0.5'>SEE ON GITHUB</span>
              <ExternalLink className='text-brandBlue size-5' />
            </a>
          </div>
          <h1 className='text-baseTitle font-bold text-2xl'>{repository.name}</h1>
          <div className="flex gap-8">
            {repository.owner && (
              <div className='text-baseText flex items-center gap-2'>
                <img src="/Github.png" alt="" className='size-5' />
                <span>{repository.owner.login}</span>
              </div>
            )}
            <div className='text-baseText flex items-center gap-2'>
              <img src="/Calendar.png" alt="" className='size-5' />
              <span>{calculateDaysAgo(repository.updated_at)} days ago</span>
            </div>
            <div className='text-baseText flex items-center gap-2'>
              <img src="/Comments.png" alt="" className='size-5' />
              <span>5 comments</span>
            </div>
          </div>
        </div>
        <div className="mt-44">
          <span className="text-baseText">
            {repository.description || 'Without description.'}
          </span>
        </div>
      </main>
    </div>
  );
}
