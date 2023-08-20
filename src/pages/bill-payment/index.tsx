const BillPayment = () => {
  return (
    <section
      className="overflow-hidden flex flex-col sm:grid sm:grid-cols-2 items-center my-24 flex max-w-[1536px] m-auto"
    >
      <div className="m-4 py-4">
        <div
          className="mx-auto max-w-xl text-start"
        >
          <h2 className="text-2xl font-bold text-[#222] md:text-3xl">
            Bill Payment
          </h2>

          <p className="text-gray-500 md:mt-4 md:block">
            We offer Bill payment services for all the Major Wireless Service Providers and utility services like Simple Mobile, Ultra Mobile, Lyca Mobile, Tmobile, H2O, AT&T, and more. Moreover, International Top-ups service is also provided based on the country and service providers. You can pay or top-up your loved ones’ phone bills at our store to any place around the globe.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 max-w-xl items-center justify-center">
        <img src="/img/verizon.jpg" width={150} />
        <img src="/img/ultraMobile.jpg" width={150} />
        <img src="/img/lyca.jpg" width={150} />
        <img src="/img/redPocket.jpg" width={150} />
        <img src="/img/h2O.png" width={150} />
        <img src="/img/cricket.png" width={150} />
        <img src="/img/simpleMobile.jpg" width={150} />
        <img src="/img/tMobile.jpg" width={150} />
        <img src="/img/aTandT.png" width={150} />
      </div>
    </section>
  )

}
export default BillPayment 
