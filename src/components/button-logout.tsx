import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LogoutButton() {
    return (
        <div>
            <Link to="/" className='flex gap-2 items-center'>
                <span className="font-bold text-sm text-brandBlue">LOGOUT</span>
                <button>
                    <LogOut className='text-brandBlue size-5 mb-1' />
                </button>
            </Link>
        </div>
    );
}