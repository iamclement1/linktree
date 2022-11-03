export default function Contact() {
    return (
        <>
            <section>
                <div className="mx-auto md:w-3/6 mt-32 md:p-0 p-4">
                    <h3 className="md:text-xl font-semibold">
                        Contact Me
                    </h3>
                    <span className="text-xs text-gray-600">
                        Hi there, contact me to ask about anything you have in mind.
                    </span>

                    <div className=" mt-6">
                        <form action="">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-first-name">
                                        First name
                                    </label>
                                    <input class="appearance-none block w-full border border-gray-400
                                    rounded text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your first name" />
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last name
                                    </label>
                                    <input class="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your last name" />
                                </div>
                            </div>
                            <div class="w-full mb-6 md:mb-0">
                                    <label class="block tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-email">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full border border-gray-400
                                    rounded text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="yourname@email.com" />
                                    
                                </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}