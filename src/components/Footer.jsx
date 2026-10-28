import { footerColumns } from '../data';
import { Logo, SocialIcon } from './Icons';

export default function Footer() {
  return (
    <div className="container footer-wrap">
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <Logo variant="footer" />
            <p>264 Manon road F1 456 caron Town</p>
            <p>Office No 3457</p>
            <p>info@salem.com</p>
            <p>1-800-356-6522</p>
            <div className="footer__social">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((k) => (
                <a key={k} href="#" aria-label={k}>
                  <SocialIcon kind={k} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col footer__app">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Tackle you’re Banking with our Mobile app and Make Your Life Easy.</p>
            <img className="footer__stores" src="/images/stores.png" alt="Get it on Google Play and the App Store" />
          </div>
        </div>
      </footer>
    </div>
  );
}
