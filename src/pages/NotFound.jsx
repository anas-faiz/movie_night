import Header from "../components/Header";


function NotFound (){
    const bg_image = import.meta.env.VITE_home_background_image;
  
    return (
        <div
      className="relative flex flex-col w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_image})` }}>
        
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/70"></div>
      <Header/>
            <main className="relative z-10 flex flex-col items-center justify-center flex-grow text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
          Page  <span className="text-red-500">Not Found</span>
        </h1>
      </main>
        </div>
    )
}

export default NotFound;