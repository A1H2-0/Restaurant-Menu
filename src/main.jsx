import Beautifull from "src/assets/beautifull.png";
import calender from "src/assets/Calender.png";
import close from "src/assets/Close-up of a stylish restaurant lounge area with velvet chairs and modern art.png";
import container from "src/assets/Container.png";
import facebook from "src/assets/facebook.png";
import fresh from "src/assets/Fresh seafood platter with oysters, shrimp, and lemon on a bed of ice, vibrant colors.png";
import friendly from "src/assets/Headshot of a friendly man in his 40s, outdoor lighting, casual attire.png";
import sophisticated from "src/assets/Headshot of a sophisticated woman in her 30s, warm studio lighting, professional attire.png";
import stylish from "src/assets/Headshot of a stylish young woman, natural sunlight, smiling.png";
import insta from "src/assets/insta.png";
import leave from "src/assets/leave.png";
import location from "src/assets/location.png";
import medal from "src/assets/medal.png";
import menu from "src/assets/Menu.png";
import message from "src/assets/message.png";
import persons from "src/assets/persons.png";
import professional from "src/assets/Professional chef carefully garnishing a gourmet plate in a high-end kitchen, close-up, shallow depth of field.png";
import SVG from "src/assets/SVG.png";
import tele from "src/assets/tele.png";
import topdown from "src/assets/Top-down view of a perfectly cooked medium-rare steak with rosemary and roasted vegetables on a white plate.png";
import twitter from "src/assets/twitter.png";
import vector1 from "src/assets/Vector (1).png";
import vector from "src/assets/Vector.png";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <header className="flex justify-around h-15 items-center">
      <div className="logo flex gap-2.5 items-center">
        <img src={SVG} alt="" className="bg-[#FF6B35] rounded-[10px] h-7.5" />
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
    <div
      className=" bg-[#F8F9FA] bg-no-repeat flex justify-center items-center h-[921.5900268554688px]"
      style={{ backgroundImage: `url(${container})` }}
    >
      <div className="container w-172.5 h-193.25 flex flex-col gap-11">
        <h5 className="text-[#FF6B35] bg-[#FF6B351A] w-42.5 rounded-[15px] pl-2 font-[Poppins]">
          THE ART OF DINING
        </h5>
        <h1 className="w-161.25 font-[Poppins] text-[72px] text-[#FFFFFF] leading-20">
          Elevated culinary <span className="text-[#FF6B35]">experiences</span>
          for every palate.
        </h1>
        <h4 className="text-[#E5E7EB] w-lg text-[20px]">
          Discover a symphony of flavors crafted with locally sourced
          ingredients and exceptional passion.
        </h4>
        <div className="buttons flex gap-4">
          <button className="w-40 bg-[#FF6B35] flex justify-center items-center gap-2 text-[#FFFFFF] p-2 rounded-[10px]">
            <img src={menu} alt="" />
            View Menu
          </button>
          <button className="w-45 bg-[#FFFFFF33] flex justify-center items-center gap-2 text-[#FFFFFF] p-1 rounded-[10px]">
            <img src={calender} alt="" />
            Book a Table
          </button>
        </div>
        <div className="flex gap-4 mt-6.25 items-center">
          <img src={persons} alt="" />
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
      <div className="w-304 flex justify-center items-center gap-20 mt-32">
        <div className="relative w-142 h-177.5">
          <img src={professional} alt="" className="w-142 h-177.5" />
          <div class="absolute bottom-7 right-3 bg-[#202020] text-white w-40 p-4 flex flex-col justify-center rounded-[15px]">
            <h2 class="text-2xl font-bold leading-none">15+</h2>

            <p class="text-[9px] tracking-[2px] text-gray-400 mt-2 whitespace-nowrap">
              YEARS OF EXCELLENCE
            </p>
          </div>
        </div>
        <div className="w-142 flex flex-col gap-7.5">
          <h1 className="font-[Poppins] text-[48px] w-[568px leading-15">
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
          <div className="flex gap-17.5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#FF6B351A] flex items-center justify-center rounded-[15px]">
                <img src={leave} alt="" className="h-6 w-6 " />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold font-[Poppins]">Fresh Harvest</h1>
                <h2 className="w-[152.72000122070312px] text-[#6B7280] font-[Poppins]">
                  Daily sourced organic ingredients.
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#FF6B351A] flex items-center justify-center rounded-[15px]">
                <img src={medal} alt="" className="h-5 w-3 " />
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold font-[Poppins]">Expert Chefs</h1>
                <h2 className="w-53 text-[#6B7280] font-[Poppins]">
                  Award-winning culinary team.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section 3 - Visual Feast */}
    <div className="bg-[#F8F9FA]  flex flex-col items-center pt-16.25 pb-12.5">
      <h1 className="font-[Poppins] font-bold text-[30px] text-[#202020]">
        Visual Feast
      </h1>

      <p className="text-[12px] text-[#6B7280] text-center w-100 mt-2 leading-4.5">
        A glimpse into our kitchen and the vibrant atmosphere we've created for
        you.
      </p>

      <div className="flex gap-3.5 mt-9.5">
        {/* Big Image */}
        <div>
          <img
            src={topdown}
            alt="Grilled steak"
            className="w-89 h-89 rounded-[20px]"
          />
        </div>

        {/* Right Images */}
        <div className="flex flex-col gap-7.5">
          {/* Seafood Image */}
          <div>
            <img
              src={fresh}
              alt="Fresh seafood"
              className="w-89 h-38.5 rounded-[20px]"
            />
          </div>

          {/* Bottom Images */}
          <div className="flex gap-3.5">
            <img
              src={close}
              alt="Restaurant interior"
              className="w-42.75 h-38.5  rounded-[20px]"
            />

            <img
              src={Beautifull}
              alt="Fresh cocktail"
              className="w-42.75 h-38.5 rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Section 4 - Guest Reviews */}
    <div className="bg-[#FFFFFF] h-117.5 flex justify-center pt-16.25">
      <div className="w-230">
        {/* Title and Arrows */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h1 className="font-[Poppins] font-bold text-[29px] leading-7.5 text-[#202020]">
              What our guests are
              <br />
              <span className="text-[#FF6B35]">saying.</span>
            </h1>

            <p className="text-[12px] text-[#6B7280] w-100 mt-3.5 leading-4.5">
              Real reviews from people who have experienced the magic of Gourmet
              Bistro.
            </p>
          </div>

          <div className="flex gap-1.5 mb-2.5">
            <button className="w-7.5 h-7.5 border border-[#E5E7EB] rounded-full flex justify-center items-center">
              <img src={vector} alt="" className="w-3.25 h-3.25" />
            </button>

            <button className="w-7.5 h-7.5 border border-[#E5E7EB] rounded-full flex justify-center items-center">
              <img src={vector1} alt="" className="w-3.25 h-3.25" />
            </button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="flex gap-4.5 mt-9">
          {/* Card 1 */}
          <div className="w-55 h-48.75 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[19px] p-4.5 flex flex-col">
            <h3 className="text-[#FF6B35] text-[15px] tracking-[1px]">☆☆☆☆☆</h3>

            <p className="text-[#202020] text-[11px] italic leading-4.5 mt-2">
              "The truffle burger is absolutely divine. The atmosphere is warm
              and the service is impeccable. Definitely our new favorite spot in
              the city."
            </p>

            <div className="flex items-center gap-2 mt-auto">
              <img
                src={sophisticated}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold text-[#202020]">
                  Sarah Johnson
                </h4>
                <p className="text-[9px] text-[#6B7280]">Food Critic</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Featured */}
          <div className="w-55 h-48.75 bg-[#222222] rounded-[19px] p-4.5 flex flex-col shadow-xl">
            <h3 className="text-[#FF6B35] text-[15px] tracking-[1px]">☆☆☆☆☆</h3>

            <p className="text-[#FFFFFF] text-[11px] italic leading-4.5 mt-2">
              "An incredible dining experience. The attention to detail in every
              dish is remarkable. The wine pairing was perfect."
            </p>

            <div className="flex items-center gap-2 mt-auto">
              <img
                src={friendly}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold text-[#FFFFFF]">
                  Michael Ross
                </h4>
                <p className="text-[9px] text-[#9CA3AF]">Gourmet Traveler</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-55 h-48.75 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[19px] p-4.5 flex flex-col">
            <h3 className="text-[#FF6B35] text-[15px] tracking-[1px]">☆☆☆☆☆</h3>

            <p className="text-[#202020] text-[11px] italic leading-4.5 mt-2">
              "Perfect for special occasions. We celebrated our anniversary here
              and the staff went above and beyond to make it special."
            </p>

            <div className="flex items-center gap-2 mt-auto">
              <img
                src={stylish}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold text-[#202020]">
                  Olivia Martinez
                </h4>
                <p className="text-[9px] text-[#6B7280]">Local Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section 5 - Book a Table */}
    <div className="bg-[#F8F9FA] h-136.75 flex justify-center items-center">
      <div className="w-213.5 flex items-center justify-between">
        {/* Left Side */}
        <div className="w-102.5 flex flex-col">
          <h1 className="font-[Poppins] font-bold text-[34px] leading-8.75 text-[#202020]">
            Ready to experience it
            <br />
            yourself?
          </h1>

          <p className="text-[13px] text-[#6B7280] leading-5 mt-5.5 w-100">
            Book your table online in seconds. For parties larger than 10,
            please contact us directly via phone.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-8.75 h-8.75 bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl flex justify-center items-center shadow-sm">
              <img src={tele} alt="" className="w-4.25 h-4.25" />
            </div>

            <div className="flex flex-col">
              <p className="text-[10px] text-[#6B7280]">Call Us</p>

              <h3 className="font-[Poppins] font-bold text-[12px] text-[#202020]">
                +1 (555) 000-1234
              </h3>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mt-5.5">
            <div className="w-8.75 h-8.75 bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl flex justify-center items-center shadow-sm">
              <img src={location} alt="" className="w-4.25 h-4.25" />
            </div>

            <div className="flex flex-col">
              <p className="text-[10px] text-[#6B7280]">Visit Us</p>

              <h3 className="font-[Poppins] font-bold text-[12px] text-[#202020]">
                123 Culinary Ave, Food District
              </h3>
            </div>
          </div>
        </div>

        {/* Right Side - Reservation Form */}
        <div className="w-98 h-94.75 bg-[#FFFFFF] border border-[#E5E7EB] rounded-[28px] p-8.25 shadow-sm">
          {/* Name and Email */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-38.5 h-10.75 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-3.5 text-[11px] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-38.5 h-10.75 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-3.5 text-[11px] outline-none"
              />
            </div>
          </div>

          {/* Date, Time and Guests */}
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Date
              </label>

              <input
                type="date"
                className="w-24.25 h-10.5 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-2 text-[10px] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Time
              </label>

              <select className="w-24.25 h-10.5 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-2.5 text-[10px] outline-none">
                <option>7:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Guests
              </label>

              <select className="w-24.25 h-10.5 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-2 text-[10px] outline-none">
                <option>2 People</option>
                <option>1 Person</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6 People</option>
                <option>7 People</option>
                <option>8 People</option>
                <option>9 People</option>
                <option>10 People</option>
              </select>
            </div>
          </div>

          {/* Special Notes */}
          <div className="flex flex-col gap-1.75 mt-4.25">
            <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
              Special Notes
            </label>

            <textarea
              placeholder="Any allergies or special requests?"
              className="w-full h-18.75 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] p-3.5 text-[11px] outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full h-12.25 bg-[#FF6B35] text-[#FFFFFF] font-[Poppins] font-bold text-[12px] rounded-[13px] mt-5.25 shadow-lg">
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
    {/* Section 6 - Footer */}
    <footer className="bg-[#222222] h-88.5 flex justify-center pt-13.75">
      <div className="w-212.5">
        {/* Footer Content */}
        <div className="flex justify-between">
          {/* Brand */}
          <div className="w-47.5">
            <div className="flex items-center gap-1.75">
              <div className="w-7 h-7 bg-[#FF6B35] rounded-[9px] flex justify-center items-center">
                <img src={SVG} alt="" className="w-4.25 h-4.25" />
              </div>

              <h2 className="font-[Poppins] font-bold text-[14px] text-white whitespace-nowrap">
                Gourmet Bistro
              </h2>
            </div>

            <p className="text-[#6B7280] text-[11px] leading-4.5 mt-5.75">
              Bringing the art of dining to your table since 2008. Quality
              ingredients, exceptional service.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-5">
              <a
                href="#"
                className="w-7.25 h-7.25 bg-[#303030] rounded-full flex justify-center items-center"
              >
                <img src={insta} alt="Instagram" className="w-3.5 h-3.5" />
              </a>

              <a
                href="#"
                className="w-7.25 h-7.25 bg-[#303030] rounded-full flex justify-center items-center"
              >
                <img src={facebook} alt="Facebook" className="w-3.5 h-3.5" />
              </a>

              <a
                href="#"
                className="w-7.25 h-7.25 bg-[#303030] rounded-full flex justify-center items-center"
              >
                <img src={twitter} alt="Twitter" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-[Poppins] font-bold text-[12px] text-white mb-2">
              Quick Links
            </h3>

            <a href="#" className="text-[#6B7280] text-[11px]">
              Home
            </a>

            <a href="#" className="text-[#6B7280] text-[11px]">
              Digital Menu
            </a>

            <a href="#" className="text-[#6B7280] text-[11px]">
              Our Story
            </a>

            <a href="#" className="text-[#6B7280] text-[11px]">
              Reservations
            </a>
          </div>

          {/* Opening Hours */}
          <div className="w-48.75">
            <h3 className="font-[Poppins] font-bold text-[12px] text-white mb-5.75">
              Opening Hours
            </h3>

            <div className="flex justify-between mb-3.25">
              <p className="text-[#6B7280] text-[11px]">Mon - Thu</p>
              <p className="text-white text-[10px]">12:00 - 22:00</p>
            </div>

            <div className="flex justify-between mb-3.25">
              <p className="text-[#6B7280] text-[11px]">Fri - Sat</p>
              <p className="text-white text-[10px]">12:00 - 23:30</p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6B7280] text-[11px]">Sunday</p>
              <p className="text-white text-[10px]">11:00 - 21:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-48.75">
            <h3 className="font-[Poppins] font-bold text-[12px] text-white mb-5.75">
              Newsletter
            </h3>

            <p className="text-[#6B7280] text-[11px] leading-4.25">
              Get the latest recipes and event updates.
            </p>

            <div className="flex items-center gap-3 mt-4.5">
              <input
                type="email"
                placeholder="Your email"
                className="w-42.75 h-6.25 bg-[#303030] border border-[#3A3A3A] rounded-full px-3 text-[11px] text-white outline-none"
              />

              <button className="w-8 h-8.75 bg-[#FF6B35] rounded-[10px] flex justify-center items-center">
                <img src={message} alt="Subscribe" className="w-3.75 h-3.75" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#303030] mt-13.75"></div>

        {/* Copyright */}
        <div className="flex justify-between items-center mt-5.5">
          <p className="text-[#6B7280] text-[10px]">
            © 2024 Gourmet Bistro. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-[#6B7280] text-[10px]">
              Privacy Policy
            </a>

            <a href="#" className="text-[#6B7280] text-[10px]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>,
);
