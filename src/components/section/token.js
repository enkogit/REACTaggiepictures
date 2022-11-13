import React from "react";
export function Token() {
return (
<div className="container">
   <p className="bottom-space-sm" />
   <div className="token__section">
      <div className="token__wrapper">
         <div className="token__container-card">
            <p className="bottom-space-sm" />
               <div className="row" style={{ flexFlow: "column" }}>
               <h2
               style={{
               fontSize: "25px",
               fontWeight: "100",
               textAlign: "center",
               textTransform: 'uppercase'
               }}
               >
               Never forgetting that <b>beautiful</b> & <b>functional</b> design is a <i>purpose</i> in itself.
            </h2>
         </div>
         <p className="bottom-space" />
         <div className="row" >
            <div className='col' style={{width:'50%'}}>
               <h3 style={{fontSize: '18px', textAlign: 'justify'}}>Based in Calgary <i>Aggie Pictures Studio </i> 
               collaborates with teams of architects, designers, developers plus researchers and is actively involved locally and globally with projects across Canada and US</h3>
            </div>
            <div className='col' style={{width:'50%'}}>
               <img className="img-width" src="assets/img/Bathroom2.png" alt="" />
            </div>
         </div>
         <div className="row">
            <div className='col' style={{width:'50%'}}>
               <img className="img-width2" src="assets/img/Kitchen1.jpg" width="100%"  alt="" />
            </div>
            <div className='col' style={{width:'50%'}}>
               <div className="row">
                  <div className="col">
                     <h3>
                        The offer consists of a wide range of design services:
                     </h3>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <h3>
                     Architectual design
                     </h3>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <h3>
                     Interior space design
                     </h3>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <h3>
                     3D modeling
                     </h3>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <h3>
                     Realistic vizualizations
                     </h3>
                  </div>
               </div>

            </div>
         </div>
         <div className="row">
            <div className='col' style={{width:'50%'}}>
               <h3>
               We define, design and deliver successful design solutions and add business value. Design is a creative problem-solving exercise where facts, intuition and previous experience are carefully combined.
               <br />Aggie pictures engages with all types of spatial projects, from new-built to renovation, from furniture to masterplan.
               </h3>
            </div>
            <div className='col' style={{width:'50%'}}>
               <img className="img-width" src="assets/img/Terrazzo1.jpg" alt="" />
            </div>
         </div>
         <p className="bottom-space-sm" />
         <div className="row">
            <div className='col' style={{width:'50%'}}>
               <img className="img-row" src="assets/img/ChildRoom1.png" alt="" />
            </div>
            <div className='col' style={{width:'50%'}}>
               <img className="img-row" src="assets/img/ChildRoom2.png" alt="" />
            </div>
         </div>
         <p className="bottom-space-sm" />
            <div className="row" style={{ flexFlow: "justify" }}>
            <h2
            style={{
            fontSize: "25px",
            fontWeight: "300",
            textAlign: "center",
            fontFamily: "Montserrat",
            letterSpacing: "1px",
            lineHeight: "35px",
            textTransform: 'uppercase'
            }}
            >
            Working across multiple scales aggie.pictures blurs the boundary between 
            architecture, design, art, landscape, and urban strategies
         </h2>
      </div>
      <p className="bottom-space-md" />
      <div className="row">
         <div className='col' style={{width:'50%'}}>
            <video width="600" height="auto" autoPlay loop >
               <source src='../assets/VR.mp4' type="video/mp4"/>
            </video>
         </div>
         <div className="col" style={{width:'50%', alignItems:'center'}}>
         <h3 style={{fontSize: '15px', textAlign: 'center'}}>
         Spaces are not stagnant, they modify and adapt with time. We live in a place in time where the dialog is turning into a monologue,
         people are loosing access or the feeling of local scale community. There are somethings we can't change but we can adapt as well.Our aim is to reestablish common spaces in collective habbitats.
         Our designers, experienced in urban and collective architecture,
         ready to transplant their real-life solutions into the digital space of Virtual Reality and
         build common spaces for all needs.
         </h3>
      </div>
   </div>
</div>
</div>
</div>
</div>
);
}