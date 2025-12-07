import { useForm, ValidationError } from "@formspree/react";
import { SOCIAL_LINKS } from "../../utils/data";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgeqnwd");

  return (
    <>
      <section id="contact" className="px-4 lg:px-54">
        <div className="container mx-auto h-full lg:grid lg:grid-cols-2 lg:items-stretch py-6 lg:py-12">
          {/* LEFT */}
          <div className="w-full h-full flex flex-col items-start justify-between gap-2">
            <div className="w-full lg:w-2/3 text-balance flex flex-col items-start justify-start gap-4">
              <h1 className="font-semibold text-4xl text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400">
                Contact me for collaboration
              </h1>
              <p className="text-zinc-400">
                Reach out today to discuss your project needs and start
                collaborating on something amazing!
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-transparent hover:text-black hover:bg-white rounded-xl border-2 border-zinc-700 flex items-center justify-center p-3 transition-colors duration-300"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          {state.submitting ? (
            <div className="w-full h-70 border-2 border-zinc-400 rounded-xl flex items-center justify-center overflow-hidden">
              <h3 className="text-center lg:text-left text-3xl lg:text-4xl text-balance text-transparent bg-linear-to-r bg-clip-text from-white to-zinc-400">
                Sending Message...
              </h3>
            </div>
          ) : state.succeeded ? (
            <div className="w-full h-70 border-2 border-zinc-400 rounded-xl flex items-center justify-center overflow-hidden">
              <h3 className="text-center lg:text-left text-3xl lg:text-4xl text-balance text-transparent bg-linear-to-r bg-clip-text from-white to-zinc-400">
                Thank you for contacting me.
              </h3>
            </div>
          ) : (
            <div className="w-full h-full">
              {/* ==== FORM ==== */}
              <form onSubmit={handleSubmit} className="xl:pl-10 2xl:pl-20">
                <div className="md:grid md:items-center justify-end md:grid-cols-2 md:gap-2">
                  {/* NAME */}
                  <div className="mb-4">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      placeholder="Your Name"
                      className="text-field"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="mb-4">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      placeholder="Your Email"
                      className="text-field"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mb-4">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    required
                    className="text-field resize-y min-h-32 max-h-80"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="cursor-pointer w-full justify-center text-zinc-100 bg-rose-700 hover:text-black hover:bg-rose-300 hover:scale-105 border-2 border-rose-600 rounded-xl flex items-center gap-2 px-4 py-2 transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
