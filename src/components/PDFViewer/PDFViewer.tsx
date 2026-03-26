import "./PDFViewer.css";

type Props = {
  src: string;
  height?: number | string;
};

function PDFViewer({ src, height = "85vh" }: Props) {
  const frameHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div className="pdf-viewer-root">
      <iframe
        className="pdf-viewer-frame"
        src={src}
        title="Tài liệu catalogue PDF"
        loading="lazy"
        style={{ height: frameHeight }}
      >
        <p className="pdf-viewer-fallback">
          Trình duyệt của bạn không hiển thị được PDF trực tiếp.{" "}
          <a href={src} target="_blank" rel="noreferrer">
            Mở catalogue trong tab mới
          </a>
        </p>
      </iframe>
    </div>
  );
}

export default PDFViewer;
