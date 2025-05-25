import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/all-bookings");
        const data = await res.json();

        const filtered = data.filter(
          (booking) => booking.providerEmail === user?.email
        );
        setBookings(filtered);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchBookings();
    }
  }, [user?.email]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/all-bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status: newStatus } : booking
          )
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <Helmet>
        <title>Service-To-Do | GadgetAid</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-[#00365c] mb-8">
        Your Services Booked by Others
      </h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">
          No bookings found where you are the service provider.
        </p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-lg shadow-md p-5 border border-slate-200"
            >
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-[#00365c] mb-1">
                  {booking.serviceName}
                </h3>
                <p className="text-gray-700">
                  <strong>Customer:</strong> {booking.userEmail}
                </p>
                <p className="text-gray-700">
                  <strong>Status:</strong>{" "}
                  <span className="capitalize text-blue-700 font-medium">
                    {booking.status || "pending"}
                  </span>
                </p>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Update Status:
                </label>
                <select
                  className="w-full sm:w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={booking.status || "pending"}
                  onChange={(e) =>
                    handleStatusChange(booking._id, e.target.value)
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
