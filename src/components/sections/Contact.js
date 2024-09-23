import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary py-[50px] ">
      <div className="main-container">
        <h2 className="reveal-effect title text-right flex mb-5 ">
          Contactanos
        </h2>
        <p className="reveal-effect">
          Visitanos cuando gustes y vive la experiencia de
          <span className="text-secondary"> Asados La Guacareña</span>
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* LEFT SIDE */}
          <div className=" w-full md:w-[30%] description-text">
            {/* Email */}
            <div className="mt-10 slideIn-effect">
              <i className="fa-solid fa-envelope mb-5 text-[22px]"></i>
              <h3 className="subtitle ">Email</h3>
              <p className=" leading-8">
                Envianos un correo si tienes alguna duda <br />{" "}
                <span className=" underline">
                  asadoslaguacarena@laguacarena.com
                </span>
              </p>
            </div>

            {/* Phones */}
            <div className="mt-10 slideIn-effect">
              <i className="fa-solid fa-phone mb-5 text-[22px]"></i>
              <h3 className="subtitle  ">Teléfono</h3>
              <p>
                <span className="underline">WhatsApp: </span>+58 424-4466994
                <br />
                <span className="underline">Delivery: </span>+58 424-4407611
              </p>
            </div>

            {/* Location */}
            <div className="mt-10 slideIn-effect">
              <i className="fa-solid fa-location-dot mb-5 text-[22px]"></i>
              <h3 className="subtitle ">Ubicación</h3>
              <p className=" leading-8 mb-5">
                Avenida Bolivar Local 103 Sector Guacara, Carabobo, Zona Postal
                2015, diagonal a Pirelli
              </p>

              <a
                href="https://www.google.com/maps/place/Restaurant+La+Guacare%C3%B1a/@10.2232077,-67.8930979,15z/data=!3m1!4b1!4m6!3m5!1s0x8e804248685a6983:0x5632e3df91375a8!8m2!3d10.2232079!4d-67.8827982!16s%2Fg%2F11b_2yt69b?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                className=" text-secondary "
                target="_blank"
              >
                Abrir en maps <i className="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="w-full flex flex-col  items-center justify-end md:ml-5 md:w-[60%]">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4751599568262!2d-67.8827982!3d10.223207899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e804248685a6983%3A0x5632e3df91375a8!2sRestaurant%20La%20Guacare%C3%B1a!5e0!3m2!1ses-419!2sve!4v1725887903876!5m2!1ses-419!2sve"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[10px] w-full h-[300px] mt-10 xs:h-[400px] md:mt-0 md:w-[90%] "
            ></iframe>
            {/* Social Media */}
            <div className="mt-5 flex flex-col items-center gap-5 xs:flex-row">
              <div className=" flex flex-row items-baseline xs:flex-col xs:items-center sm:flex-row sm:items-baseline">
                <i className="fa-brands fa-whatsapp mr-2 text-[#25D366]"></i>
                <a
                  href="https://wa.me/584244466994"
                  className="description-text hover:text-secondary transition-all"
                  target="_blank"
                >
                  +58 424-4466994
                </a>
              </div>

              <div className="flex flex-row items-baseline xs:flex-col xs:items-center sm:flex-row sm:items-baseline">
                <i className="fa-brands fa-instagram mr-2 text-[#E1306C]"></i>
                <a
                  href="https://www.instagram.com/asadoslaguacarena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="description-text hover:text-secondary transition-all"
                  target="_blank"
                >
                  @asadoslaguacarena
                </a>
              </div>

              <div className="flex flex-row items-baseline xs:flex-col xs:items-center sm:flex-row sm:items-baseline">
                <i className="fa-brands fa-facebook mr-2 text-[#4267B2]"></i>
                <a
                  href="https://www.facebook.com/p/asadoslaguacarena-100063767852983/"
                  className="description-text hover:text-secondary transition-all"
                  target="_blank"
                >
                  @asadoslaguacarena
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
