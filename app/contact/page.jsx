import Link from "next/link";
import { contactLinks } from "../constants";
import Image from "next/image";

const Contact = () => {
  return (
    <div class="bg-gray-100" id="contact">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-16 overflow-x-hidden">
            <h2 class="text-5xl font-bold px-4 md:px-0 text-center">
                Contact
            </h2>
            <div>
              <h4 class="mt-12 text-3xl font-semibold text-blue-500">
                  Connect with me
              </h4>
              <p class="mt-4 text-xl text-justify text-gray-800">
                If you want to know more about me or my work, or if you would just
                <br />
                like to say hello, send me a message. I'd love to hear from you.
              </p>
            </div>
            <div class="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
                <div class="w-full md:pr-8">
                    <form>
                        <div class="my-6">
                            <label 
                                htmlFor="name"
                                class="block mb-2 text-lg font-medium text-gray-800"
                            >
                                Name
                            </label>
                            <input 
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                                class="bg-gray-200 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus-border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
                        <div className="mb-4">
                            <label 
                                htmlFor="email"
                                class="block mb-2 text-lg font-medium text-gray-800"
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                id=""
                                placeholder="Enter your email"
                                required
                                class="bg-gray-200 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus-border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-4">
                            <label 
                                htmlFor="message"
                                class="block mb-2 text-lg font-medium text-gray-800"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                required
                                class="bg-gray-200 border border-gray-300 text-gray-800 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            />
                        </div>
                        <div class="flex justify-between">
                            <div class="underline">
                                <Link href="mailto:ezeiruemma5t@gmail.com">
                                    Send me an email directly
                                </Link>
                            </div>
                            <button class="bg-blue-500 text-white px-4 py-2 w-40 rounded-md hover:bg-blue-400">
                                <Link href="mailto:ezeiruemma5t@gmail.com">
                                    Submit
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="w-full flex flex-col md:items-end mt-12 md:mt-6">
                    <h1 class="text-3xl font-bold">
                        Email
                    </h1>
                    <Link 
                        href="mailto:ezeiruemma5t@gmail.com"
                        class="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
                    >
                        ezeiruemma5t@gmail.com
                    </Link>
                    <h1 class="text-3xl font-bold">
                        Address
                    </h1>
                    <Link 
                        href="#"
                        class="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
                    >
                        Lagos State, Nigeria
                    </Link>
                    <h1 class="text-3xl font-bold">
                        Social
                    </h1>
                    <div class="flex md:justify-start">
                        {contactLinks.map((el, index) => (
                          <Link 
                            key={index} 
                            href={el.link} 
                            className="mr-5 cursor-pointer mt-8 hover:scale-125"
                          >
                            <Image
                              alt={el.name || "Contact Link"} 
                              src={el.url}
                              width={40} 
                              height={40}
                            />
                          </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div class="flex justify-center md:mt-20">
                <h1 class="text-xl">
                    Made with love by Emma Ezeiru
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Contact