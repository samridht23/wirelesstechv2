import Link from "next/link"
const About = () => {
  return (
    <section>
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Party"
              src="/img/aboutPage.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">WIRELESS TECH</h2>

            <p className="mt-4 text-gray-600">
              Wireless Tech is one-stop solution for all wireless needs. We are constantly working for our customers with a vision to help and provide all Wireless technical solutions. Wireless tech has more than ten years of experience in helping its clients. Our mission is to provide the customer with our services seven days a week—A quick turnaround time to any inquiry and questions directly with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
