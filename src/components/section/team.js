import React from 'react';

export function Team() {
  return (
      <div className='container'>
          <p className="bottom-space-md" />
            <div className='team__wrapper'>
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
                                        <i>THE</i> <b>TEAM</b>
                                    </h2>
                                </div>
                <div className='team__container'>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='assets/example.gif' alt='' width="125px" className='home__hero-img' />
                      <h3>abc</h3>
                      <p style={{textAlign: 'center'}}>Agnieszka - Architect</p>
                      </div>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                        <img src='assets/example.gif' alt='' width="125px" className='home__hero-img' />
                        <h3>abc</h3>
                        <p>Viktor - Developer</p>
                      </div>
 
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='assets/example.gif' alt='' width="125px" className='home__hero-img' />
                      <h3>abc</h3>
                      <p style={{textAlign: 'center'}}>Frank - Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      </div>
      
      
  );
}