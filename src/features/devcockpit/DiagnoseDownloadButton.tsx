import React from "react";

const DiagnoseDownloadButton: React.FC = () => {
  const handleDownload = () => {
    const content = localStorage.getItem("diagnose-markdown");
    if (!content) return alert("Keine Diagnose gefunden.");
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "diagnose.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleDownload}>📥 Diagnose herunterladen</button>;
};

export default DiagnoseDownloadButton;