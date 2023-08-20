import { useState } from "react"

interface FormProps {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
  model?: string,
  imei?: string,
  carrier?: string,
  typeOfUnlocking?: string,
}
const composeOtpText = ({ name, email, phoneNumber, message, model, imei, carrier, typeOfUnlocking }: FormProps) => {

  const otpText = `
    Customer Message from Website.

    Name: ${name}
    Subject: Phone Unlocking
    Email: ${email}
    Phone: ${phoneNumber}
    Message:${message}
    Model:${model}
    IMEI:${imei}
    Carrier:${carrier}
    Type of Unlocking:${typeOfUnlocking}
  `;
  return otpText;

};

const Repair = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [model, setModel] = useState("")
  const [imei, setImei] = useState("")
  const [carrier, setCarrier] = useState("")
  const [typeOfUnlocking, setTypeOfUnlocking] = useState("")
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const formData: FormProps = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message,
    model: model,
    imei: imei,
    carrier: carrier,
    typeOfUnlocking: typeOfUnlocking,
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
          subject: '[Website] Service Query Message',
          toEmail: 'samridht23@gmail.com',
          otpText: composeOtpText(formData),
        }),
      });
      if (response.ok) {
        console.log("Message Sent")
        setSendingMessage(false)
        setMessageSent(true)
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
        setModel("")
        setImei("")
        setCarrier("")
        setTypeOfUnlocking("")
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
                Get Free Estimate
              </div>
              <div className="mt-6 space-y-8 md:mt-8 text-[#222]">
                <p className="flex items-center flex-col">
                  <img
                    alt="Party"
                    src="/img/phoneUnlocking.jpg"
                    className="h-full w-full h-[256px] rounded object-cover"
                  />
                  <span className="mx-2 w-full py-4">
                    We offer all types of unlocking- Factory Unlocking, Pin Unlocking, Google Unlocking and also Clean Blacklisted phones.
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 w-full lg:mx-6">
              <div
                className="w-full py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
                <h1 className="text-lg font-medium">
                  PHONE UNLOCKING
                </h1>
                <form className="mt-6 text-[#222]" onSubmit={handleSendMessage}>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Model</label>
                    <input value={model} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setModel(e.target.value)} type="text" required
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">IMEI</label>
                    <input value={imei} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setImei(e.target.value)} type="text" required
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Carrier</label>
                    <input value={carrier} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setCarrier(e.target.value)} type="text" required
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm capitalize">Type of Unlocking</label>
                    <input value={typeOfUnlocking} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTypeOfUnlocking(e.target.value)} type="text" required
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Name</label>
                    <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} type="text" required className="text-sm block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]  outline-none" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Email address</label>
                    <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)} type="email" required
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Phone Number</label>
                    <input value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPhoneNumber(e.target.value)} type="tel" id="phone" required name="phone" pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea maxLength={500} value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value)} required className="resize-none text-sm outline-none block w-full h-32 px-5 py-3 mt-2 bg-white border border-[#d1d5db] md:h-48"></textarea>
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
        </div >
      </section >
    </div >
  )
}
export default Repair 
