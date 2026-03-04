"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <img src="/kcf-logo.png" alt="KCF Logo" className="w-10" />
      <span className="font-semibold text-blue-900">
        Karthik Cranes & Forklifts
      </span>
    </div>

    {/* MENU */}
    <div className="hidden md:flex items-center gap-6">

      <a href="#services" className="hover:text-blue-700">
        Services
      </a>

      <a href="#equipment" className="hover:text-blue-700">
        Equipment
      </a>

      <a href="#contact" className="hover:text-blue-700">
        Contact
      </a>

      <a
        href="tel:+919379155177"
        className="bg-yellow-400 px-4 py-2 rounded-lg font-semibold"
      >
        Call
      </a>

      <a
        href="https://wa.me/919379155177"
        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
      >
        WhatsApp
      </a>

    </div>

  </div>

</nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center text-white pt-24">

  {/* VIDEO BACKGROUND */}

  <video
    autoPlay
    loop
    muted
    className="absolute w-full h-full object-cover"
  >
    <source src="/crane-video.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/50"></div>

  {/* HERO CONTENT */}

  <div className="relative z-10 px-6">

    <img src="/kcf-logo.png" alt="KCF Logo" className="w-40 mx-auto mb-6" />

    <h1 className="text-5xl font-bold">
      KARTHIK CRANES & FORKLIFTS
    </h1>

    <p className="mt-6 text-xl max-w-2xl mx-auto">
      23+ Years of Trusted Crane & Forklift Rental Services
      in Bangalore for Factories, Construction Sites and Warehouses
    </p>

    <div className="mt-8 flex gap-4 justify-center">

      <a
        href="tel:+919379155177"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/919379155177"
        className="bg-green-500 px-6 py-3 rounded-lg font-bold"
      >
        WhatsApp
      </a>

    </div>

  </div>

</section>


      {/* SERVICES */}
      <motion.section
       id="services"
       className="py-20 text-center"
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
      >

        <h2 className="text-4xl font-bold mb-12 text-blue-900">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 px-10">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Crane Rental
            </h3>
            <p>Heavy duty cranes available with skilled operators.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Forklift Rental
            </h3>
            <p>Industrial forklifts for factories and warehouses.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Operators & Helpers
            </h3>
            <p>Experienced team ensuring safe lifting operations.</p>
          </div>

        </div>

      </motion.section>

{/* EQUIPMENT SECTION */}

<section id="equipment" className="py-20 bg-gray-100 text-center">

  <h2 className="text-4xl font-bold text-blue-900 mb-12">
    Our Equipment
  </h2>

  <div className="grid md:grid-cols-3 gap-10 px-10 max-w-6xl mx-auto">

    {/* HYDRA */}

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
       src="/hydra.jpg"
       alt="Hydra Crane"
       className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
     />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900">
          Hydra Crane
        </h3>
        <p className="mt-2">
          Reliable hydra cranes for heavy lifting and construction work.
        </p>
      </div>
    </div>

    {/* F15 */}

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
       src="/f15.jpg"
       className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
     />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900">
          F15 Crane
        </h3>
        <p className="mt-2">
          Powerful F15 crane suitable for industrial lifting tasks.
        </p>
      </div>
    </div>

    {/* FORKLIFT */}

    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
      src="/forklift.jpg"
      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900">
          Industrial Forklift
        </h3>
        <p className="mt-2">
          Efficient forklifts for warehouse and factory material handling.
        </p>
      </div>
    </div>

  </div>

</section>


{/* WORK GALLERY */}

<section className="py-20 text-center">

  <h2 className="text-4xl font-bold text-blue-900 mb-12">
    Our Work in Action
  </h2>

  <div className="grid md:grid-cols-3 gap-10 px-10 max-w-6xl mx-auto">

    {/* HYDRA VIDEO */}

    <video
      controls
      className="rounded-xl shadow-lg"
    >
      <source src="/hydra-demo.mp4" type="video/mp4" />
    </video>

    {/* F15 VIDEO */}

    <video
      controls
      className="rounded-xl shadow-lg"
    >
      <source src="/f15-demo.mp4" type="video/mp4" />
    </video>

    {/* FORKLIFT VIDEO */}

    <video
      controls
      className="rounded-xl shadow-lg"
    >
      <source src="/forklift-demo.mp4" type="video/mp4" />
    </video>

  </div>

</section>


{/* FOUNDER SECTION */}

<section className="py-20 bg-gray-100 text-center">

  <h2 className="text-4xl font-bold text-blue-900 mb-12">
    Founder
  </h2>

  <div className="max-w-3xl mx-auto">

    <img
      src="/founder.jpg"
      className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
    />

    <h3 className="text-2xl font-bold mt-6">
      C Srinivasulu
    </h3>

    <p className="mt-4 text-gray-700 px-6">
      Founder of Karthik Cranes & Forklifts with over
      23 years of experience in crane and forklift services.
      Dedicated to providing reliable lifting solutions
      for factories, warehouses and construction projects
      across Bangalore.
    </p>

  </div>

</section>


{/* CREW SECTION */}

<section className="py-20 text-center">

  <h2 className="text-4xl font-bold text-blue-900 mb-6">
    Our Expert Crew
  </h2>

  <p className="text-gray-600 max-w-2xl mx-auto mb-12">
    Our experienced operators and support crew ensure safe,
    efficient and reliable lifting operations for factories,
    warehouses and construction sites.
  </p>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10">

    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src="/crew1.jpg" className="w-full h-64 object-cover" />
    </div>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src="/crew2.jpg" className="w-full h-64 object-cover" />
    </div>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src="/crew3.jpg" className="w-full h-64 object-cover" />
    </div>

  </div>

</section>

      {/* EXPERIENCE */}
      <section className="bg-yellow-400 py-20 text-center">

        <h2 className="text-5xl font-bold text-blue-900">
          23+ Years Experience
        </h2>

        <p className="mt-4 text-lg">
          Trusted by factories, warehouses and construction companies in Bangalore
        </p>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center bg-gray-200">

        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Contact Us
        </h2>

        <p>Bangalore, Karnataka</p>

        <p className="mt-2">Founder: C Srinivasulu</p>

        <p className="mt-2">Manager: Uday Kulal</p>

        <p className="mt-2 font-semibold">
          Phone: +91 9379155177
        </p>

      </section>

      {/* GOOGLE MAP */}

<section className="py-20 text-center bg-gray-100">

  <h2 className="text-4xl font-bold text-blue-900 mb-10">
    Our Location
  </h2>

  <div className="max-w-6xl mx-auto px-6">

    <iframe
      src="https://www.google.com/maps?q=445/142/6%20Anugodanhalli%20Hobli%20Devalapur%20Hoskote%20Karnataka%20560117&output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      loading="lazy"
      className="rounded-xl shadow-lg"
    ></iframe>

  </div>


</section>
{/* FLOATING CONTACT BUTTONS */}

<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

  {/* CALL BUTTON */}

  <a
    href="tel:+919379155177"
    className="bg-yellow-400 text-black px-4 py-3 rounded-full shadow-lg font-semibold hover:bg-yellow-300"
  >
    📞 Call
  </a>

  {/* WHATSAPP BUTTON */}

  <a
    href="https://wa.me/919379155177"
    className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg font-semibold hover:bg-green-400"
  >
    💬 WhatsApp
  </a>

</div>

    </main>
  );
}