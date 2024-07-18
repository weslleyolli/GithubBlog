import { ExternalLink } from 'lucide-react'
export function DetailsProfileGithub() {
    return (
        <div className='w-screen min-h-screen max-w-full pb-10'>
        <header className='h-1/3 w-full flex justify-between'>
          <img src="/Cover.png" alt="" className='flex-1' />
        </header>
        <main className='w-[864px] h-2/3 m-auto relative bg-base flex flex-col'>
          <div className='bg-baseCard w-full h-52 absolute -top-24 rounded-[10px] flex items-center gap-8 px-8'>
            <div>
              <img src="/avatar.png" alt="" />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between w-[612px]'>
                <h1 className='text-baseTitle font-bold text-2xl'>Cameron Williamson</h1>
                <a href="#" className='flex gap-2 items-center'>
                  <span className='font-bold text-sm text-brandBlue'>GITHUB</span>
                  <ExternalLink className='text-brandBlue size-5 mb-1' />
                </a>
              </div>
              <div>
                <span className='text-baseText'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam <br /> dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
              </div>
              <div className='flex gap-6 h-10 items-end'>
                <div className='text-baseText flex items-center gap-2'>
                  <img src="/Github.png" alt="" className='size-5' />
                  <span>cameronwll</span>
                </div>
                <div className='text-baseText flex items-center gap-2'>
                  <img src="/Company.png" alt="" className='size-5' />
                  <span>Company</span>
                </div>
                <div className='text-baseText flex items-center gap-2'>
                  <img src="/Users.png" alt="" className='size-5' />
                  <span>32 Followers</span>
                </div>
              </div>
            </div>
          </div>
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
            <div className='bg-baseCard w-[48%] h-64 mt-10 rounded-[10px] p-8 flex flex-col gap-6'>
              <div className='flex gap-2'>
                <h1 className='text-baseTitle font-bold text-xl w-3/4'>JavaScript data types and data structures</h1>
                <span className='text-baseText text-sm mt-1'>1 day ago</span>
              </div>
              <span className='line-clamp-4 text-baseText'>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
  
                Dynamic typing
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
  
                let foo = 42; // foo is now a number
                foo = 'bar'; // foo is now a string
                foo = true; // foo is now a boolean</span>
            </div>
            <div className='bg-baseCard w-[48%] h-64 mt-10 rounded-[10px] p-8 flex flex-col gap-6'>
              <div className='flex gap-2'>
                <h1 className='text-baseTitle font-bold text-xl w-3/4'>JavaScript data types and data structures</h1>
                <span className='text-baseText text-sm mt-1'>1 day ago</span>
              </div>
              <span className='line-clamp-4 text-baseText'>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
  
                Dynamic typing
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
  
                let foo = 42; // foo is now a number
                foo = 'bar'; // foo is now a string
                foo = true; // foo is now a boolean</span>
            </div>
            <div className='bg-baseCard w-[45%] h-64 rounded-[10px] p-8 flex flex-col gap-6'>
              <div className='flex gap-2'>
                <h1 className='text-baseTitle font-bold text-xl w-3/4'>JavaScript data types and data structures</h1>
                <span className='text-baseText text-sm mt-1'>1 day ago</span>
              </div>
              <span className='line-clamp-4 text-baseText'>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
  
                Dynamic typing
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
  
                let foo = 42; // foo is now a number
                foo = 'bar'; // foo is now a string
                foo = true; // foo is now a boolean</span>
            </div>
          </div>
        </main>
      </div>
    )
}