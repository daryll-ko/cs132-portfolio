import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Reference: https://hackernoon.com/integrating-a-contact-form-with-emailjs-in-react

function Form() {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (input) => (e) => {
    const { value } = e.target;

    setInputState((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const allFilled =
    inputState.name.length > 0 &&
    inputState.email.length > 0 &&
    inputState.subject.length > 0 &&
    inputState.message.length > 0;

  return submitted ? (
    <div className="mb-16 flex h-60 flex-col justify-center gap-1 text-center">
      <p>Your response has been recorded.</p>
      <p>Thanks for submitting! :)</p>
    </div>
  ) : (
    <div className="mx-auto mb-16 md:max-w-[75%] lg:max-w-[50%]">
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="name" className="ml-4">
            Name
          </label>
          <input
            className="w-full rounded-md bg-black px-4 py-2"
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange("name")}
            value={inputState.name}
            required
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="email" className="ml-4">
            Email
          </label>
          <input
            className="w-full rounded-md bg-black px-4 py-2"
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange("email")}
            value={inputState.email}
            required
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="subject" className="ml-4">
            Subject
          </label>
          <input
            className="w-full rounded-md bg-black px-4 py-2"
            type="text"
            id="subject"
            name="subject"
            onChange={handleInputChange("subject")}
            value={inputState.subject}
            required
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="message" className="ml-4">
            Message
          </label>
          <textarea
            className="w-full rounded-md bg-black px-4 py-4"
            id="message"
            name="message"
            onChange={handleInputChange("message")}
            value={inputState.message}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="mx-auto mt-8 rounded-md bg-blue-600 py-2 px-6 text-lg text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!allFilled}
        >
          Submit!
        </motion.button>
      </form>
    </div>
  );
}

export default Form;
