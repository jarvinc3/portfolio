import { useState } from 'react';

export default function Header() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDownload = () => {
    const pdfUrl = '/img/CV.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv.pdf';

    link.click();
  };

  return (
    <div className=''>
      <div className=''>
        <h2>Hola 👋 soy:</h2>
      </div>
      <h1 className='text-[100px] gradient-text'>Jarvin</h1>
      <h1 className='text-[110px] gradient-text'>Collado</h1>
      <div className="div">
        <p>
          Desarrollador web full-stack. Apasionado por aprender.
        </p>
      </div>
      <div className="read-the-docs ">
        <button className='text-blue-600 mr-2' onClick={handleDownload}>
          Descargar CV
        </button>
        <button onClick={toggleModal} className='text-blue-600'>
          Contáctame
        </button>
      </div>
      {isModalVisible && (
        <div className="fixed flex items-start justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-slate-50 rounded-lg shadow dark:bg-[#2e2e2e]">
              <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                x
              </button>
              <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Contacta conmigo
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Puesdes contactar con <strong>Jarvin Collado </strong>
                  atravez de las siguientes redes sociales:</p>
                <ul className="my-4 space-y-3">
                  <li>
                    <a href="mailto:mangomc03@gmail.com" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                      <img width="40" height="40" src="https://img.icons8.com/nolan/40/gmail-new.png" alt="gmail-new" />
                      <span className="flex-1 ml-3 whitespace-nowrap w-[40px]">mangomc03@gmail.com</span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100007835627696&sk=grid" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                      <img width="40" height="40" src="https://img.icons8.com/nolan/64/facebook-new.png" alt="facebook-new" />
                      <span className="ml-3">
                        <a href='https://www.facebook.com/profile.php?id=100007835627696&sk=grid' target="_blank" rel="noopener noreferrer">Facebook</a>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="https://wa.me/18094213066" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                      <img width="40" height="40" src="https://img.icons8.com/nolan/40/1A6DFF/C822FF/whatsapp.png" alt="whatsapp" />
                      <span className="ml-3">
                        <a href="https://wa.me/18094213066" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/jarvinc3" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                      <img width="40" height="40" src="https://img.icons8.com/nolan/40/1A6DFF/C822FF/github.png" alt="github" />
                      <span className="ml-3">
                        <a href='https://github.com/jarvinc3' target="_blank" rel="noopener noreferrer">Github</a>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                      <img width="40" height="40" src="https://img.icons8.com/nolan/40/1A6DFF/C822FF/linkedin-circled.png" alt="linkedin-circled" />
                      <span className="ml-3">Linkedin</span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-red-200 rounded dark:bg-red-700 dark:text-red-400">
                        aun no habilitado
                      </span>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
