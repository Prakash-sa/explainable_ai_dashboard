import {
    mdiAccount,
      mdiChartPie,
    } from '@mdi/js'
    import Head from 'next/head'
    import React, { useState} from 'react'
    import type { ReactElement } from 'react'
    import LayoutAuthenticated from '../layouts/Authenticated'
    import SectionMain from '../components/Section/Main'
    import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
    import { getPageTitle } from '../config'
    
    import dynamic from 'next/dynamic';
import CardBox from '../components/CardBox'
import UserAvatar from '../components/UserAvatar'
    
    const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
      ssr: false // Disable server-side rendering
    });
    
  const StaticPatientPage = () => {
  
  const [data, ] = useState({"nodes": [{"id": "3", "name": "medDim1", "val": 0.022, "aval": "[ 1.         0.        -3.0192585]", "x": -0.7758358917721054, "y": 3.1366648109331123}, {"id": "4", "name": "medDim7", "val": 0.017, "aval": "[ 1.          6.         -0.25616106]", "x": 0.8133674449326375, "y": -3.4130111339830704}, {"id": "5", "name": "medDim7", "val": 0.017, "aval": "[ 1.          6.         -0.25616106]", "x": -0.2464751650969086, "y": 4.545143420087255}, {"id": "10", "name": "injury", "val": 4.739, "aval": "[1.]", "x": -0.7686873912352497, "y": -2.2723076713777712}, {"id": "32", "name": "skin", "val": 0.016, "aval": "[1.]", "x": 0.23010264853383172, "y": -4.999999999999999}, {"id": "33", "name": "Glucose", "val": 4.853, "aval": "[ 87.    -1.    -1.    -1.   158.5   -1.    -1.   207.5   -1.    -1.\n 231.    -1.   249.    -1.   202.    -1.   202.   212.   193.   169.75\n 154.   118.   138.   135.5 ]", "x": 0.7371626415165079, "y": 2.279284393356769}, {"id": "34", "name": "respiratory", "val": 71.816, "aval": "[1.]", "x": -0.9283506346577852, "y": 0.9367838423549462}, {"id": "37", "name": "ethnicity", "val": 4.954, "aval": "[0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.\n 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0. 1. 0. 0. 0. 0. 0.]", "x": -0.38013076887678043, "y": -4.440871991690952}, {"id": "42", "name": "age", "val": 1.07, "aval": "[46.]", "x": 0.3576440198044031, "y": 4.533253086512158}, {"id": "45", "name": "TempC", "val": 4.836, "aval": "[36.055557 35.833332 -1.       35.4      35.45     35.55     35.6\n 35.65     35.6      35.800003 35.9      35.48     35.7      36.1\n 36.1      36.5      37.05     36.1      36.7      36.300003 36.4\n 36.5      36.8      36.2     ]", "x": 0.961203096851449, "y": -0.3049387561924433}], 
  "links": [{"source": "3", "target": "10", "weight": "1.1850000000000001"}, {"source": "3", "target": "33", "weight": "1.213"}, {"source": "3", "target": "34", "weight": "17.954000000000002"}, {"source": "3", "target": "37", "weight": "1.2379999999999999"}, {"source": "3", "target": "45", "weight": "1.209"}, {"source": "4", "target": "34", "weight": "2.325"}, {"source": "5", "target": "10", "weight": "1.131"}, {"source": "5", "target": "33", "weight": "1.134"}, {"source": "5", "target": "34", "weight": "15.629"}, {"source": "5", "target": "37", "weight": "1.157"}, {"source": "10", "target": "34", "weight": "6.853"}, {"source": "32", "target": "34", "weight": "2.799"}, {"source": "33", "target": "34", "weight": "1.1959999999999999"}, {"source": "34", "target": "37", "weight": "1.205"}, {"source": "34", "target": "45", "weight": "7.903999999999999"}, {"source": "10", "target": "42", "weight": "1.1850000000000001"}, {"source": "33", "target": "42", "weight": "1.213"}, {"source": "34", "target": "42", "weight": "17.954000000000002"}, {"source": "37", "target": "42", "weight": "1.2379999999999999"}, {"source": "42", "target": "45", "weight": "1.209"}]});

    return (
      <>
        <Head>
          <title>{getPageTitle('Patients')}</title>
        </Head>
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiAccount} title="Profile" main>
          </SectionTitleLineWithButton>
          <CardBox>
            <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center">
              <UserAvatar username="M" className="mb-6 lg:mb-0 lg:mx-12" />
              <div className="space-y-3 text-center md:text-left lg:mx-12">
                <div className="flex justify-center md:block">
                </div>
                <h1 className="text-2xl">
                  <b>ID: </b>  &nbsp; {27}
                </h1>
                <p>
                  <b>Age:</b> &nbsp; {50}
                </p>
                <p>
                  <b>Admission:</b> &nbsp; {"EMERGENCY"}
                </p>
                <p>
                  <b>Ethnicity:</b> &nbsp; {"WHITE"}
                </p>
              </div>
            </div>
          </CardBox>
  
  
  
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
      const label = node.id + ': ' + node.name +"   "+node.val; // Customize label as needed
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
      ctx.font = `bold ${fontSize}px Sans-Serif`;
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
    
        // Set link color and width based on weight
        const linkColor = 'red';
        const linkWidth = Math.sqrt(link.weight);
    
        // if (link.weight > 10) {
        //   linkColor = 'red';
        //   linkWidth = 5;
        // } 

        // Draw the link
        ctx.beginPath();
        const source = link.source as { x: number; y: number };
        const target = link.target as { x: number; y: number };
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = linkColor;
        ctx.lineWidth = linkWidth;
        ctx.stroke();
    
        // Draw the text label in the middle of the link
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(link.weight, x, y);
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
  
  StaticPatientPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }
  
  export default StaticPatientPage
  