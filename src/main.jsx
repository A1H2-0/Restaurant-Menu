import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <header className="flex justify-around h-15 items-center">
      <div className="logo flex gap-2.5 items-center">
        <img
          src="/public/SVG.png"
          alt=""
          className="bg-[#FF6B35] rounded-[10px] h-7.5"
        />
        <h1 className="font-bold font-[Poppins]">Gourmet Bistro</h1>
      </div>
      <div className="a-links flex gap-8 ">
        <a href="" className="text-gray-500">
          Home
        </a>
        <a href="" className="text-gray-500">
          Menu
        </a>
        <a href="" className="text-gray-500">
          Our Story
        </a>
        <a href="" className="text-gray-500">
          Gallery
        </a>
      </div>

      <button className="bg-[#FF6B35] rounded-[20px] text-[#FFFFFF] p-2 font-[Poppins]">
        Book a Table
      </button>
    </header>
    <div className=" bg-[#F8F9FA] bg-[url('public/Container.png')] bg-no-repeat flex justify-center items-center h-[921.5900268554688px]">
      <div className="container w-[690px] h-[773px] flex flex-col gap-6">
        <h5 className="text-[#FF6B35] bg-[#FF6B351A] w-[170px] rounded-[15px] pl-[8px] font-[Poppins]">
          THE ART OF DINING
        </h5>
        <h1 className="w-[645px] font-[Poppins] text-[72px] text-[#FFFFFF] leading-tight">
          Elevated culinary <span className="text-[#FF6B35]">experiences</span>
          for every palate.
        </h1>
        <h4 className="text-[#E5E7EB] w-[512px] text-[20px]">
          Discover a symphony of flavors crafted with locally sourced
          ingredients and exceptional passion.
        </h4>

        <button className="w-[192px] bg-[#FF6B35] flex justify-center items-center gap-2 text-[#FFFFFF] p-2 rounded-[15px]">
          <img src="public/Menu.png" alt="" />
          View Menu
        </button>
        <button></button>
      </div>
    </div>
  </>,
);
