import { useState } from "react"

function App() {
  const [image, setImage] = useState(null)
  function openUploader() {
    document.getElementById('image-upload').click()
  }
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center pt-20 overflow-x-hidden'>
      <div className="font-bold text-5xl text-black text-center">Trace Pixels To Vectors in Full Color</div>
      <div className="text-center text-lg text-gray-400 mt-8">Convert your PNG and JPG images to SVG vectors quickly and easily. <br /> Fully automatically. Using AI.</div>
      {image?(
        <div className="h-[60%] mt-8">
          <div className="flex justify-end w-full">
            <div onClick={openUploader} className="px-6 py-3 mb-2 bg-blue-500 rounded-md text-white text-lg font-bold cursor-pointer hover:bg-blue-700">Upload</div>
          </div>
          <img className="h-full" src={image} alt="" />
        </div>
      ):(
        <div onClick={openUploader} className="w-[50%] h-[30%] border-2 border-blue-500 text-blue-500 border-dashed rounded-lg mt-8 
        flex justify-center items-center font-bold text-3xl italic cursor-pointer hover:bg-blue-100">
          UPLOAD YOUR IMAGE.
        </div>
      )}
      <input id="image-upload" hidden type="file" onChange={imgFilehandler} />
    </div>
  )
}

export default App
