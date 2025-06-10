import type { JSX } from "react";
import { contactList } from "../assets/data/data";
import Title from "./Title";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

type ContactSidebarProps = {
  isOpen: boolean;
};

type ContactIcon = { icon: JSX.Element };

function ContactSidebar({ isOpen }: ContactSidebarProps) {
  const ListContactIcons: ContactIcon[] = [
    { icon: <FaPhone /> },
    { icon: <MdEmail /> },
    { icon: <IoLogoGithub /> },
  ];

  return (
    <div
      className={`${isOpen ? "flex justify-center items-center" : "hidden"}
       min-w-screen w-screen max-w-screen min-h-screen h-screen max-h-screen bg-black/80
       fixed top-0 left-0 right-0 z-50 p-5 lg:px-0`}
    >
      <div
        className="w-full lg:w-[30%] p-5 h-auto bg-white rounded-lg flex flex-col
         gap-5 items-center lg:flex-row"
      >
        <div className="flex gap-4 mt-5">
          <div className="w-8 lg:w-10 h-44 bg-primary flex flex-col justify-center items-center">
            {ListContactIcons.map((item, index) => (
              <p key={index} className="font-semibold text-lg lg:text-xl text-white mt-6 lg:mt-7.5">
                {item.icon}
              </p>
            ))}
          </div>

          <div>
            <Title className="text-start ">
              <span className="border-b-2 border-black/80 text-2xl font-bold">
                Contact
              </span>
              <span className="inline-block text-primary ms-2 text-2xl font-bold">
                Info
              </span>
            </Title>
            <div>
              {contactList.map((item) => (
                <p
                  key={item.id}
                  className="font-medium text-base lg:text-lg text-black/70 mt-4"
                >
                  {item.info}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSidebar;
