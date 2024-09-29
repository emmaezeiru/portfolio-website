import Image from "next/image";
import { serviceData } from "../constants";

const Services = () => {
  return (
    <div class="bg-gray-100" id="services">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-16">
            <h2 class="text-5xl font-bold px-4 md:px-0 text-center">
                Services
            </h2>
            <div>
              <h4 class="mt-12 text-3xl font-semibold text-blue-500">
                  What I Provide
              </h4>
              <div class="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center">
                {serviceData.map((el, index) => (
                  <div
                    key={index}
                    class="md:w-96 p-4 bg-white rounded-lg flex items-center flex-col mt-8"
                  >
                    <Image
                      alt={el.name || "Service Icon"}
                      src={el.img}
                      width={60} 
                      height={60}
                    />
                    <h4 class="text-xl font-bold mt-4">
                      {el.name}
                    </h4>
                    <p class="text-lg mt-2 text-justify">
                      {el.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services
