import "./App.css";
import OrderImg from "/src/images/illustration-hero.svg";
import IconMusic from "/src/images/icon-music.svg";

export default function Order() {
  return (
    <>
      <div className="w-[90%] md:w-[50%] mx-auto bg-white rounded-2xl shadow-lg">
        <img
          src={OrderImg}
          alt="Order Image"
          className="w-full rounded-lg mb-4"
        />
        <div className="p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Order Summary
            </h2>
            <p className="text-gray-600">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={IconMusic} alt="Music Icon" className="w-8 h-8" />
              <p className="text-gray-800 font-semibold">
                Annual Plan <span className="text-gray-500">$59.99/year</span>
              </p>
            </div>
            <span className="text-blue-600 font-bold cursor-pointer hover:underline">
              Change
            </span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition">
            Proceed to Payment
          </button>

          <p className="text-center text-gray-500 mt-2 cursor-pointer hover:text-red-500">
            Cancel Order
          </p>
        </div>
      </div>
    </>
  );
}
