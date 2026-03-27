import "@/components/Footer/Footer.css";
import logo from "assets/logo.png";
import topcvLogo from "assets/nhSN501.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-shell glass-shell-strong">
        <div className="footer-top">
          <div className="ft-brand">
            <img src={logo} alt="Vietinnotech" className="ft-logo" />
            <p className="ft-slogan">
              Giải pháp giáo dục số toàn diện dành cho trường đại học, trường cao đẳng và các cơ sở giáo dục.
            </p>
          </div>

          <div className="ft-col">
            <p className="ft-list-title">LIÊN HỆ</p>
            <ul className="ft-list-items simple">
              <li>Tầng 7, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội</li>
              <li>
                <a href="tel:0906247699">0906 247 699</a>
              </li>
            </ul>
          </div>

          <div className="ft-col">
            <p className="ft-list-title">ĐIỀU HƯỚNG</p>
            <ul className="ft-list-items simple">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/san-pham/phong-hoc-omo">Giải pháp OMO</Link>
              </li>
              <li>
                <Link to="/lien-he">Liên hệ</Link>
              </li>
            </ul>
          </div>

          <div className="ft-col">
            <p className="ft-list-title">THEO DÕI</p>
            <ul className="ft-social-links">
              <li>
                <a
                  href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-vietinnotech/251610.html"
                  title="Follow at TopCV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={topcvLogo} alt="TopCV logo" width="30" height="30" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Vietinnotech</div>
          <div>Designed &amp; supported by Vietinnotech</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
