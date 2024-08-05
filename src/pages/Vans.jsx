import React from "react";

const Vans = () => {
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>Vans page</h2>
    </div>
  );
};

export default Vans;
