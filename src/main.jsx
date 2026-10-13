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
    {/* Section 3 - Visual Feast */}
    <div className="bg-[#F8F9FA]  flex flex-col items-center pt-[65px] pb-[50px]">
      <h1 className="font-[Poppins] font-bold text-[30px] text-[#202020]">
        Visual Feast
      </h1>

      <p className="text-[12px] text-[#6B7280] text-center w-[400px] mt-[8px] leading-[18px]">
        A glimpse into our kitchen and the vibrant atmosphere we've created for
        you.
      </p>

      <div className="flex gap-[14px] mt-[38px]">
        {/* Big Image */}
        <div>
          <img
            src="public/Top-down view of a perfectly cooked medium-rare steak with rosemary and roasted vegetables on a white plate.png"
            alt="Grilled steak"
            className="w-[356px] h-[356px] rounded-[20px]"
          />
        </div>

        {/* Right Images */}
        <div className="flex flex-col gap-[30px]">
          {/* Seafood Image */}
          <div>
            <img
              src="public/Fresh seafood platter with oysters, shrimp, and lemon on a bed of ice, vibrant colors.png"
              alt="Fresh seafood"
              className="w-[356px] h-[154px] rounded-[20px]"
            />
          </div>

          {/* Bottom Images */}
          <div className="flex gap-[14px]">
            <img
              src="public/Close-up of a stylish restaurant lounge area with velvet chairs and modern art.png"
              alt="Restaurant interior"
              className="w-[171px] h-[154px]  rounded-[20px]"
            />

            <img
              src="public/Beautifully crafted colorful cocktail with fruit garnish and ice, professional product photography.png"
              alt="Fresh cocktail"
              className="w-[171px] h-[154px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Section 4 - Guest Reviews */}
    <div className="bg-[#FFFFFF] h-[470px] flex justify-center pt-[65px]">
      <div className="w-[920px]">
        {/* Title and Arrows */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h1 className="font-[Poppins] font-bold text-[29px] leading-[30px] text-[#202020]">
              What our guests are
              <br />
              <span className="text-[#FF6B35]">saying.</span>
            </h1>

            <p className="text-[12px] text-[#6B7280] w-[400px] mt-[14px] leading-[18px]">
              Real reviews from people who have experienced the magic of Gourmet
              Bistro.
            </p>
          </div>

          <div className="flex gap-[6px] mb-[10px]">
            <button className="w-[30px] h-[30px] border border-[#E5E7EB] rounded-full flex justify-center items-center">
              <img
                src="public/Vector.png"
                alt=""
                className="w-[13px] h-[13px]"
              />
            </button>

            <button className="w-[30px] h-[30px] border border-[#E5E7EB] rounded-full flex justify-center items-center">
              <img
                src="public/Vector (1).png"
                alt=""
                className="w-[13px] h-[13px]"
              />
            </button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="flex gap-[18px] mt-[36px]">
          {/* Card 1 */}
          <div className="w-[220px] h-[195px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[19px] p-[18px] flex flex-col">
            <h3 className="text-[#FF6B35] text-[15px] tracking-[1px]">☆☆☆☆☆</h3>

            <p className="text-[#202020] text-[11px] italic leading-[18px] mt-[8px]">
              "The truffle burger is absolutely divine. The atmosphere is warm
              and the service is impeccable. Definitely our new favorite spot in
              the city."
            </p>

            <div className="flex items-center gap-[8px] mt-auto">
              <img
                src="public/Headshot of a sophisticated woman in her 30s, warm studio lighting, professional attire.png"
                alt=""
                className="w-[32px] h-[32px] rounded-full object-cover"
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
          <div className="w-[220px] h-[195px] bg-[#222222] rounded-[19px] p-[18px] flex flex-col shadow-xl">
            <h3 className="text-[#FF6B35] text-[15px] tracking-[1px]">☆☆☆☆☆</h3>

            <p className="text-[#FFFFFF] text-[11px] italic leading-[18px] mt-[8px]">
              "An incredible dining experience. The attention to detail in every
              dish is remarkable. The wine pairing was perfect."
            </p>

            <div className="flex items-center gap-[8px] mt-auto">
              <img
                src="public/Headshot of a friendly man in his 40s, outdoor lighting, casual attire.png"
                alt=""
                className="w-[32px] h-[32px] rounded-full object-cover"
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
          <div className="w-[220px] h-[195px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[19px] p-[18px] flex flex-col">
            <h3 className="text-[#FF6B35] text-[15px] tracking-[1px]">☆☆☆☆☆</h3>

            <p className="text-[#202020] text-[11px] italic leading-[18px] mt-[8px]">
              "Perfect for special occasions. We celebrated our anniversary here
              and the staff went above and beyond to make it special."
            </p>

            <div className="flex items-center gap-[8px] mt-auto">
              <img
                src="public/Headshot of a stylish young woman, natural sunlight, smiling.png"
                alt=""
                className="w-[32px] h-[32px] rounded-full object-cover"
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
    <div className="bg-[#F8F9FA] h-[547px] flex justify-center items-center">
      <div className="w-[854px] flex items-center justify-between">
        {/* Left Side */}
        <div className="w-[410px] flex flex-col">
          <h1 className="font-[Poppins] font-bold text-[34px] leading-[35px] text-[#202020]">
            Ready to experience it
            <br />
            yourself?
          </h1>

          <p className="text-[13px] text-[#6B7280] leading-[20px] mt-[22px] w-[400px]">
            Book your table online in seconds. For parties larger than 10,
            please contact us directly via phone.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-[12px] mt-[32px]">
            <div className="w-[35px] h-[35px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] flex justify-center items-center shadow-sm">
              <img src="public/tele.png" alt="" className="w-[17px] h-[17px]" />
            </div>

            <div className="flex flex-col">
              <p className="text-[10px] text-[#6B7280]">Call Us</p>

              <h3 className="font-[Poppins] font-bold text-[12px] text-[#202020]">
                +1 (555) 000-1234
              </h3>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-[12px] mt-[22px]">
            <div className="w-[35px] h-[35px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] flex justify-center items-center shadow-sm">
              <img
                src="public/location.png"
                alt=""
                className="w-[17px] h-[17px]"
              />
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
        <div className="w-[392px] h-[379px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[28px] p-[33px] shadow-sm">
          {/* Name and Email */}
          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-[154px] h-[43px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-[14px] text-[11px] outline-none"
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-[154px] h-[43px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-[14px] text-[11px] outline-none"
              />
            </div>
          </div>

          {/* Date, Time and Guests */}
          <div className="flex gap-[16px] mt-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Date
              </label>

              <input
                type="date"
                className="w-[97px] h-[42px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-[8px] text-[10px] outline-none"
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Time
              </label>

              <select className="w-[97px] h-[42px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-[10px] text-[10px] outline-none">
                <option>7:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
                Guests
              </label>

              <select className="w-[97px] h-[42px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] px-[8px] text-[10px] outline-none">
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
          <div className="flex flex-col gap-[7px] mt-[17px]">
            <label className="font-[Poppins] font-medium text-[10px] text-[#202020]">
              Special Notes
            </label>

            <textarea
              placeholder="Any allergies or special requests?"
              className="w-full h-[75px] bg-[#F8F9FA] border border-[#E5E7EB] rounded-[13px] p-[14px] text-[11px] outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full h-[49px] bg-[#FF6B35] text-[#FFFFFF] font-[Poppins] font-bold text-[12px] rounded-[13px] mt-[21px] shadow-lg">
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
    {/* Section 6 - Footer */}
    <footer className="bg-[#222222] h-[354px] flex justify-center pt-[55px]">
      <div className="w-[850px]">
        {/* Footer Content */}
        <div className="flex justify-between">
          {/* Brand */}
          <div className="w-[190px]">
            <div className="flex items-center gap-[7px]">
              <div className="w-[28px] h-[28px] bg-[#FF6B35] rounded-[9px] flex justify-center items-center">
                <img
                  src="public/SVG.png"
                  alt=""
                  className="w-[17px] h-[17px]"
                />
              </div>

              <h2 className="font-[Poppins] font-bold text-[14px] text-white whitespace-nowrap">
                Gourmet Bistro
              </h2>
            </div>

            <p className="text-[#6B7280] text-[11px] leading-[18px] mt-[23px]">
              Bringing the art of dining to your table since 2008. Quality
              ingredients, exceptional service.
            </p>

            {/* Social Icons */}
            <div className="flex gap-[10px] mt-[20px]">
              <a
                href="#"
                className="w-[29px] h-[29px] bg-[#303030] rounded-full flex justify-center items-center"
              >
                <img
                  src="public/insta.png"
                  alt="Instagram"
                  className="w-[14px] h-[14px]"
                />
              </a>

              <a
                href="#"
                className="w-[29px] h-[29px] bg-[#303030] rounded-full flex justify-center items-center"
              >
                <img
                  src="public/facebook.png"
                  alt="Facebook"
                  className="w-[14px] h-[14px]"
                />
              </a>

              <a
                href="#"
                className="w-[29px] h-[29px] bg-[#303030] rounded-full flex justify-center items-center"
              >
                <img
                  src="public/twitter.png"
                  alt="Twitter"
                  className="w-[14px] h-[14px]"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-[Poppins] font-bold text-[12px] text-white mb-[8px]">
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
          <div className="w-[195px]">
            <h3 className="font-[Poppins] font-bold text-[12px] text-white mb-[23px]">
              Opening Hours
            </h3>

            <div className="flex justify-between mb-[13px]">
              <p className="text-[#6B7280] text-[11px]">Mon - Thu</p>
              <p className="text-white text-[10px]">12:00 - 22:00</p>
            </div>

            <div className="flex justify-between mb-[13px]">
              <p className="text-[#6B7280] text-[11px]">Fri - Sat</p>
              <p className="text-white text-[10px]">12:00 - 23:30</p>
            </div>

            <div className="flex justify-between">
              <p className="text-[#6B7280] text-[11px]">Sunday</p>
              <p className="text-white text-[10px]">11:00 - 21:00</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-[195px]">
            <h3 className="font-[Poppins] font-bold text-[12px] text-white mb-[23px]">
              Newsletter
            </h3>

            <p className="text-[#6B7280] text-[11px] leading-[17px]">
              Get the latest recipes and event updates.
            </p>

            <div className="flex items-center gap-[12px] mt-[18px]">
              <input
                type="email"
                placeholder="Your email"
                className="w-[171px] h-[25px] bg-[#303030] border border-[#3A3A3A] rounded-full px-[12px] text-[11px] text-white outline-none"
              />

              <button className="w-[32px] h-[35px] bg-[#FF6B35] rounded-[10px] flex justify-center items-center">
                <img
                  src="public/message.png"
                  alt="Subscribe"
                  className="w-[15px] h-[15px]"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#303030] mt-[55px]"></div>

        {/* Copyright */}
        <div className="flex justify-between items-center mt-[22px]">
          <p className="text-[#6B7280] text-[10px]">
            © 2024 Gourmet Bistro. All rights reserved.
          </p>

          <div className="flex gap-[24px]">
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
