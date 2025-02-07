import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the worker path to a locally installed version
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div style={{ height: "600px", overflow: "auto" }}>
      <Document file={pdfUrl}>
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
};

export default PDFViewer;
