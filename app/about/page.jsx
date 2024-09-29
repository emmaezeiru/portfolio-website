import Link from "next/link"
import { techStack } from "../constants"
import Image from "next/image"

const About = () => {
  return (
    <div class="bg-white" id="about">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
            <h2 class="text-5xl font-bold px-4 md:px-0 text-center">
                About Me
            </h2>
            <div>
                <h4 class="mt-12 text-3xl font-semibold text-blue-500">
                    A bit about me
                </h4>
                <p class="mt-4 text-xl text-justify text-gray-800">
                    I'm a backend developer and FullStack Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.
                </p>
            </div>
            <div>
                <h4 class="mt-12 text-3xl font-semibold text-blue-500">
                    Technologies and Tools
                </h4>
                <p class="mt-4 text-xl text-justify text-gray-800">
                    Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
                </p>
            </div>
            <div class="flex flex-wrap gap-6 mt-8 justify-center">
              {techStack.map((el, index) => (
                <div
                  key={index}
                  class="flex flex-col items-center justify-center bg-gray-50 shadow-md rounded-lg p-4 w-36 h-36"
                >
                  <Image
                    alt={el.name || "Tech Icon"}
                    src={el.link}
                    width={40}
                    height={40}
                    class="mb-2"
                  />
                  <span class="text-sm font-medium text-gray-700">{el.name}</span>
                </div>
              ))}
              {/* Animated version.. to make it bounce
              <div className="flex flex-wrap gap-6 mt-8 justify-center"> 
                {techStack.map((el, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 w-36 h-36 hover:animate-bounce"
                  >
                    <Image
                      alt={el.name || "Tech Icon"}
                      src={el.link}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-sm font-medium text-gray-700">{el.name}</span>
                  </div>
                ))}
              </div>
              */}

            </div>
        </div>
    </div>
  )
}

export default About