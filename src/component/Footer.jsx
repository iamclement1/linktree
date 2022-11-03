import Zuri from '../assets/zuri.png';
import I4g from '../assets/I4G.png';
export default function Footer() {
    return (
        <>
            <footer>
                <div className="w-5/6 mx-auto mt-20">
                    <hr className="text-center" />
                </div>
                <section className="md:flex justify-between w-5/6 mx-auto mt-6 md:px-0 lg:mb-0 ">
                    <img src={Zuri} alt="zuri__logo" className="h-4 md:mb-0 mb-3" />
                    <span className="md:text-sm text-xs text-gray-500 md:mb-0 lg:mb-0 mb-3">
                        HNG Internship 9 Frontend Task
                    </span>
                    <img src={I4g} alt="i4g__logo" className="h-4 md:mt-0 mt-3" />
                </section>
            </footer>
        </>
    )
}