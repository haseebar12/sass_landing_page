import Photo from './Photo';

export default function Feature({ image, title, subtitle, body, cta, flip }) {
  return (
    <section className={`feature ${flip ? 'feature--flip' : ''}`}>
      <div className={`dots ${flip ? 'dots--yellow' : 'dots--grey'}`} aria-hidden="true" />
      <Photo name={image} alt={title} className="feature__photo" />
      <div className="feature__text">
        <h2>
          {title}
          <span>{subtitle}</span>
        </h2>
        <p>{body}</p>
        <button className="btn btn--yellow">{cta}</button>
      </div>
    </section>
  );
}
