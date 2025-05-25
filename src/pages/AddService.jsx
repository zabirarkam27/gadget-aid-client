import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleAddService = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;

    const newService = {
      image,
      name,
      price,
      area,
      description,
      providerName: user.displayName,
      providerEmail: user.email,
      providerImage: user.photoURL,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("Service added successfully!");
        form.reset();

        setTimeout(() => {
          navigate("/services");
        }, 1500);
      } else {
        toast.error("Failed to add service. Try again.");
      }
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 px-4 py-12">
      <Helmet>
        <title>Add Service | GadgetAid</title>
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#00365c]">
          Add New Service
        </h2>

        <form onSubmit={handleAddService} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Service Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              required
              className="input input-bordered w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Price ($)</span>
              </label>
              <input
                type="number"
                name="price"
                required
                className="input input-bordered w-full"
                min={0}
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <input
              type="text"
              name="area"
              required
              className="input input-bordered w-full"
              placeholder="e.g., Dhanmondi, Dhaka"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              required
              rows="4"
              className="textarea textarea-bordered w-full"
              placeholder="Describe the service..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn bg-gradient-to-r from-[#00365c] to-[#01425a] text-white w-full mt-4 hover:from-[#01425a] hover:to-[#00365c]"
          >
            {loading ? "Adding..." : "Add Service"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddService;
