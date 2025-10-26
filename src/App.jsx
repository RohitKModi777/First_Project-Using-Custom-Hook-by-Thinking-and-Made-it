import React, { use, useState } from 'react'
import usePrev from './hooks/usePrev';
import "./App.css";
const images = [
  "https://cdn.pixabay.com/photo/2024/12/28/03/39/field-9295186_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/05/10/14/37/glacier-7187291_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/09/02/15/28/styggkarret-433688_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/05/21/15/34/snow-mountain-9614087_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/11/17/04/52/chilli-9202873_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/11/09/14/13/forest-7580700_1280.jpg"

];

const App = () => {
  const [img,setImg] = useState(images[0]);
  const prevImage = usePrev(img);

 const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImg(images[randomIndex]);
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-700 to-black">

  <div className="py-6">
    <h1 className="text-center text-yellow-400 italic font-bold text-2xl bg-black/30 px-4 py-2 rounded-lg shadow-lg border border-yellow-400/50">
      My First Project Using Custom Hook
    </h1>
  </div>

  <div className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 w-[420px] md:w-[500px] text-center transition-all duration-500">
    
    <h1 className="text-2xl font-semibold text-white tracking-wide mb-6">
      Image Viewer
    </h1>

    <div className="relative group">
      <img
        src={img}
        className="rounded-2xl w-full h-64 object-cover shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl"
      />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20"></div>
    </div>

    <button
      onClick={changeImage}
      className="mt-8 w-full py-3 text-white font-medium rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg transition-all duration-500 hover:scale-105 active:scale-95"
    >
      Change Image
    </button>

    {prevImage && (
      <div className="mt-8 animate-fade-in">
        <p className="text-sm text-gray-300 mb-2 tracking-wide hover:font-bold text-xl">
          Previous Image
        </p>
        <img
          src={prevImage}
          className="rounded-xl w-[420px]  object-cover opacity-70 hover:opacity-100 transition-all duration-500 shadow-md"
        />
      </div>
    )}
  </div>
</div>

    </>
  )
}

export default App