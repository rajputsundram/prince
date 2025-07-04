'use client'
import { IoMdCheckmark } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const AbouUs = () => {
    return (

        <div className=" flex h-full my-32   w-full flex-wrap sm:h-[36rem] ">
            {/* textsection */}
            <div className="flex flex-col   mx-0 px-0 w-full  sm:w-[55%] items-start">
                <h2 className="sm:ml-24 ml-7  text-blue-600 text-2xl font-bold">About us</h2>
                <h1 className="sm:ml-24 ml-7 mt-6 scale-200 font-mono font-bold text-blue-950 sm:text-5xl text-3xl  ">Authentic Massage Services by Proud Gay Professionals</h1>
                <p className="sm:ml-24  ml-7  mt-10  text-lg text-gray-600 ">At <span className="text-blue-500 font-bold">Dhandewala</span>,experience ultimate relaxation and wellness with our professional massage services. Our skilled therapists use soothing techniques to relieve stress, ease muscle tension, and promote overall well-being. Whether you need deep tissue therapy or a calming massage, we tailor each session to your needs, helping you feel refreshed, balanced, and re-energized.</p>
                <div className="sm:ml-20 ml-7  font-bold text-xl">
                    <div className="flex-col mt-5 ml-7 sm:gap-48 flex sm:flex-row  ">
                        <div className="flex  my-3"><IoMdCheckmark className="text-blue-700 text-3xl font-bold"/>  <p className="">16 Different massage</p></div>

                        <div className="flex my-3"><IoMdCheckmark className="text-blue-700 text-3xl font-extrabold"/>  <p className="">24/7 Client Care</p></div>
                    </div>

                    <div className="flex-col flex ml-7  sm:gap-48 sm:flex-row ">
                        <div className="flex my-3">   <IoMdCheckmark className="text-blue-700 text-3xl font-extrabold" />  <p className="">Expert Massager</p></div>
                        <div className="flex items-start justify-start my-3">     <IoMdCheckmark  className="text-blue-700 text-3xl font-extrabold"/>  <p className="">Fair Prices </p></div>
                    </div>
                </div>
 {/* calls  */}

 <div className="flex sm:ml-24 my-10 ml-[21px] sm:mt-10 justify-center items-center">
               <div className="h-14 w-14  flex justify-center items-center text-white bg-blue-600 "><IoCall /></div> 
                <div className="flex flex-col text-xl font-bold gap-2 ml-6 ">
                    <p >Call to ask any question</p>
                    <p>+91  9306541867</p>
                </div>
            </div>
            <div className="bg-blue-600 h-[55px] w-[190px] mb-5 ml-7 text-white flex justify-center items-center sm:ml-24"><button>Request A Quote</button></div>
            </div>


            {/* image section */}

            <div className="bg-[url('/Images/massage.png')]  sm:w-[40%] w-[100%] mx-5 sm:h-[36rem] h-[26rem] bg-cover bg-center">


            </div>

           

        </div>
    )
}

export default AbouUs;