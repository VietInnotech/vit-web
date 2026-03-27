type PartnerCardProps = {
  img: string;
  name?: string;
  title?: string;
};

function PartnerCard({ img, name, title }: PartnerCardProps) {
  return (
    <div className="dt-card">
      <img src={img} alt={name ?? "Partner logo"} className="dt-card-img" />
      {name ? <p className="dt-card-name">{name}</p> : null}
      {title ? <p className="dt-card-title">{title}</p> : null}
    </div>
  );
}

export default PartnerCard;
