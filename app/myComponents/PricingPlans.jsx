'use client'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const PricingPlans = () => {

    const contents = [

        { heading: "Basic Plan ", p: "For 1 Hour", price: "1k" },
        { heading: "Standard Plan ", p: "For 3 Hour", price: "2k" },
        { heading: "Advanced Plan ", p: "For Full Night", price: "5k" }
    ]
   const cards = [
  {
    id: 1,
    item: [
      { text: 'Lorem ipsum dolor sit amet' },
      { text: 'Consectetur adipiscing elit' },
      { text: 'Sed do eiusmod tempor' },
      { text: 'Incididunt ut labore' },
    ],
  },
  {
    id: 2,
    item: [
      { text: 'Lorem ipsum dolor sit amet' },
      { text: 'Consectetur adipiscing elit' },
      { text: 'Sed do eiusmod tempor' },
      { text: 'Incididunt ut labore' },
      { text: 'Et dolore magna aliqua' },
    ],
  },
  {
    id: 3,
    item: [
      { text: 'Lorem ipsum dolor sit amet' },
      { text: 'Consectetur adipiscing elit' },
      { text: 'Sed do eiusmod tempor' },
      { text: 'Ut enim ad minim veniam' },
      { text: 'Quis nostrud exercitation ullamco' },
      { text: 'Laboris nisi ut aliquip ex ea' },
    ],
  },
];


    return (
        <div className="h-full sm:16 mt-24 ">
            {/* Heading */}
            <div className="flex flex-col  justify-center mb-12 items-center">
                <h2 className=" sm:my-6 text-3xl font-bold text-blue-600">Our Plans</h2>
                <h1 className="sm:text-6xl text-3xl  flex text-center w-[100%] sm:w-[60%] font-bold">We are Offering Competitive Prices for Our Clients
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:mt-16  justify-center items-center">
                {
                    contents.map((item, index) => {
                        return (
                            <>
                                <div className={`bg-blue-200 shadow-xl   h-[490px] w-[430px] rounded-sm key={index} ${index == 1 ? "bg-white" : "bg-blue-200"}`}>
                                    <div className="ml-12 h-24 flex flex-col justify-center border-">
                                        <h1 className="text-blue-700 font-extrabold text-3xl font-mono">{item.heading}</h1>
                                        <p className="text-brown-200 my-1">{item.p}</p>
                                    </div>
                                    <hr className="text-gray-500" />
                                    <div className="flex items-center ml-12 my-4">
                                    <p className="font-bold">₹</p><h1 className="text-extrabold font-bold text-5xl">{item.price}</h1>
                                    </div>
                                    
                                        {/* Map corresponding card items here */}
                        <div className="ml-12">
                        {cards[index].item.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-2">
                                <p>{item.text}</p>
                                <p className="mx-6 "><FaCheck className="text-green-500" /> </p>
                            </div>
                        ))}
                    </div>
                                    

                                      

                                    <div className="ml-12 mt-9">
                                        <button className="w-36 bg-blue-500 text-white h-12">Book Now</button>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PricingPlans;