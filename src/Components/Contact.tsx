import { contactList } from "../assets/data/data";
import Title from "./Title";

function Contact() {
  return (
    <div className="mb-5">
      <div className="w-full h-auto flex justify-between items-center">
        <Title title="Contact me" align="text-start" />
        <hr className="w-1/2 h-2 ms-auto rounded-l-full bg-primary border-0" />
      </div>

      <div>
        {contactList.map((item) => (
          <div key={item.id}>
            <p className="font-semibold text-lg text-black/70 mt-3">
              {item.abbreviation} : {item.info}
            </p>
          </div>
        ))}
      </div>
  </div>
  );
}

export default Contact;
