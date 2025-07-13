import Skills from "../Components/Skills";
import Introduction from "../Components/Introduction";
import Projects from "../Components/Projects";
import MoreInfo from "../Components/MoreInfo";

function Portfolio() {
  return (
    <div className="overflow-x-hidden">
      <Introduction />
      <Skills />
      <Projects />
      <MoreInfo />
    </div>
  );
}

export default Portfolio;
