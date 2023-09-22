import { Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
    console.log("submitted form!");
    document.getElementById("contact").reset();
  };
  return (
    <form id="contact" name="contact" onSubmit={() => submit(event)}>
      <div className="flex bg-slate-100 dark:bg-gray-900 items-center justify-center w-full">
        <div className="bg-white p-6 my-10 w-full max-w-[500px] rounded-md dark:bg-gray-800">
          <h3 className="text-2xl my-3">Contact me</h3>
          <div className="mt-2 mb-1 block">
            <Label htmlFor="name" value="Your name:" />
          </div>
          <TextInput id="name" sizing={"md"} type="text" required />
          <div className="mt-2 mb-1 block">
            <Label htmlFor="email" value="Your email address:" />
          </div>
          <TextInput id="email" sizing={"md"} type="email" required />
          <div className="mt-2 mb-1 block">
            <Label htmlFor="message" value="Your message:" />
          </div>
          <Textarea
            id="message"
            placeholder="Leave a message"
            required
            riws={6}
          />
          <div className="w-full flex justify-between">
          <button type="reset" className="p-2 border-2 border-teal-400 rounded-lg bg-transparent mt-2">
              Start over
            </button>
            <button type="submit" className="p-2 flex gap-2 border-2 border-teal-400 rounded-lg bg-transparent mt-2">
              Send <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
