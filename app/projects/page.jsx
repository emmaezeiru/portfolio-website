import Image from "next/image"
import { techStack } from "../constants"

const Projects = () => {
  return (
    <div class="bg-white" id="project">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 ">
            <h2 class="text-5xl font-bold px-4 md:px-0 text-center">
                Projects
            </h2>
            <div>
                <h4 class="mt-12 text-3xl font-semibold text-blue-500">
                    What i built
                </h4>
            </div>
            
            {/*
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
            </div>
            */}
        </div>
    </div>
  )
}

export default Projects