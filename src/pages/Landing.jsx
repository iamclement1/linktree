import Profile from '../assets/profile.jpeg'
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
                <div className="bg-gray-300 p-4 w-3/6 mx-auto text-center mb-6">
                    <span className="cursor-pointer" onClick={() => window.location.href = ""}>
                        Twitter Link
                    </span>
                </div>
                <div className="bg-gray-300 p-4 w-3/6 mx-auto text-center mb-6">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://training.zuri.team/"}>
                        Zuri Team
                    </span>
                </div>
                <div className="bg-gray-300 p-4 w-3/6 mx-auto text-center mb-6">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://books.zuri.team/"}>
                        Zuri Books
                    </span>
                </div>
                <div className="bg-gray-300 p-4 w-3/6 mx-auto text-center mb-6">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E"}>
                        Python Books
                    </span>
                </div>
                <div className="bg-gray-300 p-4 w-3/6 mx-auto text-center mb-6 ">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://background.zuri.team/"}>
                        Background Check for Coders
                    </span>
                </div>
                <div className="bg-gray-300 p-4 w-3/6 mx-auto text-center">
                    <span className="cursor-pointer " onClick={() => window.location.href = "https://books.zuri.team/design-rules"}>
                        Design Books
                    </span>
                </div>
            </div>
        </section>
        </>
    )
}