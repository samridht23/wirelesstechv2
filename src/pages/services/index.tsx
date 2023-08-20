import Link from "next/link"

const servicesData = [
  {
    href: "/repair-laptop-tablet-pc",
    imgUrl: "/img/laptopRepair.jpg",
    heading: "Repair Laptop, Tablet & PC",
  },
  {
    href: "/repair-phones",
    imgUrl: "/img/catalogImg2.jpg",
    heading: "Repair Phones",
  },
  {
    href: "/phone-unlocking",
    imgUrl: "/img/phoneUnlocking.jpg",
    heading: "Phone Unlocking",
  },
  {
    href: "/sim-card-activation",
    imgUrl: "/img/simCard.jpg",
    heading: "SIM Card Activation",
  },
  {
    href: "/bill-payment",
    imgUrl: "/img/catalogImg3.jpg",
    heading: "Bill Payment",
  },
]
const Services: React.FC = () => {
  return (
    <>
      <div className="max-w-[1536px] m-auto py-[4rem] md:py-[8rem] px-[1rem] relative w-full flex justify-center">
        <div className="grid gap-[1rem] border-box grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {servicesData.map((data, key) => (
            <Link key={key} href={data.href} className="rounded-lg overflow-hidden relative block border border-[#d1d5db]">
              <div className="relative h-[200px] md:h-[250px] lg:h-[350px]">
                <img
                  src={data.imgUrl}
                  alt=""
                  className="inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-[rgba(17,17,17,0.4)]">
                <h3 className="text-xl font-medium text-white">{data.heading}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Services 
