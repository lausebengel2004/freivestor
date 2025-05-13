import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const DiagnosePaketButton: React.FC = () => {
  const handleZip = async () => {
    const zip = new JSZip();
    const files = ["system-log.md", "diagnose-markdown"];
    files.forEach(key => {
      const content = localStorage.getItem(key);
      if (content) zip.file(key + ".md", content);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "diagnosepaket.zip");
  };

  return <button onClick={handleZip}>📦 Diagnosepaket (.zip)</button>;
};

export default DiagnosePaketButton;