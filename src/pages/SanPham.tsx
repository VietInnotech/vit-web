import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { Link } from "react-router-dom";
import "./SanPham.css";

const SanPham: React.FC = () => {
  const cards = [
    {
      title: "Giải pháp OMO",
      path: "/san-pham/phong-hoc-omo",
    },
  ];

  return (
    <main className="products-page page">
      <section className="products-hero glass-shell-strong">
        <div className="section-copy">
          <p className="section-kicker">Sản phẩm</p>
          <h1 className="section-title">Giải pháp chính của Vietinnotech</h1>
          <p className="section-description">Giải pháp phần mềm giáo dục tiên tiến của Vietinnotech.</p>
        </div>
      </section>

      <section className="products-grid">
        {cards.map((card) => (
          <article key={card.title} className="product-card glass-shell">
            <h2>{card.title}</h2>
            <p>Giải pháp OMO - Phòng học tích hợp Online và Offline.</p>
            <Link to={card.path} className="product-card__link">
              Tìm hiểu thêm
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default SanPham;
