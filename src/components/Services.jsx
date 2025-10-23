import React from 'react'
import { FaClinicMedical, FaRegSmile, FaSyringe, FaUserMd } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaClinicMedical className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Facelift Procedures",
      desc: "Restore a youthful glow with our safe and gentle facelift treatments.  ",
      link: "#facelift",
    },
    {
      icon: <FaUserMd className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Botox & Fillers",
      desc: "Smooth fine lines and restore volume with our expert Botox and filler treatments. ",
      link: "#botox",
    },
    {
      icon: <FaRegSmile className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Laser Treatments",
      desc: "Revitalize your skin with our advanced laser treatments that target blemishes, scars, and uneven tone.",
      link: "#laser",
    },
    {
      icon: <FaSyringe className="text-4xl text-pink-600" aria-hidden="true" />,
      title: "Body Contouring",
      desc: "Sculpt and define your body with our advanced contouring treatments.",
      link: "#contouring",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 overflow-hidden bg-linear-to-r from-pink-100 to-purple-100"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header data-aos="fade-up" data-aos-delay="500" className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Our <span className="text-pink-600">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of innovation and care with our exclusive range
             of beauty and wellness treatments.
          </p>
        </header>

        {/* Services List */}
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <li key={index}>
              <article
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <figure className="mb-6">{service.icon}</figure>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className='text-gray-600 mb-6 grow' >{service.desc}</p>
                <a
                  href={service.link}
                  className="text-pink-600 font-medium hover:text-pink-700 transition flex items-center mt-auto"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer data-aos="fade-up" data-aos-delay="600" className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to transform your look?
          </h3>
          <a
            href="#appointment"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
            aria-label="Book your consultation now"
          >
            Book Your Consultation Now
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Services;
