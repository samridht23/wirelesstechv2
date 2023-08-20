import Link from "next/link"
import * as Accordion from '@radix-ui/react-accordion';
import { PhoneIcon, InstagramIcon, FacebookIcon, TwitterIcon, ChevronDownIcon } from "lucide-react"

const quickLinks = [
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/products",
    label: "Shop"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/gallery",
    label: "Gallery"
  },
  {
    href: "/contact",
    label: "Contact Us"
  },
]
const category = [
  {
    href: "/products#iphone",
    label: "iPhone"
  },
  {
    href: "/products#ipad",
    label: "iPad"
  },
  {
    href: "/products#apple_watch",
    label: "Apple Watch"
  },
  {
    href: "/products#samsung",
    label: "Samsung"
  },
  {
    href: "/products#amazon",
    label: "Amazon"
  },
  {
    href: "/products#accessories",
    label: "Accessories"
  }
]
const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden bg-[rgb(17,17,17)] border border-[var(--border)] rounded-2xl pt-2 px-2">
        <div className="hidden lg:flex w-full h-full text-[#F8F8EEB3]">
          <div className="flex-1 w-full h-full flex justify-center">
            <div className="py-14 text-xl text-[#F8F8EF]">
              <Link href="/">WIRELESS TECH</Link>
            </div>
          </div>
          <div className="block flex-1 w-full h-full flex justify-center">
            <div className="flex flex-col py-12">
              <label className="w-full font-[MatterBold] my-2 text-[#F8F8EF]">QUICK LINKS</label>
              <ul className="w-full text-sm flex flex-col gap-2">
                {quickLinks.map((value, key) => (
                  <li key={key}>
                    <Link href={value.href} className="hover:underline">
                      {value.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full h-full flex justify-center">
            <div className="flex flex-col py-12">
              <label className="w-full font-[MatterBold] my-2 text-[#F8F8EF]">CATEGORIES</label>
              <ul className="w-full text-sm flex flex-col gap-2">
                {category.map((value, key) => (
                  <li key={key}>
                    <Link href={value.href} className="hover:underline">
                      {value.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full h-full flex justify-center">
            <div className="flex flex-col py-12 p-2">
              <label className="w-full font-[MatterBold] my-2 text-[#F8F8EF]">CONTACT INFO</label>
              <ul className="w-full text-sm flex flex-col gap-4">
                <li>
                  Mon - Sat : 9 AM- 8 PM
                  <br />
                  Sun : 10 AM - 8 PM
                </li>
                <li>
                  160-11 Hillside Ave, Jamaica, NY 11432
                </li>
                <li>
                  718-526-0251
                </li>
                <li>
                  <a href="mailto:wtechny@gmail.com" className="hover:underline">wtechny@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-full flex flex-col px-2 py-4 text-[#F8F8EF]">
          <div className="py-12 text-xl font-[MatterBold]">WIRELESS TECH</div>
          <div className="w-full">
            <Accordion.Root type="single" collapsible={true}>
              <Accordion.Item value="item-1">
                <Accordion.Header>
                  <Accordion.Trigger className="justify-between border-t border-[#767676] py-4 font-[MatterBold] w-full flex text-sm">
                    QUICK LINKS
                    <ChevronDownIcon size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                {quickLinks.map((value, key) => (
                  <Accordion.Content className="py-2 text-sm underline" key={key}>
                    <Link href={value.href} >
                      {value.label}
                    </Link>
                  </Accordion.Content >
                ))}
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Header>
                  <Accordion.Trigger className="border-t border-[#767676] py-4 font-[MatterBold] w-full flex text-sm justify-between items-center">
                    CATEGORIES
                    <ChevronDownIcon size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                {category.map((value, key) => (
                  <Accordion.Content className="py-2 text-sm underline" key={key}>
                    <Link href={value.href} >
                      {value.label}
                    </Link>
                  </Accordion.Content >
                ))}
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Header>
                  <Accordion.Trigger className="border-t border-[#767676] py-4 font-[MatterBold] w-full flex text-sm justify-between items-center">
                    CONTACT INFO
                    <ChevronDownIcon size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="py-2 text-sm" >
                  Mon - Sat : 9 AM- 8 PM
                  <br />
                  Sun : 10 AM - 8 PM
                </Accordion.Content >
                <Accordion.Content className="py-2 text-sm " >
                  160-11 Hillside Ave, Jamaica, NY 11432
                </Accordion.Content >
                <Accordion.Content className="py-2 text-sm " >
                  718-526-0251
                </Accordion.Content >
                <Accordion.Content className="py-2 text-sm underline" >
                  <a href="mailto:wtechny@gmail.com">
                    wtechny@gmail.com
                  </a>
                </Accordion.Content >
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-2 px-4 text-[#F8F8EF] border-t border-[#767676]">
          <div className="text-xs">© {new Date().getFullYear()} WIRELESS TECH.</div>
          <div className="text-xs">
            <ul className="flex gap-x-4">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

