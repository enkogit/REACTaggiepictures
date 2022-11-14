
import React from 'react';



export function Landing() {

  return (
    <div className="container">
      <p className="bottom-space" style={{marginBottom:'100px'}} />
      <div className="row" style={{ flexFlow: "column" }}>
                                    <h2
                                        style={{
                                            fontSize: "30px",
                                            fontWeight: "300",
                                            textAlign: "center",
                                            fontFamily: "Montserrat",
                                            letterSpacing: "2px",
                                            lineHeight: "40px",
                                        }}
                                    >
                                        GREAT <i>ARCHITECTURE</i> IS WHERE 
                                        <br /><b>SCIENCE</b> AND <i>ART</i> BREAK EVEN.  
                                    </h2>
                                </div>
        <div className='row'>
        <p className="bottom-space-sm" />
        <p style={{fontSize: '20px', margin: '10px 0px 0px 0px', opacity:1}}>↡</p>
        </div>   
        <p className="bottom-space" style={{marginBottom:'350px'}} />
            <div className="row">
                <div className="col">

                </div>
            </div>

        <p className="bottom-space-sm" />
    </div>
  );
}