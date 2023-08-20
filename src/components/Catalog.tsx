import Link from "next/link"
import { MoveRightIcon } from "lucide-react"

const catalogData = [
  {
    href: "/products",
    imgUrl: "/img/catalogImg4.jpg",
    heading: "Phones",
    subHeading: "Explore the Latest Phone Models and Features",
  },
  {
    href: "/services",
    imgUrl: "/img/catalogImg2.jpg",
    heading: "Repair",
    subHeading: "Trustworthy Repair Services for All Your Devices",
  },
  {
    href: "/services",
    imgUrl: "/img/catalogImg3.jpg",
    heading: "Activation & Bill Payment",
    subHeading: "Convenient Bill Payment Options for Your Ease",
  },
  {
    href: "/products#accessories",
    imgUrl: "/img/catalogImg1.jpg",
    heading: "Accessories",
    subHeading: "Enhance Your Style with Trendy and Functional Accessories",
  },
]
const Catalog: React.FC = () => {
  return (
    <>
      <div className="my-12 md:my-32 relative w-full flex justify-center flex-col">
        <div className="w-full justify-start flex w-full py-4 md:py-8">
          <span className="font-[MatterBold]">
            OUR SERVICES
          </span>
        </div>
        <div className="grid gap-4 border-box grid-cols-2 md:grid-cols-4">
          {catalogData.map((data, key) => (
            <Link
              key={key}
              href={data.href}
              className="rounded-2xl overflow-hidden relative block border border-[var(--border)]"
            >
              <div className="relative h-[200px] md:h-[290px] lg:h-[300px]">
                <img
                  src={data.imgUrl}
                  alt="Services Catalog"
                  className="inset-0 h-full w-full object-cover transition"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-1 md:p-2 md:p-4  bg-[rgba(1,1,1,0.4)]">
                <div className="bg-white w-full py-2 rounded-full px-4 flex items-center justify-center sm:justify-between border border-[var(--border)]">
                  <h1 className="text-xs md:text-base lg:text-xl text-[var(--text)]">
                    {data.heading}
                  </h1>
                  <div className="hidden sm:block">
                    <MoveRightIcon />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Catalog
