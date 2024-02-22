import React from 'react';
import { ForceGraph2D } from 'react-force-graph-2d';

function GraphComponent({ data }) {
    return (
      <ForceGraph2D
        graphData={data}
        nodeAutoColorBy="group"
      />
    );
  }
  
  export default GraphComponent;
  