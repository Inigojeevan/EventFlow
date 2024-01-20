import Link from "next/link";
import styles from "../styles/home.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log(session?.user);
    } else {
      console.log("No USER");
    }
  }, [session]);

  const [contact, setContact] = useState({
    contactemail: "",
    message: "",
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  if (emailRef.current) {
    emailRef.current.value = contact?.contactemail || "";
  }

  if (messageRef.current) {
    messageRef.current.value = contact?.message || "";
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContact({ contactemail: "", message: "" });
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className={`mt-20 ${styles.home} w-full h-[90vh] md:h-screen shadow-md shadow-fuchsia-600`}>
        <div className="p-5 bg-opacity-25 border-2 border-fuchsia-600 bg-black shadow-gray-800 shadow-lg w-full md:w-2/3 h-[60%] md:h-[70%] rounded-2xl flex justify-center flex-col gap-5 md:gap-10 items-center">
          <h1 className="text-white decoration-white underline h-fit text-2xl md:text-4xl lg:text-5xl xl:text-6xl duration-200 ease-in-out hover:text-violet-300">
            EventFlow
          </h1>
          <p className="p-3 text-white text-sm md:text-lg lg:text-3xl xl:text-4xl font-semibold">
            Welcome to <span className="text-fuchsia-400">EventFlow</span>, where every event finds its ideal stage!
            Dive into a world of unforgettable moments as you explore a diverse range of top-notch venues tailored to
            your unique style and occasion. Our platform connects you with a network of expert vendors, ensuring every
            detail of your event is handled with precision. Join us in turning your vision into reality, where every
            event becomes a masterpiece.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-3 w-full md:w-full">
            <Link
              href="events"
              className="bg-violet-950 w-full md:w-full h-10 md:h-12 rounded-xl flex justify-center items-center font-bold duration-150 ease-in-out text-base md:text-xl lg:text-2xl xl:text-3xl hover:shadow-fuchsia-500 shadow-md border-2 hover:text-fuchsia-500 hover:border-fuchsia-600"
            >
              Go To Events
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-inherit w-full flex justify-center items-center mt-10 mb-5">
        <div className="flex justify-center items-center flex-col bg-black bg-opacity-40 p-5 w-2/5 rounded-xl">
          <p className="text-white mt-10 font-semibold md:text-4xl lg:text-5xl xl:text-6xl duration-200 ease-in-out hover:text-violet-300">
            Contact
          </p>
          <form onSubmit={handleSubmit} className="flex w-fit flex-col justify-center items-center mt-10 gap-5">
            <label className="mr-auto" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              onChange={handleChange}
              type="email"
              name="contactemail"
              className="pl-5 bg-black bg-opacity-50 outline-none focus:shadow-fuchsia-600 border-2 shadow-md w-32 md:w-60 h-10 rounded-xl"
            />
            <label className="mr-auto" htmlFor="message">
              Message
            </label>
            <textarea
              ref={messageRef}
              onChange={handleChange}
              name="message"
              className="pl-5 pt-2 bg-black bg-opacity-50 outline-none focus:shadow-fuchsia-600 border-2 shadow-md w-32 md:w-60 rounded-xl"
              rows={4}
            />
            <button type="submit" className="bg-white text-black font-semibold p-2 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
