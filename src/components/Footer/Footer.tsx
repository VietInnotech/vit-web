import "@/components/Footer/Footer.css";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";

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
              <li>Tầng 6, Tòa nhà 199 Bà Triệu, Hai Bà Trưng, TP Hà Nội</li>
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
                  href="https://www.facebook.com/Vietinnotech"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
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
