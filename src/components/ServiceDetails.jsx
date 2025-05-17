import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.error("Error fetching service:", err));
  }, [id]);

  const handleBooking = async () => {
    const booking = {
      serviceId: service._id,
      serviceName: service.name,
      serviceImage: service.image,
      providerEmail: service.providerEmail,
      providerName: service.providerName,
      userEmail: user.email,
      userName: user.displayName,
      date,
      instruction,
      price: service.price,
      serviceStatus: "pending",
    };

    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("Service booked successfully!");
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error booking service:", error);
      toast.error("Booking failed.");
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 px-4 py-12">
      <Helmet>
        <title>Service Details | GadgetAid</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#00365c]">
          {service.name}
        </h2>

        <img
          src={service.image}
          alt={service.name}
          className="w-full rounded-lg mb-6"
        />

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Description:</span>{" "}
          {service.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <p>
              <strong>Service Area:</strong> {service.area}
            </p>
            <p>
              <strong>Price:</strong> ${service.price}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={service.providerPhoto}
              alt={service.providerName}
              className="w-12 h-12 rounded-full"
            />
            <p className="font-medium">{service.providerName}</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className="btn bg-gradient-to-r from-[#00365c] to-[#01425a] text-white px-6 hover:from-[#01425a] hover:to-[#00365c]"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full space-y-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-[#00365c] mb-2">
              Book Service
            </h3>

            <div className="grid grid-cols-1 gap-2">
              <input
                className="input input-bordered"
                value={service._id}
                readOnly
              />
              <input
                className="input input-bordered"
                value={service.name}
                readOnly
              />
              <input
                className="input input-bordered"
                value={service.image}
                readOnly
              />
              <input
                className="input input-bordered"
                value={service.providerEmail}
                readOnly
              />
              <input
                className="input input-bordered"
                value={service.providerName}
                readOnly
              />
              <input
                className="input input-bordered"
                value={user.email}
                readOnly
              />
              <input
                className="input input-bordered"
                value={user.displayName}
                readOnly
              />
              <input
                className="input input-bordered"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered"
                placeholder="Special instruction (address, plan, etc.)"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
              />
              <input
                className="input input-bordered"
                value={`$${service.price}`}
                readOnly
              />
              <button
                className="btn bg-gradient-to-r from-[#00365c] to-[#01425a] text-white hover:from-[#01425a] hover:to-[#00365c]"
                onClick={handleBooking}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ServiceDetails;
