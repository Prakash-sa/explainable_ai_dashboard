import axios from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr'

export const useSampleClients = () => {
  
  const [data, setPatientInfoData] = useState<any>(null);

  // async function fetchPatientData() {
  //     try {
  //         const config={
  //           headers:{
  //             'content-type':'application/json',
  //             "Access-Control-Allow-Origin":"*",
  //             "Access-Control-Allow-Headers":"X-Requested-With",
  //             "Content-Security-Policy": "upgrade-insecure-requests",
  //             "mode": "cors",
  //             "ngrok-skip-browser-warning": "69420",
  //           }
  //         };

  //         const response = await axios.get(patientinfoURL,config);
  //         console.log(response.data)
  //         setPatientInfoData(response.data);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //         setPatientInfoData(error)
  //     }
  // }
  // if(data==null)
  // fetchPatientData();

  return {
    clients: data?.data ?? []
  }
}
