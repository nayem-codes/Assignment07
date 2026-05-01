import { RiHome2Line } from "react-icons/ri";
import { Link } from "react-router";


const NotFoundPage = () => {
    return (
        <div className='text-center mt-40 space-y-1.5'>
            <h1 className='font-extrabold text-6xl text-green-900'>404</h1>
            <p className='font-bold text-xl'>Page Not Found</p>
            <p className='text-gray-500'>Looks like this friendship link is broke. The page <br></br> you're looking for doesn't exist or has been moved.</p>
            <Link to="/">
                <button className='btn bg-green-900 text-white'><RiHome2Line />Go To Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;