import logo from "./assets/profile2.png";
import cover from "./assets/coverImage.png";
import callIcon from "./assets/icons8-call.gif";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white  overflow-hidden relative">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={cover}
              alt="Almond Cakes & Coffee"
              className="w-full h-72 rounded-l-[50px] object-cover"
            />

            {/* Logo Box Positioned Over Image */}
            <div className="absolute -bottom-20 right-4 z-20">
              <div className="w-42 h-42 p-1">
                <img
                  src={logo}
                  alt="Almond Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-12 pb-6">
            <div className="mt-15 flex   gap-2 ml-10 mr-10">
              <a
                href="#_"
                class="px-5 py-2.5 w-full font-medium bg-[#FFBA00] hover:bg-[#FFCB40] text-black rounded-lg text-sm"
              >
                <div className="flex justify-center items-center">
                  <span>اتصل بنا</span>
                  <img src={callIcon} alt="Call" className="w-5 h-5 ml-2" />
                </div>
              </a>
            </div>

            <div className="mt-10 space-y-2 flex flex-col items-center gap-4">
              <a
                href="https://www.facebook.com/share/15awphX6Bc/?mibextid=qi2Omg"
                className="btn btn-outline border-[#FFBA00] hover:bg-[#FFCB40] text-black btn-info w-full max-w-xs rounded-lg flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <img
                  width="33"
                  height="33"
                  src="https://img.icons8.com/fluency/48/facebook-circled.png"
                  alt="facebook-circled"
                />
              </a>

              <a
                href="http://wa.me/+972598754700"
                className="btn btn-outline border-[#FFBA00] hover:bg-[#FFCB40] text-black btn-info w-full max-w-xs rounded-lg flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                whatsapp
                <img
                  width="33"
                  height="33"
                  src="https://img.icons8.com/color/48/whatsapp--v1.png"
                  alt="whatsapp--v1"
                />
              </a>
            </div>
          </div>
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3309.2194062621516!2d35.454531684840994!3d31.861991881257946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDUxJzQzLjIiTiAzNcKwMjcnMDguNCJF!5e1!3m2!1sar!2s!4v1751663356568!5m2!1sar!2s"
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
