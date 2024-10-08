import React from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data);
        console.log(data.vans);
      });
  }, [params.id]);
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.vans.imageUrl} />
          <i className={`van-type ${van.vans.type} selected`}>
            {van.vans.type}
          </i>
          <h2>{van.vans.name}</h2>
          <p className="van-price">
            <span>${van.vans.price}</span>/day 
          </p>
          <p>{van.vans.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
