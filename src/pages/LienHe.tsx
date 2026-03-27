import Reveal from "@/components/Reveal/Reveal";
import { faClock, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import "./LienHe.css";

const contactPoints = [
  {
    icon: faLocationDot,
    title: "Địa chỉ",
    text: "Tầng 7, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội",
  },
  {
    icon: faPhone,
    title: "Điện thoại",
    text: "0906 247 699",
  },
  {
    icon: faClock,
    title: "Thời gian",
    text: "Thứ 2 - Thứ 6, 08:30 - 17:30",
  },
];

const LienHe: React.FC = () => {
  return (
    <main className="contact-page page">
      <section className="contact-shell glass-shell-strong">
        <Reveal className="contact-copy">
          <p className="section-kicker">Liên hệ</p>
          <h1 className="contact-title">Liên Hệ Với Chúng Tôi</h1>
          <p className="contact-lead">
            Nếu bạn cần tư vấn, hãy gọi trực tiếp hoặc ghé văn phòng theo thông tin dưới đây.
          </p>

          <div className="contact-points">
            {contactPoints.map((item) => (
              <article key={item.title} className="contact-point glass-shell">
                <FontAwesomeIcon icon={item.icon} className="contact-point__icon" />
                <div>
                  <p className="contact-point__title">{item.title}</p>
                  <p className="contact-point__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default LienHe;
