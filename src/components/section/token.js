import React from "react";

export function Token() {
    return (
        <div className="container">
            <p className="bottom-space-sm" />
            <div className="token__section">
                <div className="token__wrapper">
                    <div className="token__container-card">
                    <div className="row" style={{ flexFlow: "column" }}>
                            <h2
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "200",
                                    textAlign: "center",
                                }}
                            >
                                Never forgetting that beautiful and functional design is a purpose in itself.
                            </h2>
                        </div>
                        <p className="bottom-space-sm" />
                        
						<p className="bottom-space-sm" />
                        <div className="row">
                            <div className='col' style={{width:'50%'}}>
                                <h3>My work enhances our sense of surroundings, identity and relationship to the physical spaces we inhabit.</h3>
                            </div>
                            <div className='col' style={{width:'40%'}}>
                            <img className="img-width" src="assets/img/Bathroom2.png" alt="" />
                            </div>                            
                        </div>
                        <div className="row">
                        <div className='col' style={{width:'60%'}}>
                        <img className="img-width2" src="assets/img/Kitchen1.jpg" width="700px"  alt="" />
                            </div> 
                            <div className='col' style={{width:'30%'}}>
                                <h3>The offer consists of a wide rnge of design services:
                                    <br /> Architectual design
                                    <br /> Interior space design
                                    <br /> 3D modeling
                                    <br /> Realistic vizualizations
                                    <br /> CAD drawings
                                    <br /> Product Design
                                </h3>
                            </div>    
                        </div><p className="bottom-space-md" />
                        <div className="row" style={{ flexFlow: "row" }}>
                            <img className="img-width" src="assets/img/Terrazzo2.jpg"  alt="" />
                            <img className="img-width" src="assets/img/Terrazzo3.jpg"  alt="" />
                        </div>
                        <p className="bottom-space-md" />
                        <div className="row" style={{ flexFlow: "row" }}>
                            <img className="img-width" src="assets/img/ChildRoom1.png" width="700px" alt="" />
                            <img className="img-width" src="assets/img/ChildRoom2.png" width="700px" alt="" />
                        </div>
                        <div className="row" style={{ flexFlow: "column" }}>
                                    <h2
                                        style={{
                                            fontSize: "25px",
                                            fontWeight: "300",
                                            textAlign: "center",
                                            fontFamily: "Montserrat",
                                            letterSpacing: "5px",
                                            lineHeight: "35px",
                                        }}
                                    >
                                        <i>CURIOSITY</i> - IMAGINATION - <b>FRAMING</b> SOLUTIONS
                                    </h2>
                                </div>
						<p className="bottom-space-md" />
                        <div className="row" style={{ flexFlow: "row" }}>
                            <img className="img-width" src="assets/img/CollectiveHabitat1.jpg" width="700px" alt="" />
                            <img className="img-width" src="assets/img/CollectiveHabitat1.png" width="700px" alt="" />
                        </div>
                        <p className="bottom-space-sm" />
                        <div className="row" style={{ flexFlow: "column" }}>
                            <img className='img-width2' src="assets/img/LearningCommons.png" alt="" />
                        </div>
                        <p className="bottom-space-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}
