
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div>

            <div className='flex flex-col items-center justify-center min-h-screen gap-5'>
                <video className='rounded-full  w-[15%] h-[15%] ' src="/public/animation_lnxag5g0.mp4" autoPlay loop></video>
                <h4 className='text-lg'> Back to <Link className='text-lg font-semibold text-violet-500' to={'/'}>HOME</Link></h4>
            </div>

        </div>
    );
};

export default ErrorElement;
