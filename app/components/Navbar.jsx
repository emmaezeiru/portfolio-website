import Link from "next/link"

const Navbar = () => {
  return (
    
    <nav class="bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0">
      <div>
        <div class="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div class="flex items-center cursor-pointer">
            <span class="font-bold text-xl">
            Emma Ezeiru
          </span>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li>
              <Link href="#" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar