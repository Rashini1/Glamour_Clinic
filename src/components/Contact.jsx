 import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import contactImg from '../assets/contactImg.png';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-pink-600 text-xl" />,
      title: "Our Location",
      content: (
        <p className="text-gray-600">
          123 Beauty Avenue, Medical Road, <br />
          Colombo.
        </p>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-pink-600 text-xl" />,
      title: "Phone Numbers",
      content: (
        <p className="text-gray-600">
          Appointments:{" "}
          <a href="#" className="hover:text-pink-600">
            +94 11 234 5678
          </a>
          <br />
          Emergency:{" "}
          <a href="#" className="hover:text-pink-600">
            +94 71 234 5678
          </a>
        </p>
      ),
    },
    {
      icon: <FaEnvelope className="text-pink-600 text-xl" />,
      title: "Email",
      content: (
        <p className="text-gray-600">
          <a href="#" className="hover:text-pink-600">
            info@glamourclinic.com
          </a>
          <br />
          <a href="#" className="hover:text-pink-600">
            appoint@glamourclinic.com
          </a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-pink-600 text-xl" />,
      title: "Working Hours",
      content: (
        <p className="text-gray-600">
          Sunday-Thursday: 9:00 AM - 8:00 PM <br />
          Friday: 2:00 PM - 9:00 PM <br />
          Saturday: Closed
        </p>
      ),
    },
  ];

  const services = [
    { value: "botox", label: "Botox Treatments" },
    { value: "fillers", label: "Dermal Fillers" },
    { value: "laser", label: "Laser Therapy" },
    { value: "facelift", label: "Non-Surgical Facelift" },
    { value: "other", label: "Other" },
  ];

  return (
    <article
      id="contact"
      className="py-20 overflow-hidden bg-linear-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-pink-100 opacity-30 z-0" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Contact <span className="text-pink-600">Our Clinic</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Get in touch with us to schedule appointments or ask questions.
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE */}
          <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
            <section className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              <address className="space-y-6 not-italic">
                {contactItems.map((item, index) => (
                  <article key={index} className="flex items-start">
                    <figure className="bg-pink-100 p-3 rounded-full mr-4 shrink-0">
                      {item.icon}
                    </figure>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </article>
                ))}
              </address>

              <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src={contactImg}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Clinic interior"
                  loading="lazy"
                />
              </figure>
            </section>
          </aside>

          {/* RIGHT SIDE */}
          <section data-aos="fade-up" data-aos-delay="600" className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+94 XX XXX XXX"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </fieldset>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your concerns or question"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* MAP */}
        <figure
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=79.85%2C6.85%2C80.00%2C6.98&layer=mapnik"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Clinic Location Map"
            className="rounded-2xl"
          />
        </figure>
      </div>
    </article>
  );
};

export default Contact;
