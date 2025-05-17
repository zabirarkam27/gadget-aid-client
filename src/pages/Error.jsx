import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div>
        <img src="/404.png" className="w-96 mx-auto" />
        <h1 className="text-6xl font-extrabold text-red-700">Oops!</h1>
        <p className="text-red-800 mt-4 mb-10">
          We couldn't find the page you were looking for.
        </p>
        <Link to="/" className="mt- px-4 py-2 bg-blue-600 text-white rounded">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
