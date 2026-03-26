import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./LienHe.css";

const contactPoints = [
  {
    icon: faLocationDot,
    title: "Địa chỉ",
    text: "Tầng 6, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội",
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormData({ name: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="contact-page page">
      <section className="contact-shell glass-shell-strong">
        <div className="contact-copy">
          <p className="section-kicker">Liên hệ</p>
          <h1 className="contact-title">Liên Hệ Với Chúng Tôi</h1>
          <p className="contact-lead">
            Hãy để lại thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất.
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
        </div>

        <form className="contact-form glass-shell" onSubmit={handleSubmit}>
          <div className="contact-form__head">
            <p className="section-kicker">Gửi tin nhắn</p>
            <h2>Gửi Tin Nhắn</h2>
          </div>

          <div className="form-group">
            <label htmlFor="name">Họ tên *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nhập họ tên của bạn"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Tiêu đề *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Chủ đề liên hệ"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Nội dung *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Nhập tin nhắn của bạn..."
            />
          </div>

          <button type="submit" className="contact-submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Gửi tin nhắn
          </button>
        </form>
      </section>
    </main>
  );
};

export default LienHe;
