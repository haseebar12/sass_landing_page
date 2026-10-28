// Image exported from the Figma design (files live in /public/images).
export default function Photo({ name, alt = '', className = '' }) {
  return <img className={className} src={`/images/${name}`} alt={alt} />;
}
