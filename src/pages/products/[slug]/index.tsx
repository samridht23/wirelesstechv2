import data from "../../../data/data.json"
import Image from "next/image"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"
import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from "lucide-react"


interface ProductDesc {
  display?: string;
  processor?: string;
  os?: string;
  selfie_camera?: string;
  main_camera?: string;
  ram?: string;
  storage?: string;
  battery?: string;
}

interface Product {
  id: number;
  name: string;
  category: string[];
  brand: string;
  image: string;
  thumb_img: string;
  desc?: ProductDesc;
  product_name: string;
  product_value: string;
}

interface FormProps {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
}

const ProductPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [product, setProduct] = useState<Product | null>(null);
  const [productCategory, setProductCategory] = useState<string[]>();
  const [recommendation, setRecommendation] = useState<Product[] | null>(null);
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
  const composeOtpText = ({ name, email, phoneNumber, message }: FormProps) => {

    const otpText = `
    Customer Message from website.

    Name: ${name}
    Email: ${email}
    Phone: ${phoneNumber}
    Message:${message}
    Booking:${product?.name}
  `;

    return otpText;
  };
  useEffect(() => {
    const foundProduct = data.find((item) => item.product_value === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setProductCategory(foundProduct.category)
      const relatedProduct = data.filter(product =>
        product.category.some(category => productCategory?.includes(category))
      );
      const shuffledrelatedProducts = relatedProduct
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 4)
      setRecommendation(shuffledrelatedProducts)
    }
  }, [slug, product]);
  if (!product) {
    return <div>Loading...</div>;
  }
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
    <div className="pt-4 max-w-[1236px] m-auto">
      <section className="py-12 sm:py-16">
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full flex items-center justify-center">
              <div className="max-w-xl overflow-hidden rounded-md border border-[#d1d5db] w-full h-full">
                {product.image ? (
                  <Image
                    src={product.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Product Image"
                    style={{ width: '100%', height: 'auto' }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                )}
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
              <div className="w-full mt-10 flex-col flex items-start justify-start space-y-4 border-t border-b py-4 border-[#d1d5db]">
                <div>
                  <div className="font-bold">Category</div>
                  <div className="flex felx-wrap w-full gap-2 py-4">
                    {product.category.map((data, key) => (
                      <div key={key} className="text-sm border border-[#d1d5db] px-4 rounded-full text-[#6b7280] flex justify-center items-center">{data}</div>
                    ))}
                  </div>
                </div>
                <div>
                  {
                    product.desc ?
                      <div className="w-full">
                        <div className="font-bold w-full pb-4">Description</div>
                        <div className="text-sm text-[#222]">
                          <div className="font-bold">Display: <span className="font-normal px-1">{product.desc.display}</span></div>
                          <div className="font-bold">Processor: <span className="font-normal px-1">{product.desc.processor}</span></div>
                          <div className="font-bold">OS: <span className="font-normal px-1">{product.desc.os}</span></div>
                          <div className="font-bold">Selfie Camera: <span className="font-normal px-1">{product.desc.selfie_camera}</span></div>
                          <div className="font-bold">Main Camera: <span className="font-normal px-1">{product.desc.main_camera}</span></div>
                          <div className="font-bold">RAM: <span className="font-normal px-1">{product.desc.ram}</span></div>
                          <div className="font-bold">Storage: <span className="font-normal px-1">{product.desc.storage}</span></div>
                          <div className="font-bold">Battery Capacity: <span className="font-normal px-1">{product.desc.battery}</span></div>
                        </div>
                      </div>
                      :
                      <></>
                  }
                </div>
                <div>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <button type="button" className="flex items-center justify-center bg-[#222]  px-12 py-3 text-center text-base bold text-white transition-all duration-200 ease-in-out hover:bg-[#fdcf41] hover:text-[#222]">
                        Book Now
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="bg-gray-800/50 data-[state=open]:animate-overlayShow fixed inset-0" />
                      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                          Product: {product.name}
                        </Dialog.Title>
                        <div>
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
                        <Dialog.Close asChild>
                          <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                          >
                            <XIcon />
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-12">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <div className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Related Products</div>
              </nav>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2">
              {recommendation?.map((data, key) => (
                <Link key={key} href={`/products/${data.product_value}`}>
                  <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ProductPage
