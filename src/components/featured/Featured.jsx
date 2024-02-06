import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const{data, loading, error, reFetch} = useFetch("http://localhost:4000/hotel/countByCity?cities=tokyo,osaka,dubai")
  console.log(data)
  return (
    <div className="featured">
      {loading? ("Loading please wait") : (<>
      <div className="featuredItem">
        <img
          src="src/assets/dublin.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
       
          src="src/assets/tokyo.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Osaka</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="src/assets/dubai.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>{2} properties</h2>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default Featured;
