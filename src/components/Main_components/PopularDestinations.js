import React from 'react'
import "../../css/Main_components/PopularDestinations.css"
import PopularDestinationChild from './PopularDestinations/PopularDestinationChild'
import Loading from "../Notification/Loading";
import api from "../../api/BaseAxios";

export default function PopularDestinations() {
  const [loading, setLoading] = React.useState(false);
  const [arrayPopularDestinations, setArrayPopularDestinations] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
          setLoading(true);

          api.get('/popular-destination', {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
          })
              .then(response => {
                setArrayPopularDestinations(response.data.data);
                setLoading(false);
              })
              .catch(error => {
                  console.log('logout error: ' + error.response.data.message);
                  setLoading(false);
              });

        } catch (err) {
          console.log("Logout error: " + err);
        }
    };

    fetchData();
  }, [])
  
  return (
    <div className='popular-destinations--container'>
      <div className='popular-destinations--title'>Điểm đến hot nhất</div>

      <div className='popular-destinations--content'>
      { 
          loading && 
          <Loading />
      }
      {
          !loading &&
          <div className='popular-destinations--child-row'> 
            {
              arrayPopularDestinations.map((destination, index) => {
                if (index % 3 === 0) {
                  const sliceEnd = index + 3;
                  const destinationsSlice = arrayPopularDestinations.slice(index, sliceEnd);
                  return (
                    <div className='popular-destinations--child-column'>
                      {destinationsSlice.map((destination) => (
                        <PopularDestinationChild
                          imagePath={destination.image_path}
                          provinceName={destination.province_name}
                        />
                      ))}
                    </div>
                  );
                }
                return null;
              })
            }
          </div>
          
      }
      </div>
    </div>
  )
}