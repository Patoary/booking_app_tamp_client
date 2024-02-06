import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const{data, loading, error, reFetch} = useFetch("http://localhost:4000/hotel/countByType")
  const images =[
    "src/assets/hotel.jpg",
    "src/assets/apartments.jpg",
    "src/assets/resort.jpg",
    "src/assets/villas.jpg",
    "src/assets/cabins.jpg"
  ]
  return (
    <div className="pList">
      {loading? ("loading"):(
      <>
      {data && images.map((img, i)=>(
      <div className="pListItem">
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>
      ))}
      </>)}
    </div>
  );
};

export default PropertyList;
