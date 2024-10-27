import React from "react";
import "./NewCollections.css";
import newcollections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  //const [newcollections,setNewcollections] = useState([]);
  //useEffect(() => {
    //fetch('https://localhost:5000/newcollections')
      //.then((response) => {
        ///if (!response.ok) {
          //throw new Error('Network response was not ok');
       // }
        //return response.json();
      //})
      //.then((data) => setNewcollections(data))
      //.catch((error) => {
        //console.error('There has been a problem with your fetch operation:', error);
      //});
  //}, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollections.map((item, i) => {
          return<Item
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

export default NewCollections;
