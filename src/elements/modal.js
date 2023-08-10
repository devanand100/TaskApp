// assets
import { ReactComponent as CrossIcon } from "../assets/cross.svg";

export const Modal = ({ title, onClose, children }) => {
  return (
    <div className="fixed h-full w-full bg-gray-300 z-10 bg-opacity-50 left-0 top-0  modal-bg">
      <div className="sm:w-11/12 md:w-6/12 xl:w-4/12 bg-white mt-20 mx-auto p-8 rounded-xl h-auto ">
        <div className="flex justify-between">
          <h1 className="text-3xl">{title}</h1>
          <button onClick={onClose}>
            <CrossIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
