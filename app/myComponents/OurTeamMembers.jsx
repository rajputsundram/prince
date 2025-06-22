'use client'
import Image from "next/image"

const OurTeamMembers = () => {
  const ClintDetails = [
    {
      image: "/Images/prince.jpg",
      name: "Prince",
      professions: "All rounder",
    },
    {
      image: "/Images/anil.jpg",
      name: "Anil",
      professions: "Night Expert",
    },
    {
      image: "/Images/aakash.jpg",
      name: "Aakash",
      professions: "Nice Hand-Job",
    },
  ]

  return (
    <div className="sm:mt-16 h-full my-4 mt-12">
      {/* Heading */}
      <div className="flex flex-col justify-center mb-12 items-center">
        <h2 className="font-bold sm:my-6 text-3xl text-blue-600">Team Members</h2>
        <h1 className="sm:text-5xl text-3xl flex text-center w-full sm:w-1/2 font-bold">
          Professional Stuffs Ready to Help You.
        </h1>
      </div>

      {/* Cards */}
      <div className="flex sm:flex-row flex-col justify-center items-center gap-10">
        {ClintDetails.map((item, index) => (
          <div
            className="flex flex-col h-[480px] bg-blue-400 w-[380px] items-center rounded-lg overflow-hidden"
            key={index}
          >
            <div className="w-full h-[300px] relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 p-3 text-xl font-semibold">{item.name}</div>
            <div className="text-white text-lg">{item.professions}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeamMembers;
