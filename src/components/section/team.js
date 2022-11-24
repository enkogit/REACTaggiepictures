import React from 'react';
import { SocialBanners } from './sub/social_banners';

export function Team() {
  return (
      <div className='container'>
          <p className="bottom-space-md" />
            <div className='team__wrapper'>
            <div className="row" style={{ flexFlow: "column" }} id='team'>
                                    <h2
                                        style={{
                                            fontSize: "35px",
                                            fontWeight: "300",
                                            textAlign: "center",
                                            fontFamily: "Montserrat",
                                            letterSpacing: "5px",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        <i>THE</i> <b>TEAM</b>
                                    </h2>
                                    
                                    <h2
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "300",
                                            textAlign: "center",
                                            fontFamily: "Montserrat",
                                            letterSpacing: "5px",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        <i>hello</i> @ <b>aggie.pictures</b>
                                    </h2>
                                    <h2
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "300",
                                            textAlign: "center",
                                            fontFamily: "Montserrat",
                                            letterSpacing: "5px",
                                            lineHeight: "15px",
                                        }}
                                    >
                                    </h2>
                                    <SocialBanners />
                                    <p className="bottom-space-md" />
                                </div>
                <div className='team__container'>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                        <img src='assets/vik.png' alt='' width="125px" className='home__hero-img' />
                        <h3>Developer</h3>
                        <p style={{textAlign: 'center', userSelect: "none"}}>Victor Nowichenko</p>
                      </div>
                    </div>
                  </div>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='assets/agg.png' alt='' width="125px" className='home__hero-img' />
                      <h3>Architect</h3>
                      <p style={{textAlign: 'center', userSelect: "none"}}>Agnieszka Wawrentowicz</p>
                      </div>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <img src='assets/9347.png' alt='' width="125px" className='home__hero-img' />
                      <h3>Designer</h3>
                      <p style={{textAlign: 'center', userSelect: "none"}}>Jose Hernandez</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team__container'>

              </div>
      </div>
      
      
  );
}