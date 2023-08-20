import * as Dialog from '@radix-ui/react-dialog';


const Gallery = () => {
  const images = [
    '/img/gallery/raw/1.jpg',
    '/img/gallery/raw/2.jpg',
    '/img/gallery/raw/3.jpg',
    '/img/gallery/raw/4.jpg',
    '/img/gallery/raw/5.jpg',
    '/img/gallery/raw/6.jpg',
    '/img/gallery/raw/7.jpg',
    '/img/gallery/raw/8.jpg',
    '/img/gallery/raw/9.jpg',
    '/img/gallery/raw/10.jpg',
    '/img/gallery/raw/11.jpg',
    '/img/gallery/raw/12.jpg',
    '/img/gallery/raw/13.jpg',
  ];

  return (
    <>
      <div className="max-w-[1536px] m-auto">
        <div className="flex justify-center p-12 z-50">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-[1500px]">
            {images.map((src, key) => (
              <Dialog.Root key={key}>
                <Dialog.Trigger>
                  <img
                    src={src}
                    alt="Gallery Image"
                    className="object-cover w-full max-w-[300px] h-full rounded"
                  />
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-gray-800/90 fixed inset-0" />
                  <Dialog.Content className="fixed top-[50%] left-[50%] max-w-full md:max-w-[70%] lg:max-w-[60%] max-h-[85vh] w-full translate-x-[-50%] translate-y-[-50%] bg-white focus:outline-none">
                    <img src={src} className="w-full h-full object-cover"/>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Gallery
