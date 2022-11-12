
import React from 'react';



export function Landing() {

  return (
    <div className="container">
      <p className="bottom-space" style={{marginBottom:'400px'}} />
      <div className="row" style={{ flexFlow: "column" }}>
                                    <h2
                                        style={{
                                            fontSize: "35px",
                                            fontWeight: "300",
                                            textAlign: "center",
                                            fontFamily: "Montserrat",
                                            letterSpacing: "5px",
                                            lineHeight: "35px",
                                        }}
                                    >
                                        <i>GOOD</i> IDEAS INTO <b>GREAT</b> DESIGNS
                                    </h2>
                                </div>
        <div className='row'>
        <p className="bottom-space-sm" />
        <p style={{fontSize: '20px', margin: '10px 0px 0px 0px', opacity:1}}>↡</p>

        </div>   
        <p className="bottom-space" style={{marginBottom:'400px'}} />
        <p className="bottom-space-sm" />
            <div className="row">
                <div className="col">
                  <div className='float-div'>
                    <img src="images/upsidedown.gif" width="250px" alt="" style={{marginLeft:'-50px'}} />
                  </div>
                </div>
            </div>

        <p className="bottom-space-sm" />
    </div>
  );
}