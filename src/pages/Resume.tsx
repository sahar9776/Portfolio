import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import { PiDownloadSimpleFill } from "react-icons/pi";

function Resume() {
  const docs = [
    {
      uri: "/files/sahar-samadi.pdf",
      fileType: "pdf",
      fileName: "Sahar-Samadi.pdf",
    },
  ];

  const resumeURL = "/files/sahar-samadi.pdf";
  
  return (
    <div className="w-full">
      <div className="container">
        <div className="w-full lg:w-[60%] mt-0.5 mx-auto">
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
