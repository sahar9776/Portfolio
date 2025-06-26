import { useEffect, useState } from "react";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";

function DownloadResume() {
  const resumeURL = "/files/sahar-samadi.pdf";
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    showTopBtn &&
    pathname !== "/" && (
      <a
        href={resumeURL}
        download="Sahar-Samadi"
        target="_blank"
        className="w-10 h-10 flex justify-center items-center bg-white text-primary
           border border-[#ffc102] font-semibold rounded-full fixed bottom-10 left-10
           duration-500 ease-linear hover:shadow-lg"
      >
        <PiDownloadSimpleFill className="text-2xl" />
      </a>
    )
  );
}

export default DownloadResume;
