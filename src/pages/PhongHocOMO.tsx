import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDays,
  faDisplay,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PDFViewer from "../components/PDFViewer/PDFViewer";
import "./PhongHocOMO.css";

const benefits = [
  {
    icon: faDisplay,
    title: "Phòng học tích hợp",
    text: "Tạo một lớp học online và offline trên cùng một luồng thao tác.",
  },
  {
    icon: faCalendarDays,
    title: "Lịch học thống nhất",
    text: "Lập lịch, nhắc việc và đồng bộ lịch trình cho từng lớp học.",
  },
  {
    icon: faUsers,
    title: "Tương tác trực tuyến",
    text: "Tham gia một chạm, theo dõi trạng thái và hoạt động lớp nhanh hơn.",
  },
];

function PhongHocOMO() {
  return (
    <main className="omo-detail-page page">
      <section className="omo-detail-hero glass-shell">
        <div className="omo-detail-hero__copy">
          <p className="section-kicker">Giải pháp OMO</p>
          <h1 className="omo-detail-title">Phòng học tích hợp Online và Offline</h1>
          <p className="omo-detail-lead">
            Giải pháp học tập kết hợp Online và Offline (OMO) dành cho các trường đại học, trường
            cao đẳng và cơ sở giáo dục. Cung cấp nền tảng tích hợp để quản lý lớp học, bài giảng,
            và tương tác học tập giữa giáo viên và học sinh.
          </p>

          <div className="omo-detail-actions">
            <Link to="/lien-he" className="omo-detail-button omo-detail-button--primary">
              Liên hệ triển khai
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/phan-mem-omo" className="omo-detail-button omo-detail-button--secondary">
              Xem phần mềm OMO
            </Link>
          </div>
        </div>

        <div className="omo-detail-hero__panel glass-shell-strong">
          {benefits.map((item) => (
            <article key={item.title} className="omo-detail-card">
              <FontAwesomeIcon icon={item.icon} className="omo-detail-card__icon" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="omo-detail-view glass-shell-strong">
        <div className="omo-detail-view__head">
          <div>
            <p className="section-kicker">Catalogue</p>
            <h2 className="section-title">Tài liệu giới thiệu giải pháp OMO</h2>
          </div>
          <p className="omo-detail-view__hint">Nội dung catalogue được hiển thị trực tiếp bên dưới.</p>
        </div>

        <div className="omo-detail-view__frame">
          <PDFViewer src="/catalog/Catalogue_PhongHocOMO.pdf" />
        </div>
      </section>
    </main>
  );
}

export default PhongHocOMO;
