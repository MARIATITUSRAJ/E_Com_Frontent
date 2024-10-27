import React from "react";
import "./Popular.css";
import popularProducts from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  //const [popularProducts,setPopularProducts] = useState([]);
  //useEffect(() => {
    //fetch('https://localhost:5000/popularinwomen')
      //.then((response) => {
        //if (!response.ok) {
          //throw new Error('Network response was not ok');
       // }
        //return response.json();
      //})
      //.then((data) => setPopularProducts(data))
      //.catch((error) => {
        //console.error('There has been a problem with your fetch operation:', error);
      //});
  //}, []);
  
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
        })}
      </div>
    </div>
  );
};

export default Popular;
