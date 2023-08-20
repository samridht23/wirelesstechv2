import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"


const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="w-full h-[440px] overflow-hidden flex relative border border-[var(--border)] rounded-2xl">
        <div className="relative h-full flex-1 min-w-[600px] box-border">
          <div className="block lg:hidden w-full h-full flex-auto">
            <img src="/img/banner_image-min.jpeg" className="object-cover w-full h-full object-center" />
          </div>
          <section className="absolute bg-stone-200/30 top-0 right-0 w-full h-full flex flex-col justify-center gap-y-4 p-4">
            <div className="flex w-full">
              <div className="border px-2 border-stone-800 md:border-stone-300 rounded-full text-xs md:text-sm text-stone-700 md:text-stone-600">160-11 Hillside Ave, Jamaica, NY</div>
            </div>
            <h1 className="w-80 md:w-full text-2xl md:text-4xl font-[MatterBold]">Elevate Your Tech Game with WirelessTech Exclusive Range</h1>
            <p className="w-64 md:w-4/5 text-xs md:text-sm">Upgrade smartly with incredible deals on the latest mobile tech at WirelessTech.</p>
            <div className="flex">
              <Link href="/products" className="group flex border border-[var(--border)] w-48 py-1 pl-4 pr-1  rounded-full items-center justify-between">
                <span className="text-xl flex">SHOP NOW</span>
                <div className="bg-[var(--bg-dark)] text-white flex items-center p-2 rounded-full group-hover:-rotate-45 transition ease-in-out"><ArrowRightIcon /></div>
              </Link>
            </div>
          </section>
        </div>
        <div className="hidden lg:block w-full h-full flex-auto">
          <img src="/img/banner_image-min.jpeg" className="object-cover w-full h-full" />
        </div>
      </div>
    </>
  )
}
export default HeroBanner
