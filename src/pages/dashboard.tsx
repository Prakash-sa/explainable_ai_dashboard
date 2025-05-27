import {
  mdiAccountMultiple,
  mdiChartTimelineVariant,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState,useEffect} from 'react'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBox from '../components/CardBox'
// import { sampleChartData } from '../components/ChartLineSample/config'
// import NotificationBar from '../components/NotificationBar'
import TableSampleClients from '../components/Table/SampleClients'
import { getPageTitle } from '../config'
import axios from 'axios'
import SimpleCardBox from '../components/SimpleCardBox'
import { BaseURL } from '../constant'

// import { ForceGraph2D } from 'react-force-graph';

const losURL=BaseURL+"los/"
const patientinfoURL=BaseURL+"patientinfo/"

const DashboardPage = () => {

  // const clientsListed = clients.slice(0, 4)

  const [patientData, setPatientData] = useState(null);
  const [patientInfoData, setPatientInfoData] = useState(null);

    useEffect(() => {
        async function fetchLOSData() {
          try {
              const config={
                headers:{
                  'content-type':'application/json',
                  "Access-Control-Allow-Origin":"*",
                  "Access-Control-Allow-Headers":"X-Requested-With",
                  "Content-Security-Policy": "upgrade-insecure-requests",
                  "mode": "cors",
                  "ngrok-skip-browser-warning": "69420",
                }
              };

              const response = await axios.get(losURL,config);
              console.log(response.data)
              setPatientData(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
              setPatientData(error)
          }
      }

        async function fetchPatientData() {
          try {
              const config={
                headers:{
                  'content-type':'application/json',
                  "Access-Control-Allow-Origin":"*",
                  "Access-Control-Allow-Headers":"X-Requested-With",
                  "Content-Security-Policy": "upgrade-insecure-requests",
                  "mode": "cors",
                  "ngrok-skip-browser-warning": "69420",
                }
              };

              const response = await axios.get(patientinfoURL,config);
              console.log(response.data)
              setPatientInfoData(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
              setPatientInfoData(error)
          }
      }
        fetchPatientData();
        fetchLOSData();
    }, []);


  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Overview" main>

        </SectionTitleLineWithButton>

        {patientData && (
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>
            <SimpleCardBox title='Total Patient' value={patientData.los_length}          
            />
            <SimpleCardBox title='Mean of Length of stay' value={patientData.mean} suffix='days'          
            />
            <SimpleCardBox title='Maximum LOS' value={patientData.max} suffix='days'          
            />
            <SimpleCardBox title='Minimum LOS' value={patientData.min} suffix='days'          
            />
          </div>
          )}
        

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div> */}



        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Patient Information" />

        {/* {patientInfoData && (
              <CardBox hasTable>
              <TableSampleClients patients={patientInfoData} />
            </CardBox>
            )} */}
        
      </SectionMain>
    </>
  )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default DashboardPage
