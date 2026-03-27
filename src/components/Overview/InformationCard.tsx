type InformationCardProps = {
  title: string;
  description: string;
  icon: string;
};

function InformationCard({ title, description, icon }: InformationCardProps) {
  return (
    <div className="info-cards">
      <div className="info-card-icon">
        <img src={icon} alt="" aria-hidden="true" className="info-card-image" />
      </div>
      <p className="info-card-title">{title}</p>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InformationCard;
