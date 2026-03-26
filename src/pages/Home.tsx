import partner1 from "@/assets/partners/partner-1.png";
import partner2 from "@/assets/partners/partner2.png";
import partner3 from "@/assets/partners/partner3.png";
import partner4 from "@/assets/partners/partner4.png";
import partner5 from "@/assets/partners/partner5.png";
import partner6 from "@/assets/partners/partner6.png";
import Reveal from "@/components/Reveal/Reveal";
import { faArrowRight, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Home.css";

const overviewItems = [
  {
    title: "SỨ MỆNH CỘNG ĐỒNG",
    description:
      "Là một trong những công ty tiên phong trong ứng dụng CNTT vào ngành Giáo dục tại Việt Nam. Vietinnotech có sứ mệnh giúp học sinh, sinh viên và giáo viên tiếp cận công nghệ giáo dục tiên tiến, nâng cao chất lượng học tập.",
  },
  {
    title: "ĐÓN ĐẦU CÔNG NGHỆ",
    description:
      "Với đội ngũ nhân lực giàu kinh nghiệm, Vietinnotech nghiên cứu và phát triển các sản phẩm phù hợp với xu hướng chuyển đổi số trong giáo dục trong nước và quốc tế.",
  },
  {
    title: "ĐỐI TÁC TIN CẬY",
    description:
      "Đồng hành cùng sự phát triển và thành công của các trường đại học và cơ sở giáo dục. Vietinnotech cam kết cung cấp phần mềm giáo dục chất lượng cao, chi phí hợp lý và dịch vụ hỗ trợ tận tâm.",
  },
  {
    title: "VƯƠN TẦM QUỐC TẾ",
    description:
      "Sản phẩm Vietinnotech tuân thủ các tiêu chuẩn quốc tế về công nghệ giáo dục. Chúng tôi đang mở rộng thị trường quốc tế và mang giá trị công nghệ Việt Nam ra toàn cầu.",
  },
];

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];
const partnerLoop = [...partners, ...partners];

function Home() {
  return (
    <main className="home-page page">
      <section className="home-hero">
        <div className="home-orb home-orb--blue" />
        <div className="home-orb home-orb--purple" />

        <div className="home-container home-hero__inner">
          <Reveal className="home-hero__copy glass-shell">
            <p className="section-kicker">Giải pháp giáo dục số</p>
            <h1 className="home-title">Tiên phong trong lĩnh vực chuyển đổi số giáo dục</h1>
            <p className="home-lead">
              Giải pháp phần mềm giáo dục chuyên nghiệp: Phòng học tích hợp OMO, quản lý học tập, và các giải pháp tích
              hợp dành cho trường đại học, trường cao đẳng và các cơ sở giáo dục.
            </p>

            <div className="home-actions">
              <Link to="/san-pham/phong-hoc-omo" className="home-button home-button--primary">
                Giải pháp OMO
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link to="/lien-he" className="home-button home-button--secondary">
                Liên hệ
              </Link>
            </div>
          </Reveal>

          <Reveal className="home-hero__visual glass-shell-strong" delay={120}>
            <div className="home-hero__summary">
              <p className="section-kicker">Tổng quan</p>
              <div className="home-hero__summary-list">
                {overviewItems.slice(0, 3).map((item, index) => (
                  <article key={item.title} className="home-hero__summary-item">
                    <div className="home-hero__summary-index">0{index + 1}</div>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <Reveal className="home-section__head section-copy">
            <p className="section-kicker">Tổng quan</p>
            <h2 className="section-title">Định hướng phát triển của Vietinnotech</h2>
          </Reveal>

          <div className="home-overview-grid">
            {overviewItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="home-overview-card glass-shell">
                  <div className="home-overview-card__index">0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <Reveal className="home-solution glass-shell">
            <div className="section-copy">
              <p className="section-kicker">Giải pháp chính</p>
              <h2 className="section-title">Giải pháp phần mềm giáo dục tiên tiến của Vietinnotech</h2>
              <p className="section-description">Giải pháp OMO - Phòng học tích hợp Online và Offline.</p>
            </div>

            <Link to="/san-pham/phong-hoc-omo" className="home-button home-button--primary">
              Tìm hiểu giải pháp
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <Reveal className="home-partners glass-shell">
            <div className="home-section__head section-copy">
              <p className="section-kicker">Đối tác giáo dục</p>
              <h2 className="section-title">Các đơn vị đã tin tưởng Vietinnotech</h2>
              <p className="section-description">
                Các trường đại học, trường cao đẳng và cơ sở giáo dục hàng đầu tại Việt Nam đã tin tưởng Vietinnotech.
              </p>
            </div>

            <div className="home-partner-marquee" aria-label="Danh sách đối tác">
              <div className="home-partner-track">
                <div className="home-partner-group">
                  {partners.map((partner, index) => (
                    <div key={`${index}-${partner}`} className="home-partner-tile">
                      <img src={partner} alt={`Đối tác ${index + 1}`} loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>

                <div className="home-partner-group home-partner-group--clone" aria-hidden="true">
                  {partnerLoop.map((partner, index) => (
                    <div key={`clone-${index}-${partner}`} className="home-partner-tile">
                      <img src={partner} alt="" loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section home-contact">
        <div className="home-container">
          <Reveal className="home-contact-panel glass-shell-strong">
            <div className="section-copy">
              <p className="section-kicker">Liên hệ</p>
              <h2 className="section-title">Kết nối với Vietinnotech</h2>
              <p className="section-description">Tầng 6, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội</p>
            </div>

            <div className="home-contact-meta">
              <div className="home-contact-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Tầng 6, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội</span>
              </div>
              <div className="home-contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:0906247699">0906 247 699</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Home;
