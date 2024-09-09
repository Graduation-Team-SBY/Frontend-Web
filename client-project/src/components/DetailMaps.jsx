import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: 25
};

// const defaultCenter = {
//   lat: -6.2, // Lokasi default (Jakarta)
//   lng: 106.816666,
// };

export default function DetailMaps({ location }) {
  // const [location, setLocation] = useState(defaultCenter);
  const [errorMsg, setErrorMsg] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAZEACuWDXK8d6VwrGlAPARcyHDy3VCbNU', // Ganti dengan API Key Anda
  });

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //         getAddressFromLatLng(
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //       },
  //       (error) => {
  //         setErrorMsg(
  //           'Lokasi tidak dapat diakses, menggunakan lokasi default.'
  //         );
  //         console.error('Error mendapatkan lokasi: ', error);
  //       }
  //     );
  //   } else {
  //     setErrorMsg('Geolocation tidak didukung oleh browser ini.');
  //   }
  //   console.log(location, '<<<<');
  // }, []);

  

  

  

  return isLoaded ? (
    <>
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location} // Lokasi pusat peta mengikuti state
          zoom={15}
          // onClick={handleMapClick} // Menyimpan lokasi pada state saat klik
        >
          {/* Marker untuk menunjukkan lokasi yang dipilih */}
          <MarkerF position={location} />
        </GoogleMap>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}
