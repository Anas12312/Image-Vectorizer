import { useState } from "react"
function App() {
  const [image, setImage] = useState(null)
  const [convertedImage, setConvertedImage] = useState(null)
  function openUploader() {
    document.getElementById('image-upload').click()
  }
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  const vectorize = async () => {
    if (image) {
      setConvertedImage("https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.jpeg")
      // const formData = new FormData();
      // formData.append('file', image);

      // await fetch(
      //   'http://localhost:3000/upload',
      //   {
      //     method: 'POST',
      //     body: formData,
      //   }
      // )
      //   .then((response) => response.json())
      //   .then((result) => {
      //     setConvertedImage(result.url)
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //   });
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center pt-8 overflow-x-hidden'>
      <div className="font-bold text-5xl text-black text-center">Trace Pixels To Vectors in Full Color</div>
      <div className="text-center text-lg text-gray-400 mt-8">Convert your PNG and JPG images to SVG vectors quickly and easily. <br /> Fully automatically. Using AI.</div>
      {convertedImage == null ? (
        image ? (
          <div className="h-[55%] mt-20 flex flex-col justify-center items-center">
            <div className="flex justify-end w-full">
              <div onClick={openUploader} className="px-6 py-3 mb-2 bg-blue-500 rounded-md text-white text-lg font-bold cursor-pointer hover:bg-blue-700">Upload</div>
            </div>
            <img className="h-full" src={image} alt="" />
            <div onClick={vectorize} className="w-full min-w-[40rem] mt-3 py-3 text-xl text-white font-bold tracking-[0.8rem] bg-blue-500 hover:bg-blue-700 rounded-xl flex justify-center cursor-pointer">VECTORIZE</div>
          </div>
        ) : (
          <div onClick={openUploader} className="w-[50%]  h-[30%] border-2 border-blue-500 text-blue-500 border-dashed rounded-lg mt-8 
                                                flex justify-center items-center font-bold text-3xl italic cursor-pointer hover:bg-blue-100">
            UPLOAD YOUR IMAGE.
          </div>
        )
      ) : (
        <div className="h-[55%] mt-20 flex flex-col justify-center items-center">
          <div className="w-full my-2 text-center text-3xl font-bold tracking-widest">RESULTS:</div>
          <img className="h-full" src={convertedImage} alt="" />
          <div onClick={() => {setConvertedImage(null); openUploader()}} className="w-full min-w-[40rem] mt-3 py-3 text-xl text-white font-bold tracking-[0.2rem] bg-blue-500 hover:bg-blue-700 rounded-xl flex justify-center cursor-pointer">RE-UPLOAD</div>
        </div>
      )}
      <input id="image-upload" hidden type="file" onChange={imgFilehandler} />
    </div>
  )
}

export default App
