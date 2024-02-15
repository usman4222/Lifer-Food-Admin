import profile from "../assets/images/dummyUser.png";
import { TiEdit } from "react-icons/ti";
import { LuPause } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const RegRestaurant = () => {
  const naviagte = useNavigate();

  const shifter = () => {
    naviagte("/edit-restaurant");
  };

  return (
    <>
      <div>
        <div className="flex align-start justify-center md:pt-10 gap-x-10 md:flex-row flex-col pt-5 gap-y-6 mx-5 md:mx-0">
          <FaArrowLeft
            size={22}
            className="text-textActive cursor-pointer"
            onClick={() => naviagte(-1)}
          />
          <div className="bg-white px-10 rounded-xl">
            <div>
              <div className="flex justify-center pt-10">
                <img className="object-contain w-40" src={profile} />
              </div>
              <h6 className="text-center pt-4 pb-10 text-xl font-bold">
                McDonald’s{" "}
              </h6>
            </div>
            <div>
              <div className="flex flex-col pb-5 ">
                <span className="text-yellow-500">User ID</span>
                <span className="text-gray-800">#34347</span>
              </div>
              <div className="flex flex-col pb-5">
                <span className="text-yellow-500">Registration Date: </span>
                <span className="text-gray-800">02/09/2024 15:45 </span>
              </div>
              <div className="flex flex-col pb-5">
                <span className="text-yellow-500">Location:</span>
                <span className="text-gray-800">
                  3M6J+WWP, Sargodha, Punjab, Pakistan
                </span>
              </div>
              <div className="flex justify-evenly pt-5 pb-10 ">
                <div
                  className="flex bg-blue-500 px-6 py-1 rounded-lg shadow-2xl cursor-pointer"
                  onClick={shifter}
                >
                  <span className="px-2 pt-1 text-white">
                    <TiEdit />
                  </span>
                  <button className="text-white">Edit</button>
                </div>
                <div className="flex bg-yellow-400  px-6 py-1 rounded-lg shadow-2xl cursor-pointer">
                  <span className="px-2 pt-1 text-white">
                    <LuPause />
                  </span>
                  <button className="text-white">Hold</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegRestaurant;
