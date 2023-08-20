import Image from "next/image"

interface ProductCardProps {
  name: string
  thumbnail_image: string
  category: string[]
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="w-full h-full flex flex-col rounded overflow-hidden border box-border border-[var(--border)]">
      <div className="box-border w-full h-full p-[2rem] border-b-[1px] border-[var(--border)]">
        {props.thumbnail_image ? (
          <Image
            src={props.thumbnail_image}
            width={0}
            height={0}
            sizes="100vw"
            alt="Product Image"
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div className="w-full h-[236px] bg-gray-300 animate-pulse"></div>
        )}
      </div>
      <div className="box-border w-full flex flex-col gap-[0.4rem] p-[0.8rem]">
        <div className="h-full text-[14px] truncate">{props.name}</div>
        <div className="flex text-[12px] gap-1 text-gray-500">
          {props.category.map((value, key) => (
            <div className="flex justify-center items-center border-[1px] border-[#d1d5db] rounded-full px-[0.5rem]" key={key}>
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductCard
