import { services } from '../data';
import { ServiceIcon } from './Icons';

export default function Services() {
  return (
    <section className="container services" id="products">
      <h2 className="services__title">Product and Services</h2>
      <div className="services__grid">
        {services.map((s) => (
          <article className="card" key={s.title}>
            <ServiceIcon name={s.icon} />
            <h3>{s.title}</h3>
            <p>{s.sub}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
