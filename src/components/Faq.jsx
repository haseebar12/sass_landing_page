import { useState } from 'react';
import { faqs } from '../data';
import { ChevronDown } from './Icons';

export default function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <section className="container faq" id="faqs">
      <h2>Some frequently asked questions</h2>
      <ul>
        {faqs.map((q, i) => (
          <li key={q} className={open === i ? 'is-open' : ''}>
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span>{q}</span>
              <ChevronDown />
            </button>
            {open === i && <p>Please contact our support team for more details about this topic.</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
