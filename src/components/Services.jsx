import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Services || GadgetAid</title>
      </Helmet>

      <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00365c] text-center mb-10">
            All Available Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
