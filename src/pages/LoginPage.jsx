import Header from "../components/Header";
import LogInForm from "../components/LoginForm";
    const bg_image = import.meta.env.VITE_home_background_image;

    function LoginPage(){
    return(
        <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg_image})` }}
    >   
           <div className="absolute inset-0 bg-black/70"></div> 
            <Header />
            <LogInForm/>
        </div>

    ) 

}

export default LoginPage;