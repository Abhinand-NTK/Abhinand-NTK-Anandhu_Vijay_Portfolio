import React from "react";

function Contact() {
  const phoneNumber = "918547650461"; // country code + number (no spaces)
  const email = "anandhu1017@gmail.com";

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" stroke="white" className="w-6 h-6" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      contact: "Kerala, India",
      title: "Based in",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" stroke="white" className="w-6 h-6" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.380-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      contact: "85476 50461",
      title: "Phone",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" stroke="white" className="w-6 h-6" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      contact: email,
      title: "Email",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M20.52 3.48A11.8 11.8 0 0012.03 0C5.39 0 .03 5.37.03 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.61A11.93 11.93 0 0012.03 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.51-8.52zM12.03 21.8c-1.85 0-3.66-.5-5.24-1.44l-.38-.23-3.67.96.98-3.58-.25-.37A9.73 9.73 0 012.3 12c0-5.37 4.36-9.73 9.73-9.73 2.6 0 5.05 1.01 6.89 2.85A9.68 9.68 0 0121.76 12c0 5.37-4.36 9.8-9.73 9.8zm5.48-7.34c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.91 1.22 3.11c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      ),
      contact: "Chat on WhatsApp",
      title: "WhatsApp",
      link: `https://wa.me/${phoneNumber}`,
    },
  ];

  return (
    <section className="bg-black flex flex-col justify-center">
      <div className="p-10 flex flex-col py-24">
        <div className="max-w-xl text-center mx-auto space-y-4">
          <p className="text-3xl text-white font-semibold">
            Let’s Work Together 🚀
          </p>
          <p className="text-lg text-gray-300">
            I create engaging and cinematic video content. If you need a creative
            editor for your next project, feel free to reach out.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap gap-12 justify-center text-white">
          {contactMethods.map((item, idx) => (
            <li key={idx} className="text-center">
              <h4 className="text-lg font-medium">{item.title}</h4>

              <div className="mt-3 flex items-center gap-3 justify-center min-w-[220px]">
                {item.icon}

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    {item.contact}
                  </a>
                ) : item.title === "Email" ? (
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-blue-400 transition"
                  >
                    {item.contact}
                  </a>
                ) : (
                  <p>{item.contact}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;