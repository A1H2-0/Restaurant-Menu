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
      <div className="container w-[690px] h-[773px] flex flex-col gap-11">
        <h5 className="text-[#FF6B35] bg-[#FF6B351A] w-[170px] rounded-[15px] pl-[8px] font-[Poppins]">
          THE ART OF DINING
        </h5>
        <h1 className="w-[645px] font-[Poppins] text-[72px] text-[#FFFFFF] leading-20">
          Elevated culinary <span className="text-[#FF6B35]">experiences</span>
          for every palate.
        </h1>
        <h4 className="text-[#E5E7EB] w-[512px] text-[20px]">
          Discover a symphony of flavors crafted with locally sourced
          ingredients and exceptional passion.
        </h4>
        <div className="buttons flex gap-4">
          <button className="w-[160px] bg-[#FF6B35] flex justify-center items-center gap-2 text-[#FFFFFF] p-2 rounded-[10px]">
            <img src="public/Menu.png" alt="" />
            View Menu
          </button>
          <button className="w-[180px] bg-[#FFFFFF33] flex justify-center items-center gap-2 text-[#FFFFFF] p-1 rounded-[10px]">
            <img src="public/Calender.png" alt="" />
            Book a Table
          </button>
        </div>
        <div className="flex gap-4 mt-[25px] items-center">
          <img src="public/persons.png" alt="" />
          <h3 className="">
            <span className="text-[#FFFFFF]">4.9/5</span>
            <span className="text-[#E5E7EB]">
              from over 2,000+ happy diners
            </span>
          </h3>
        </div>
      </div>
    </div>
    <div className="bg-[#FFFFFF] flex justify-center">
      <div className="w-[1216px] flex justify-center items-center gap-[80px] mt-[128px]">
        <div className="relative w-[568px] h-[710px]">
          <img
            src="public/Professional chef carefully garnishing a gourmet plate in a high-end kitchen, close-up, shallow depth of field.png"
            alt=""
            className="w-[568px] h-[710px]"
          />
          <div class="absolute bottom-7 right-3 bg-[#202020] text-white w-40 p-4 flex flex-col justify-center rounded-[15px]">
            <h2 class="text-2xl font-bold leading-none">15+</h2>

            <p class="text-[9px] tracking-[2px] text-gray-400 mt-2 whitespace-nowrap">
              YEARS OF EXCELLENCE
            </p>
          </div>
        </div>
        <div className="w-[568px] flex flex-col gap-[30px]">
          <h1 className="font-[Poppins] text-[48px] w-[568px leading-[60px]">
            Crafting stories on every plate since{" "}
            <span className="text-[#FF6B35]">2008</span>.
          </h1>
          <h2 className="text-[#6B7280] text-[18px] ">
            Gourmet Bistro was born from a simple vision: to create a space
            where culinary excellence meets genuine hospitality. Our journey
            began in a small kitchen with big dreams, focusing on the purity of
            ingredients and the joy of shared meals.
          </h2>
          <h2 className="text-[#6B7280] text-[18px] ">
            Today, we continue that legacy, blending traditional techniques with
            modern innovation to bring you a menu that celebrates the best of
            the season.
          </h2>
          <div className="flex gap-[70px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[40px] h-[40px] bg-[#FF6B351A] flex items-center justify-center rounded-[15px]">
                <img
                  src="public/leave.png"
                  alt=""
                  className="h-[24px] w-[24px] "
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold font-[Poppins] font-[16px]">
                  Fresh Harvest
                </h1>
                <h2 className="w-[152.72000122070312px] text-[#6B7280] font-[Poppins]">
                  Daily sourced organic ingredients.
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[40px] h-[40px] bg-[#FF6B351A] flex items-center justify-center rounded-[15px]">
                <img
                  src="public/medal.png"
                  alt=""
                  className="h-[20px] w-[12px] "
                />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold font-[Poppins] font-[16px]">
                  Expert Chefs
                </h1>
                <h2 className="w-[212px] text-[#6B7280] font-[Poppins]">
                  Award-winning culinary team.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>,
);
