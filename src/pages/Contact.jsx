export default function Contact() {
    return (
        <>
            <section>
                <div className="mx-auto md:w-3/6 mt-32 md:p-0 p-4">
                    <h3 className="md:text-xl text-2xl font-semibold">
                        Contact Me
                    </h3>
                    <span className="text-xs text-gray-600">
                        Hi there, contact me to ask about anything you have in mind.
                    </span>

                    <div className=" mt-6">
                        <form action="">
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        for="first_name">
                                        First name
                                    </label>
                                    <input className="appearance-none block w-full border border-gray-400
                                    rounded text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" placeholder="Enter your first name" id="first_name" />
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="last_name">
                                        Last name
                                    </label>
                                    <input className="appearance-none block w-full text-gray-700 border 
                                    border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your last name" id="last_name" />
                                </div>
                            </div>
                            <div className="w-full mb-3 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-email">
                                    Email
                                </label>
                                <input className="appearance-none block w-full border border-gray-400
                                    rounded text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="yourname@email.com" id="email" />

                            </div>
                            <div className="w-full">
                                <div className="mb-3 xl:w-full">
                                    <label for="message" className="form-label inline-block
                                    mb-2 text-gray-700 text-xs font-semibold">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control block w-full px-3 py-1.5 font-normal text-gray-700
                                        bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                        focus:text-gray-700 text-sm focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="message"
                                        rows="4"
                                        placeholder="Send me a message and I'll reply as soon as possible..."
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div>
                                    <label htmlFor="checkbox"></label>
                                    <input type="checkbox" name="checkbox" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300
                                    dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <p className="text-gray-500 text-sm">
                                    You agree to providing your data to {name} who may contact you.
                                </p>
                            </div>
                            <button type="button" className="btn w-full p-2 mt-4 text-white font-semibold
                            bg-blue-600 rounded " 
                            id="btn__submit">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}