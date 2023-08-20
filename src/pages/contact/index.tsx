import { useState } from "react"
import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react"
interface FormProps {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
}
const composeOtpText = ({ name, email, phoneNumber, message }: FormProps) => {

  const otpText = `
    Customer Message from website.

    Name: ${name}
    Email: ${email}
    Phone: ${phoneNumber}
    Message:${message}
  `;

  return otpText;
};
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const formData: FormProps = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message
  };
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendingMessage(true)
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Query Message',
          toEmail: 'samridht23@gmail.com',
          otpText: composeOtpText(formData),
        }),
      });
      if (response.ok) {
        setSendingMessage(false)
        setMessageSent(true)
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      }
      else {
        console.log("Error sending Message")
        setSendingMessage(false)
      }
    } catch (err) {
      console.error('Error sending Message', err)
      setSendingMessage(false)
    }
  }
  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="w-full lg:flex lg:items-center">
            <div className="w-full lg:mx-6 flex flex-col md:block justify-center items-start">
              <div className="text-[24px] font-bold capitalize lg:text-3xl text-[#222]">
                Feel free to contact us
              </div>
              <div className="mt-6 space-y-8 md:mt-8 text-[#222]">
                <p className="flex items-center">
                  <MapPinIcon size={20} />
                  <span className="mx-2 truncate w-full">
                    160-11 Hillside Ave, Jamaica, NY 11432
                  </span>
                </p>
                <p className="flex items-center ">
                  <PhoneIcon size={20} />
                  <a href="tel:718-526-0251" className="mx-2 truncate w-full">718-526-0251</a>
                </p>
                <p className="flex items-center">
                  <MailIcon size={20} />
                  <a href="mailto:wtechny@gmail.com" className="mx-2 truncate w-full">wtechny@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="mt-8 w-full lg:mx-6">
              <div
                className="w-full py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
                <h1 className="text-lg font-medium">
                  Talk with us today
                </h1>
                <form className="mt-6 text-[#222]" onSubmit={handleSendMessage}>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm">Full Name</label>
                    <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} type="text" required placeholder="Name" className="text-sm block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db]  outline-none" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Email address</label>
                    <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)} type="email" required placeholder="Email"
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Phone Number</label>
                    <input value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPhoneNumber(e.target.value)} type="tel" id="phone" required name="phone" pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$" placeholder="Phone Number"
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db]"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea maxLength={500} value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value)} required className="resize-none text-sm outline-none block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db] md:h-48" placeholder="Message"></textarea>
                  </div>
                  <button className="relative w-full px-6 py-3 mt-6 text-sm font-medium hover:bg-[#101010] text-white capitalize transition-colors duration-300 transform bg-[#222]" disabled={sendingMessage}>
                    {messageSent && (
                      <div className="absolute top-0 right-0 w-full flex justify-center -translate-y-12">
                        <div className="max-w-xs bg-green-100 border border-green-200 text-sm text-green-500 rounded border shadow-md" role="alert">
                          <div className="flex px-4 py-2">
                            Message Sent
                          </div>
                        </div>
                      </div>
                    )}
                    {
                      sendingMessage ?
                        <div className="flex justify-center items-center gap-x-2">
                          <div
                            className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                          </div>
                          Sending
                        </div>
                        :
                        <div>Submit</div>
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
