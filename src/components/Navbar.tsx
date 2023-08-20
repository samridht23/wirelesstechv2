import Link from "next/link"
import Image from "next/image"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import { ChevronRightIcon, SearchIcon } from "lucide-react"


interface NavItemsProps {
  label: string,
  to: string,
}
const NavItems: NavItemsProps[] = [
  {
    label: "ABOUT US",
    to: "/about"
  },
  {
    label: "SHOP",
    to: "/products",
  },
  {
    label: "SERVICES",
    to: "/services"
  },
  {
    label: "GALLERY",
    to: "/gallery"
  },
  {
    label: "CONTACT US",
    to: "/contact"
  }
]

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const handleNavbarClick = () => {
    setOpen(false)
  }
  const move = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)'
  })
  return (
    <nav>
      <div className="w-full border-b-[1px] border-[var(--border)] fixed top-0 right-0 bg-slate-50 z-30 px-[1rem]">
        <div className="m-auto h-[60px] max-w-[1536px] flex justify-between items-center px-2">
          <div className="relative">
            <Link href="/" className="relative w-full font-[MatterBold] text-2xl">
              WIRELESS TECH
            </Link>
          </div>
          <div className="flex gap-4 text-sm font-[MatterBold] items-center">
            {NavItems.map((value, key) => (
              <Link href={value.to} key={key} className="hover:underline">
                <div>{value.label}</div>
              </Link>
            ))}
          </div>
          <div className="relative flex items-center border border-[var(--border)] px-3 rounded-full overflow-hidden">
            <input
              type="text"
              id="Search"
              placeholder="Search"
              className="w-full py-2.5 px-4 sm:text-sm box-border outline-none"
              autoComplete="off"
            />
            <button className="bg-white flex group">
              <span className="text-[var(--text)] group-hover:text-gray-700">
                <SearchIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
