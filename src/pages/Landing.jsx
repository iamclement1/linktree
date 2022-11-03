import Profile from '../assets/profile.jpeg'
import Slack from '../assets/slack.png';
import Github from '../assets/github.png';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <>
            <section className="">
                <div className="mt-12">
                    <img src={Profile} alt="profile__image" className="h-28 rounded-full mx-auto"
                    id="profile__img" />
                    <h3 className="text-center mt-2 text-md font-semibold">
                        Nnamdi Azubuike
                    </h3>
                </div>

                <div className="mt-12 text-sm">
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6"
                    id="twitter">
                        <a href="https://twitter.com/_iamclement_" id="twitter" className="cursor-pointer">
                            Twitter Link
                        </a>
                    </div>
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                        <a href="https://training.zuri.team/" type="button" id="" className="cursor-pointer ">
                            Zuri Team
                        </a>
                    </div>
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                        <a href="https://books.zuri.team/" id="books" type="button" className="cursor-pointer ">
                            Zuri Books
                        </a>
                    </div>
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                        <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E" type="button" id="book__python" className="cursor-pointer ">
                            Python Books
                        </a>
                    </div>
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6 ">
                        <a href="https://background.zuri.team/" type="button" id="pitch" className="cursor-pointer ">
                            Background Check for Coders
                        </a>
                    </div>
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                        <a href="https://books.zuri.team/design-rules" type="button" id="book__design" className="cursor-pointer">
                            Design Books
                        </a>
                    </div>
                    <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-2">
                        <a href="/contact" type="button" id="contact">
                            <span className="cursor-pointer">
                                Contact
                            </span>
                        </a>
                    </div>
                    <div className="flex justify-center space-x-4 mt-8 mb-6">
                        <img src={Slack} alt="slack__image" className="h-6" id="slack"/> 
                        <p className="hidden" id="slack">
                            Clement
                        </p>
                        <img src={Github} alt="github__image" className="h-6 cursor-pointer" />
                    </div>

                </div>
            </section>
        </>
    )
}