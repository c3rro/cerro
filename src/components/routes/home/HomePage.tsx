import React from 'react';

export default function HomePage() {
  return (
    <div style={{marginLeft:100}}>
      <h1 style={{ fontSize: 80, fontWeight: 'bold', textAlign: 'left', color: 'gray', marginTop:200 }}>
        Hello there!
      </h1>
      <h2 style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'left', color: '#BEBEBE' }}>Thanks for stopping by. Until our website is finished, </h2>
      <h2 style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'left', color: '#BEBEBE', lineHeight: .1 }}>you can say hi at <span style={{color:'gray'}}>cerroanalytics (at) gmail (dot) com.</span></h2>
    </div>
  );
}
