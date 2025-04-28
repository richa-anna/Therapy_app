import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} LandingPage. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span className="hidden sm:inline text-foreground/30">|</span>

          <a href="#">Terms of Service</a>
          <span className="hidden sm:inline text-foreground/30">|</span>

          <a href="#">Contact</a>
          <span className="hidden sm:inline text-foreground/30">|</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
