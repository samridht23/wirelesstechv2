const offerData = [
  {
    label: "Holiday Deals: Up to 20% off on selected phones ✦",
  },
]

const Offer = () => {
  return (
    <div className="my-2 relative w-full flex flex-col box-border">
      <div className="flex justify-center flex-col items-center w-full box-border gap-1">
        <div className="rounded-xl border border-[var(--border)] relative w-full flex overflow-hidden">
          <div className="w-full h-[60px] flex items-center bg-black text-white overflow-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
              {Array.from({ length: 4 }, (_, key) => (
                <>
                  <span className="text-base mx-4" key={key}>
                    Holiday Deals: Up to 20% off on selected phones
                  </span>
                  <span>
                    ✦
                  </span>
                </>
              ))}
            </div>
            <div className="absolute top-0 py-5 animate-marquee2 whitespace-nowrap flex items-center">
              <div className="flex w-full h-full items-center justify-center">
                {Array.from({ length: 4 }, (_, key) => (
                  <>
                    <span className="text-base mx-4" key={key}>
                      Holiday Deals: Up to 20% off on selected phones
                    </span>
                    <span>
                      ✦
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Offer
