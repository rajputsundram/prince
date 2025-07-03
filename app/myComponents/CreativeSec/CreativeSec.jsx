'use client'
import Link from "next/link";
import AchieveMents from "./AchieveMents";

const CraetiveSec = () => {
  return (
    <div className="relative bg-[url('/Images/tel.png')] bg-cover bg-center w-full min-h-[600px] sm:min-h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4 py-12 text-center z-10">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Best Services</h2>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Very Relaxing</h1>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Night Services</h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition duration-300 w-40 text-center"
            >
              Free Quote
            </Link>
            <Link
              href="#"
              className="text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 transition duration-300 w-40 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Optional: A semi-transparent layer under text for clarity on bright images */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Achievements component */}
      <AchieveMents />
    </div>
  );
};

export default CraetiveSec;
