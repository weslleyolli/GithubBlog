
import { ExternalLink } from 'lucide-react'
import './Styles.css'

export function App() {
  return (
    <div className='w-screen h-screen bg-base'>
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
        <div>

        </div>
      </main>
    </div>
  )
}
