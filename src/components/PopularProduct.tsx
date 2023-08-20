import data from "@/data/newArrivals.json"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"

const PopularProduct = () => {
  return (
    <div className="my-12 md:my-32 relative w-full flex flex-col">
      <div className="justify-start flex w-full py-4 md:py-8">
        <span className="font-[MatterBold]">
          NEW ARRIVALS
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2">
        {data.map((data, key) => (
          <Link key={key} href={`/products/${data.product_value}`}>
            <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default PopularProduct;
