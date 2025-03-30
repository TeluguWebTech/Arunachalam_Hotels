import React, { useState } from "react";
import Map from "../components/Map";
import { hotels } from "../data";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("");


  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         hotel.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = !priceRange || (
      priceRange === "under500" ? hotel.priceValue < 500 :
      priceRange === "500-1000" ? hotel.priceValue >= 500 && hotel.priceValue <= 1000 :
      priceRange === "over1000" ? hotel.priceValue > 1000 : true
    );
    
    const matchesDistance = !distanceFilter || (
      distanceFilter === "under500" ? parseInt(hotel.distance) < 500 :
      distanceFilter === "500-1000" ? parseInt(hotel.distance) >= 500 && parseInt(hotel.distance) <= 1000 :
      distanceFilter === "over1000" ? parseInt(hotel.distance) > 1000 : true
    );
    
    return matchesSearch && matchesPrice && matchesDistance;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans bg-gray-50 min-h-screen mt-18">
      {/* Banner Image with Text Overlay */}
      <div className="relative mb-8 rounded-lg overflow-hidden">
        <img 
          src="/assets/temple.jpg" 
          alt="Tiruvannamalai Temple" 
          className=" opacity-60 w-full h-64 object-cover"
        />
   <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
 
  <h2 className="banText text-4xl md:text-6xl font-bold mb-6">
    STAYING OPTIONS
  </h2>
  <p className="subBan text-2xl md:text-4xl text-green-800 font-medium">
    Choose your place of choice
  </p>
</div>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search hotels by name or address..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
            <select
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Price Ranges</option>
              <option value="under500">Under ₹500</option>
              <option value="500-1000">₹500 - ₹1000</option>
              <option value="over1000">Over ₹1000</option>
            </select>
            
            <select
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={distanceFilter}
              onChange={(e) => setDistanceFilter(e.target.value)}
            >
              <option value="">All Distances</option>
              <option value="under500">Under 500m</option>
              <option value="500-1000">500m - 1km</option>
              <option value="over1000">Over 1km</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hotels List */}
      <div className="space-y-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-2">
                  <Map location={hotel.coordinates} />
                  <div className="subSec flex justify-between text-center mt-2">
                    <a href={hotel.location} target="_blank" rel="noopener noreferrer" className="location text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Get Location
                    </a>
                    {hotel.distance && <p className="text-gray-600 text-sm mt-1">{hotel.distance}</p>}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 p-6 relative">
                  <div className="price absolute top-6 right-6">
                    <div className="circle flex items-center justify-center bg-orange-900 rounded-full w-30 h-25 border-2 border-orange-900">
                      <span className="text-white font-medium text-center">{hotel.price}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 pr-24">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel.address}</p>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700 font-medium">{hotel.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-600 text-lg">No hotels match your search criteria.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => {
                setSearchTerm("");
                setPriceRange("");
                setDistanceFilter("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;