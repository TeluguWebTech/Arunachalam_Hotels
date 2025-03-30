import React from "react";

const HotelsList = () => {
  const hotels = [
    {
      name: "TPS Lodge",
      address: "North Ammani Amman Gopuram Street",
      distance: "500 meters from temple",
      phone: "04175-252577",
      location: "https://maps.app.goo.gl/SFanJymPscfxiMAu9",
      price: "800 onwards",
    },
    {
      name: "GJK Rooms",
      address: "North Ammani Amman Gopuram Street",
      distance: "500 meters from temple",
      phone: "94430 06416, 79043 00749",
      location: "https://maps.app.goo.gl/ghAsPv61GQ2zf5vo7",
      price: "500 onwards",
    },
    {
      name: "CS Lodge",
      address: "West Pey Gopuram Road",
      distance: "800 meters from temple",
      phone: "04175-225751, 94875 92851",
      location: "https://maps.app.goo.gl/NvSqB7eM48dB7Xh76",
      price: "1000 onwards",
    },
    {
      name: "Sri Ram Lodge",
      address: "West Pey Gopuram Road (Opp Sakthi Cinema)",
      distance: "",
      phone: "94438 10601",
      location: "https://maps.app.goo.gl/n5MN1ZGMR9Ui3yU79",
      price: "600 onwards",
    },
    {
      name: "Azhagananda Swamigal Madalayam",
      address: "West Pey Gopuram Road",
      distance: "",
      phone: "97894 05146",
      location: "https://maps.app.goo.gl/Zzp4dUkz8MVZJhwV7",
      price: "150 onwards (basic)",
    },
    {
      name: "OYA Madam",
      address: "South Tirumanjana Gopuram",
      distance: "",
      phone: "99625 22806, 04175 - 224962",
      location: "https://maps.app.goo.gl/t2imkE1UgVFv87UU8",
      price: "800 onwards",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">GoTiruvannamalai</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">STAYING OPTIONS</h2>
        <p className="text-gray-600 mb-4">Choose your place of choice</p>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-gray-600">Search hotels by Name / Distance / Price</p>
          <div className="flex gap-4">
            <span className="font-medium text-gray-700">Tariff Range</span>
            <span className="font-medium text-gray-700">Temple Distance</span>
          </div>
        </div>
        
        <div className="border-t border-gray-300 my-4"></div>
      </div>

      <div className="space-y-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
            <p className="text-gray-600 mb-2">{hotel.address}</p>
            
            {hotel.distance && (
              <div className="flex items-center text-gray-600 mb-2">
                <span>Get Location {hotel.distance}</span>
              </div>
            )}
            
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <span className="text-gray-700 font-medium">@ {hotel.phone}</span>
              <a 
                href={hotel.location} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View on Map
              </a>
              <span className="text-green-700 font-medium">{hotel.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsList;