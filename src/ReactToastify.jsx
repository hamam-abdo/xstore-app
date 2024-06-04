import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (item) => {
  toast(
    <div key={item.id} className="flex items-center  gap-5   justify-center">
      <div className=" flex-[.4]">
        <img src={item.img} alt="Podcast" />
      </div>
      <div className="flex-1">
        <h1 className=" duration-[0.4s] mb-2 text-max_color  cursor-pointer  hover:text-[#888] sm:text-[17px] font-medium  ">
          {item.title}
        </h1>
        <h3>success shopping </h3>
      </div>
    </div>,
    {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      className: " w-[400px] ",
    }
  );
};

export default notify;
