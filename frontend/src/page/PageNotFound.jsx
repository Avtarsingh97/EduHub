import { useNavigate } from "react-router-dom";
import Nav from "@/components/Nav";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
    <Nav/>
      <div className="flex flex-col items-center justify-center h-screen bg-[#F5EEE9] text-center">
        <div className="max-w-lg p-4">
          <h1 className="text-6xl font-bold text-teal-800 mb-4">404</h1>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Oops! We can't find that page.
          </h2>
          <p className="mb-8 text-gray-600">
            It looks like the page you're looking for doesn't exist. You can
            head back to the homepage or try searching for something else.
          </p>
          <button
            onClick={goHome}
            className="bg-teal-700 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
