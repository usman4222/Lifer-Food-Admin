import EditorComponent from "../Components/EditorComponent";
import Wrapper from "../Components/Wrapper";
import TicketInfo from "../Components/TicketInfo";
import Head from "../Components/Head";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const TicketDescription = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Head
        heading={"Ticket Management"}
        para={"Admin Hub for Restaurant Requests"}
      />
      <FaArrowLeft
        size={22}
        className="text-textActive mt-2 ml-5 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 mx-3 gap-x-3 gap-y-5 mt-6">
        <div className="col-span-2 flex flex-col gap-y-3">
          <div className="flex bg-white shadow-xl flex-col h-fit min-h-40 py-4 rounded-lg md:w-full w-[90%] mx-auto">
            <div className="py-1 border-b mx-3 text-sm text-gray-800">
              Created - 6 April,2023
            </div>
            <div className="pt-4 mx-4 text-sm text-gray-800">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                sint soluta accusantium ipsam fugiat tempora quam delectus
                molestiae rem tenetur.
              </span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl px-4 py-3 md:w-full w-[90%] mx-auto">
            <EditorComponent />
          </div>
        </div>
        <TicketInfo />
      </div>
    </Wrapper>
  );
};

export default TicketDescription;
