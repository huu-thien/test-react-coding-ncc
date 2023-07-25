import "./CardItem.scss";
const CardItem = () => {
  return (
    <div className="card-item">
      <h2 className="card-title">Lorem ipsum dolor sit amet</h2>
      <div className="card-content">
        <img src="https://ncc.asia/assets/images/about_our-img.webp" alt="" />
        <p className="card-des">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          omnis ut aliquid provident itaque rerum, quidem obcaecati a sed
          exercitationem culpa, id dolore ipsam. Error tempora adipisci non
          saepe sed.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus omnis ut aliquid provident itaque rerum, quidem obcaecati
          a sed exercitationem culpa, id dolore ipsam. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptatibus omnis ut aliquid
          provident itaque rerum, quidem obcaecati a sed exercitationem culpa,
          id dolore ipsam.
        </p>
      </div>
    </div>
  );
};

export default CardItem;
