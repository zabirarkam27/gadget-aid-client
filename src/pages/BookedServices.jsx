import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/bookings?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching bookings:", err);
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <Helmet>
        <title>Booked Services | GadgetAid</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-[#00365c] mb-8">
        Your Booked Services
      </h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">
          You have no booked services yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-lg shadow-md p-4 border border-slate-200"
            >
              <img
                src={booking.serviceImage}
                alt={booking.serviceName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#00365c] mb-2">
                {booking.serviceName}
              </h3>
              <p>
                <strong>Provider:</strong> {booking.providerName}
              </p>
              <p>
                <strong>Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="capitalize">{booking.serviceStatus}</span>
              </p>
              <p>
                <strong>Price:</strong> ${booking.price}
              </p>
              {booking.instruction && (
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Instructions:</strong> {booking.instruction}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServices;
