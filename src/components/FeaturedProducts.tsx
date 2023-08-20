import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
const FeaturedProducts = () => {
  return (

    <div className="my-12 md:my-32 relative w-full flex justify-center flex-col">
      <div className="w-full justify-start flex w-full py-4 md:py-8">
        <span className="font-[MatterBold]">
          NEW COLLECTION
        </span>
      </div>
      <div className="relative w-full flex border h-[400px] divide-x divide-[var(--border)] border-[var(--border)] rounded-2xl overflow-hidden relative">
        <img src="/img/galaxy_s21_ultra.jpg" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="w-full h-full bg-green-500/0 flex items-end p-4">
            <Link href="/" className="group flex items-center justify-between bg-white py-1 pl-4 pr-1 rounded-full gap-4">
              <span className="text-xl w-full h-full">
                SAMSUNG S21 ULTRA
              </span>
              <span className="flex bg-black p-2 rounded-full transition ease-in-out group-hover:-rotate-45 text-white"><ArrowRightIcon /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FeaturedProducts
