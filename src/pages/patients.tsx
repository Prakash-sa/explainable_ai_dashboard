import {
  mdiAccount,
    mdiChartPie,
  } from '@mdi/js'
  import Head from 'next/head'
  import React, { useState,useEffect} from 'react'
  import type { ReactElement } from 'react'
  import LayoutAuthenticated from '../layouts/Authenticated'
  import SectionMain from '../components/Section/Main'
  import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
  import { getPageTitle } from '../config'
  import axios from 'axios'
  import { BaseURL } from '../constant'
  
  // import { ForceGraph2D } from 'react-force-graph';
  import dynamic from 'next/dynamic';
import CardBoxUser from '../components/CardBox/User'
  
  const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false // Disable server-side rendering
  });
  


const perturbURL=BaseURL+"no_perturb/"

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
              // const updatedNodes = response.data.nodes.map(node => ({
              //   ...node,
              //   x: node.x * 10,
              //   y: node.y * 10
              // }));
              
              // Create a new graph data object with the updated node coordinates
              // setupdatedData({
              //   ...data,
              //   nodes: updatedNodes
              // });
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

<div style={{ display: 'flex',  flexDirection: 'column'  }}>
<div style={{ width: '800px', height: '600px', overflow: 'hidden' }}>
<ForceGraph2D
  graphData={data}
  linkAutoColorBy='white'
  nodeAutoColorBy="id"
  backgroundColor='black'
  width={800}
  height={600}
  linkWidth={(link) => Math.sqrt(link.weight)} // Adjust link width based on weight
  d3AlphaDecay={0.05} // Increase the alpha decay rate for faster convergence
  d3VelocityDecay={0.1} // Reduce the velocity decay rate for slower convergence
  dagLevelDistance={200}
  nodeCanvasObject={(node, ctx, globalScale) => {
    const label = node.id + ': ' + node.name; // Customize label as needed
    const fontSize = 12 / globalScale;
    const nodeRadius = 2*node.val; // Radius of the circular node

    // Calculate the angle for each node to position them in a circle
    const angle = (2 * Math.PI * node.index) / data.nodes.length;
    const radius = 2*node.val; // Radius of the circle

    // Calculate the position of the node based on the angle and radius
    const x = Math.cos(angle) * radius + node.x;
    const y = Math.sin(angle) * radius + node.y;
    // Generate a random color for each node
    const randomColor = `rgb(100, 130, 245)`;

    // Draw the circular node
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
    ctx.fillStyle = randomColor;
    ctx.fill();

    // Draw the node label in the middle of the node
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
  }}

  linkCanvasObject={(link, ctx, globalScale) => {
    const fontSize = 12 / globalScale;

    // Calculate the midpoint of the link
    const x = ((link.source as { x: number }).x + (link.target as { x: number }).x) / 2;
    const y = ((link.source as { y: number }).y + (link.target as { y: number }).y) / 2;

    // Draw the text label in the middle of the link
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Your text here', x, y);
  }}
/>

</div>
<div style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
  <h1 style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '24px' }}>Node Values</h1>
  {data.nodes.map((node) => (
    <div key={node.id} style={{ marginBottom: '12px' }}>
      <span style={{ fontWeight: 'bold', marginRight: '8px' }}>{node.name}:</span> {node.aval}
    </div>
  ))}
</div>

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
