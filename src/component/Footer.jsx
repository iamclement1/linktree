import Zuri from '../assets/zuri.png';
import I4g from '../assets/I4G.png';
export default function Footer() {
    return (
        <>
        
        <footer className="md:flex justify-between w-5/6 mx-auto mt-6">
            
            <img src={Zuri} alt="zuri__logo" className="h-4" />
            <span className="text-sm text-gray-500">
                HNG Internship 9 Frontend Task
            </span>
            <img src={I4g} alt="i4g__logo" className="h-4" />
        </footer>
        </>
    )
}