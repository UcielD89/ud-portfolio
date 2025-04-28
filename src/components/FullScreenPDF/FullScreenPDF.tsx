import { useRef } from "react";

interface FullScreenPDFProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

function FullScreenPDF({ isOpen, fileUrl }: FullScreenPDFProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  if (!isOpen) return null;

  const handleFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) { // Safari
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).mozRequestFullScreen) { // Firefox
        (iframe as any).mozRequestFullScreen();
      } else if ((iframe as any).msRequestFullscreen) { // IE/Edge
        (iframe as any).msRequestFullscreen();
      }
    }
  };

  return (
    <div className="full-screen-pdf-container">
      <div className="full-screen-pdf-content">
        <button
          onClick={handleFullScreen}
          style={{
            padding: "8px 16px",
            background: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Cerrar
        </button>
      </div>
      <iframe ref={iframeRef} src={fileUrl} style={{ width: "100%", height: "100%", border: "none" }} />
    </div>
  );
}

export default FullScreenPDF;
