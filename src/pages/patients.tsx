import {
  mdiAccount,
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartPie,
    mdiChartTimelineVariant,
    mdiReload,
  } from '@mdi/js'
  import Head from 'next/head'
  import React, { useState,useEffect, useRef} from 'react'
  import type { ReactElement } from 'react'
  import Button from '../components/Button'
  import LayoutAuthenticated from '../layouts/Authenticated'
  import SectionMain from '../components/Section/Main'
  import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
  import CardBoxWidget from '../components/CardBox/Widget'
  import { useSampleClients} from '../hooks/sampleData'
  import { Client, Transaction } from '../interfaces'
  import CardBoxClient from '../components/CardBox/Client'
  import CardBox from '../components/CardBox'
  import { sampleChartData } from '../components/ChartLineSample/config'
  import ChartLineSample from '../components/ChartLineSample'
  // import NotificationBar from '../components/NotificationBar'
  import TableSampleClients from '../components/Table/SampleClients'
  import { getPageTitle } from '../config'
  import axios from 'axios'
  import SimpleCardBox from '../components/SimpleCardBox'
  import { BaseURL } from '../constant'
  
  // import { ForceGraph2D } from 'react-force-graph';
  import dynamic from 'next/dynamic';
import CardBoxUser from '../components/CardBox/User'
  
  const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false // Disable server-side rendering
  });
  


const perturbURL=BaseURL+"no_perturb/"
const losURL=BaseURL+"los/"
const patientinfoURL=BaseURL+"patientinfo/"

const PatientsPage = () => {

const [data, setData] = useState(null);
const [patientData,setPatientData]=useState(null);

  useEffect(() => {

    const patientData=JSON.parse(localStorage.getItem('selectedPatient'))

    setPatientData(patientData);
      async function fetchGraphData() {
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

              const response = await axios.get(perturbURL+patientData.id,config);
              console.log(response.data)
              setData(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
              setData(error)
          }
      }
      fetchGraphData();
  }, []);


  return (
    <>
      <Head>
        <title>{getPageTitle('Patients')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccount} title="Profile" main>
        </SectionTitleLineWithButton>
        {
          patientData &&
          (

            <CardBoxUser data={patientData}/>
          )
        }



      <SectionTitleLineWithButton icon={mdiChartPie} title="Impact of Disease on LoS">
      
      {/* <Button icon={mdiReload} color="whiteDark" onClick={} /> */}
    
    </SectionTitleLineWithButton>
    <div className='flex justify-center items-center'>
        {data && (
          <div >

              <ForceGraph2D
              graphData={data}
              nodeLabel={node => `${node.id}: ${node.name} (${node.val})`}
              linkAutoColorBy='white'
              nodeAutoColorBy="id"
              backgroundColor='black'
              width={800}
              height={600}
              linkWidth={(link) => Math.sqrt(link.weight)} // Adjust link width based on weight
            />

            </div>
        )}
    </div>

      </SectionMain>
    </>
  )
}

PatientsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default PatientsPage
