import Profile from '../assets/profile.jpeg'
import Slack from '../assets/slack.png';
import Github from '../assets/github.png';
import Footer from '../component/Footer';

export default function Landing() {
    return (
        <>
        <section className="">
            <div className="mt-12">
                <img src={Profile} alt="profile__image" className="h-28 rounded-full mx-auto" />
                <h3 className="text-center mt-2 text-md font-semibold">
                    Nnamdi Azubuike
                </h3>
            </div>

            <div className="mt-12 text-sm">
                <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                    <span className="cursor-pointer" onClick={() => window.location.href = ""}>
                        Twitter Link
                    </span>
                </div>
                <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://training.zuri.team/"}>
                        Zuri Team
                    </span>
                </div>
                <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://books.zuri.team/"}>
                        Zuri Books
                    </span>
                </div>
                <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E"}>
                        Python Books
                    </span>
                </div>
                <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-6 ">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://background.zuri.team/"}>
                        Background Check for Coders
                    </span>
                </div>
                <div className="bg-gray-300 p-4 md:w-3/6 w-5/6 rounded-md mx-auto text-center mb-2">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://books.zuri.team/design-rules"}>
                        Design Books
                    </span>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <img src={Slack} alt="slack__image" className="h-6" />
                    <img src={Github} alt="github__image" className="h-6" />
                </div>

            </div>
            <div className="w-5/6 mx-auto mt-20">
            <hr  className="text-center"/>
            </div>
            <Footer />
        </section>
        </>
    )
}