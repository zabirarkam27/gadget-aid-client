import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        const limited = data.slice(0, 6);
        setServices(limited);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#00365c]">
            Popular Services
          </h2>
          <Link
            to="/services"
            className="btn bg-gradient-to-r from-[#00365c] to-[#01425a] text-white hover:from-[#01425a] hover:to-[#00365c]"
          >
            Show All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
