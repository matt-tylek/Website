// src/components/ServiceCard.js
function ServiceCard({ title, description, emoji }) {
  return (
    <div className="service-card">
      <div style={{ fontSize: '2rem' }}>{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;