import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, image, description, price, providerName, providerPhoto } =
    service;

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 border border-slate-200">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-[#00365c] mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>
      <div className="flex items-center gap-3 mb-4">
        <img
          src={providerPhoto}
          alt={providerName}
          className="w-10 h-10 rounded-full"
        />
        <span className="text-gray-700">{providerName}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-[#00365c]">${price}</p>
        <Link
          to={`/services/${_id}`}
          className="btn btn-sm bg-gradient-to-r from-[#00365c] to-[#01425a] text-white hover:from-[#01425a] hover:to-[#00365c]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
