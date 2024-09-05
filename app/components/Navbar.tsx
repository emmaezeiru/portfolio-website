import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/Project">Projects</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar