import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data); 
      });
  }, []);

  // Search filter logic on searchText change
  useEffect(() => {
    if (!searchText) {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(
        (service) =>
          service.name &&
          service.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  }, [searchText, services]);
  

  return (
    <>
      <Helmet>
        <title>Services || GadgetAid</title>
      </Helmet>

      <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00365c] text-center mb-6">
            All Available Services
          </h2>

          {/* Search Input */}
          <div className="max-w-md mx-auto mb-10">
            <input
              type="text"
              placeholder="Search services by name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00365c]"
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No services matched your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
