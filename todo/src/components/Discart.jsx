import { useDispatch } from "react-redux";
import { setShowDiscardPage, setShowTodoForm } from "../features/appSlice";

function Discard({ text }) {
  const dispatch = useDispatch();
  const discartPages = () => {
    dispatch(setShowDiscardPage(false));
    dispatch(setShowTodoForm(false));
  };
  const closeDiscartPage = () => {
    dispatch(setShowDiscardPage(false));
  };
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-center items-center">
      <div className="flex  flex-col justify-around  items-center bg-white rounded px-5 py-2 w-70 h-30 ">
        <label className="font-semibold">{text}</label>
        <div className="flex justify-around items-center w-full  ">
          <button
            className="text-white font-semibold bg-red-500 rounded px-5 py-1 cursor-pointer"
            onClick={discartPages}
          >
            Yes
          </button>
          <button
            className="bg-green-400 font-semibold text-white rounded px-2 py-1 cursor-pointer "
            onClick={closeDiscartPage}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discard;
