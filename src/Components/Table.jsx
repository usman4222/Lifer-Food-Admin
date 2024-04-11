import { IoMdArrowDropright } from "react-icons/io";
import TableFooter from "../Components/TableFooter";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
const Table = ({ tableRows, tableData, delIcon }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="overflow-x-auto bg-white rounded-md mx-5 ">
          <table className="table-auto min-w-full">
            <thead>
              <tr className="text-center border-b">
                {/* <th className="px-4 py-2">ID</th> */}
                {tableRows.map((item, index) => (
                  <th key={index} className="px-4 py-2 text-gray-500">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <>
                  <tr
                    className="text-center border-b text-gray-500"
                    key={item.userID}
                  >
                    <td className="px-4 py-2">
                      {delIcon ? (
                        <>
                          <span>John</span>
                        </>
                      ) : (
                        <img
                          className="rounded-full mx-auto"
                          src={item.displayPicture}
                          alt={item.restaurantName}
                        />
                      )}
                    </td>
                    <td className="px-4 py-2 ">
                      {delIcon ? (
                        <>
                          <span>Mcdonalds</span>
                        </>
                      ) : (
                        item.restaurantName
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {delIcon ? (
                        <>
                          <span>restaurant@gmail.com</span>
                        </>
                      ) : (
                        item.userID
                      )}
                    </td>
                    <td className="px-4 py-2 truncate">
                      {delIcon ? (
                        <>
                          <span>1294843</span>
                        </>
                      ) : (
                        item.location
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {delIcon ? (
                        <>
                          <span>1294843</span>
                        </>
                      ) : (
                        item.registrationDate
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {delIcon && <span>1294343</span>}
                    </td>
                    <td className="px-4 py-2">
                      {delIcon ? (
                        <MdDeleteForever size={22} className="cursor-pointer" />
                      ) : (
                        <IoMdArrowDropright
                          size={22}
                          className="cursor-pointer"
                          onClick={() =>
                            navigate(
                              "/registered-restaurants/register-restaurant"
                            )
                          }
                        />
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <TableFooter />
      </div>
    </>
  );
};

export default Table;
