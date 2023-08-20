import Link from "next/link"
const NewProduct = () => {
  return (
    <>
      <section>
        <div className="my-2 relative w-full flex flex-col box-border">
          <div className="justify-start flex w-full py-4 md:py-8">
            <span className="font-[MatterBold]">
              NEW COLLECTION 
            </span>
          </div>
          <ul className="grid grid-cols-1 gap-2  md:grid-cols-3">
            <li>
              <Link href="/products" className="relative block group border-[1px] rounded-2xl overflow-hidden border-[var(--border)]">
                <img
                  src="/img/airPodProNewCollection.jpg"
                  alt="AirPods Pro Image"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 className="mx-2">AIRPODS PRO</h3>

                  <span
                    className="rounded-full mt-1.5 inline-block bg-black px-5 py-3 text-xs uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/products" className="relative block group border-[1px] rounded-2xl overflow-hidden border-[var(--border)]">
                <img
                  src="/img/iphone14NewCollection.jpg"
                  alt="iPhone 14 Image"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 className="mx-2">IPHONE 14</h3>

                  <span
                    className="rounded-full mt-1.5 inline-block bg-black px-5 py-3 text-xs uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
            <li className="md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-1">
              <Link href="/products" className="relative block group border-[1px] border-[var(--border)] rounded-2xl overflow-hidden">
                <img
                  src="/img/iphone13NewCollection.jpg"
                  alt="iPhone 13 Image"
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div
                  className="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 className="mx-2">IPHONE 13</h3>

                  <span
                    className="rounded-full mt-1.5 bg-black px-5 py-3 text-xs uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

    </>
  )
}
export default NewProduct
