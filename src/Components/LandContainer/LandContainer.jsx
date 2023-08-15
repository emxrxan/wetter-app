import React, { useContext } from 'react'
import './LandContainer.css'
import Button from '../Button/Button';
import {getCountryData} from '../../API/GetAPI-Data';
import Context from '../../Context';

export default function LandContainer() {
  const country = ['GERMANY','FRANCE','SPAIN','ITALY','RUSSIA','CHINA','TURKEY','BRAZIL','USA','CANADA','INDIA','AUSTRALIA'];
  const {setCurrentCountry} = useContext(Context);

  const getCountry = async (event) => {
    const result = await getCountryData(event.target.textContent);
    setCurrentCountry([{name: event.target.textContent, latlng: result[0].latlng}]);
  }

  return (
    <div className='flex-landcontainer'>
        {country.map((element) => <Button onClick={getCountry}  country={element} key={`KEY-${element}`}/> )}
    </div>
  )
}
