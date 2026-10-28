export default function Newsletter() {
  return (
    <section className="container newsletter">
      <div className="newsletter__box">
        <img className="newsletter__icon" src="/images/newsletter.png" alt="" />
        <h3>Subscribe to our newsletter</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter Email" aria-label="Email" />
          <button className="btn btn--yellow" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
