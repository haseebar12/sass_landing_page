import Photo from './Photo';

export default function Security() {
  return (
    <div className="container security-wrap">
      <section className="security" id="security">
        <div className="security__bar" aria-hidden="true" />
        <div className="dots dots--yellow-sm" aria-hidden="true" />
        <div className="dots dots--light dots--security" aria-hidden="true" />
        <Photo name="security.png" alt="Security padlock" className="security__photo" />
        <div className="security__text">
          <h2>
            Security &amp; <span>Compliance</span>
          </h2>
          <p>
            Experience the pinnacle of security with underlining our unwavering dedication to safeguarding your data at
            all times. Trust in our fortified infrastructure, equipped with state-of-the-art encryption and secure
            storage measures, ensuring your sensitive information is protected, confidential, and accurate.
          </p>
          <button className="btn btn--yellow">Get Started</button>
        </div>
      </section>
    </div>
  );
}
