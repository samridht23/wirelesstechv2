import { useState, useEffect } from "react"
import { CheckIcon } from "lucide-react"
import * as Checkbox from '@radix-ui/react-checkbox';

interface ProblemProps {
  batteryReplacement: boolean,
  screenReplacement: boolean,
  waterDamage: boolean,
}
interface FormProps {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
  brand?: string,
  model?: string,
  problem?: ProblemProps
}
const problemList = [
  {
    label: "Battery Replacement",
  },
  {
    label: "Screen Replacement",
  },
  {
    label: "Water Damage",
  },
  {
    label: "I don't know",
  }
]
const composeOtpText = ({ name, email, phoneNumber, message, brand, model, problem }: FormProps) => {

  const selectedProblems = problem
    ? Object.keys(problem)
      .filter(key => problem[key as keyof ProblemProps])
      .map(key => problemList.find(item => item.label === key)?.label)
      .filter(Boolean)
      .join(', ')
    : '';
  const otpText = `
    Customer Message from website.

    Name: ${name}
    Subject: Phone Repair
    Email: ${email}
    Phone: ${phoneNumber}
    Message:${message}
    Brand:${brand}
    Model:${model}
    Problem:${selectedProblems}
  `;
  return otpText;

};

const Repair = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [sendingMessage, setSendingMessage] = useState(false);
  const [userSelectedProblems, setUserSelectedProblems] = useState({
    batteryReplacement: false,
    screenReplacement: false,
    waterDamage: false,
    iDontKnow: false,
  });
  const [messageSent, setMessageSent] = useState(false);

  const formData: FormProps = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message,
    brand: brand,
    model: model,
    problem: userSelectedProblems
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
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
        setBrand("")
        setModel("")
        setUserSelectedProblems({ batteryReplacement: false, screenReplacement: false, waterDamage: false, iDontKnow: false })
        setMessageSent(true)
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
  const handleCheckboxChange = (problemState: any) => {
    setUserSelectedProblems(prevState => ({
      ...prevState,
      ...problemState,
    }));
  };
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
                    src="/img/catalogImg2.jpg"
                    className="h-full w-full h-[256px] rounded object-cover"
                  />
                  <span className="mx-2 w-full py-4">
                    At Wireless Tech our Certified Repair Technician provides 100 % satisfaction of the Repairs done by Wireless Tech. Fast, Reliable, Secure and Quick Turnaround makes us very dependable. Wireless Tech offer warranty for any repairs done by us so feel free to Get your devices repair by us.
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 w-full lg:mx-6">
              <div
                className="w-full py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
                <h1 className="text-lg font-medium">
                  REPAIR PHONES
                </h1>
                <form className="mt-6 text-[#222]" onSubmit={handleSendMessage}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">Brand</label>
                      <input value={brand} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setBrand(e.target.value)} type="text" required className="text-sm block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]  outline-none" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Model</label>
                      <input value={model} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setModel(e.target.value)} type="text" required className="text-sm block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]  outline-none" />
                    </div>
                  </div>
                  <div className="py-4">
                    <label className="block mb-2 text-sm">Your Problem</label>
                    <div className="grid grid-cols-2 gap-2">
                      {problemList.map((data, key) => (
                        <div key={key} className="flex items-center">
                          <Checkbox.Root
                            className="flex items-center justify-center h-6 w-6  rounded-sm border border-[#d1d5db] ring-offset-background"
                            key={key}
                            onCheckedChange={(checked) => {
                              handleCheckboxChange({ [data.label]: checked });
                            }}
                          >
                            <Checkbox.Indicator className="box-border flex items-center justify-center text-current">
                              <CheckIcon size={18} />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                          <label className="w-full text-sm text-[#222] pl-2">
                            {data.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
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
