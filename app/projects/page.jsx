import Image from "next/image"
import { projectCard } from "../components/card"
import Link from "next/link"

const Projects = () => {
  return (
    <div class="bg-white" id="projects">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 ">
            <h2 class="text-5xl font-bold px-4 md:px-0 text-center">
                Projects
            </h2>
            <div>
                <h4 class="mt-12 text-3xl font-semibold text-blue-500">
                    What i built
                </h4>
            </div>
            
            
            <div class="mt-8 flex justify-between items-stretch flex-wrap">
              {projectCard.map((el, index) => (
                <div
                  key={index}
                  class="max-w-xl bg-gray-200 rounded-lg border border-gray-200 shadow-lg my-8"
                >
                  <Image
                    alt={el.name || "Tech Icon"}
                    src={el.link}
                    width={200}
                    height={200}
                    class="rounded-t-lg w-full"
                  />
                  <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{el.name}</h5>
                  <p class="mb-3 font-normal text-gray-700">{el.note}</p>
                  <div class="flex justify-between">
                    <Link 
                      href="#"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Visit Project
                    </Link>
                    <Link 
                      key={index} 
                      href={el.pLink} 
                      class=""
                    >
                      <Image 
                        alt={el.name || "Contact Link"} 
                        src={el.pUrl}
                        width={40} 
                        height={40}
                        class="hover:scale-110"
                      />
                    </Link>
                  </div>
                  </div>
                </div>
              ))}
            </div>
            
        </div>
    </div>
  )
}

export default Projects