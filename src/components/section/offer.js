import React from "react";
export function Offer() {
return (
<div className="container" id='design'>
   <p className="bottom-space-sm" />
   <div className="offer__section">
      <div className="offer__wrapper">
         <div className="offer__container-card">
            <p className="bottom-space-sm" />
               <div className="row" style={{ flexFlow: "column" }}>
               <h2
               style={{
               fontSize: "35px",
               fontWeight: "100",
               textAlign: "center",
               textTransform: 'uppercase'
               }}
               >
               <b>functional</b> design is a <i>purpose</i> in itself.
            </h2>
         </div>
         <p className="bottom-space-sm" />
         <div className="row">
            <div className='col' >
               <h3 style={{fontSize: '18px', textAlign: 'justify'}}> WE <i>DEFINE </i> 
               our design process from the first prototype to tailor to the best fit of their needs as well optimizing the costs of production in all types of spatial projects, from new-built to renovation, from furniture to master plan</h3>
               <p className="bottom-space-md" />
               <h3 style={{fontSize: '18px', textAlign: 'justify'}}>WE <i>DESIGN </i> powerful solutions and business value in creative problem-solving exercises where facts, intuition and experience are carefully combined.</h3>
               <p className="bottom-space-md" />
               <h3 style={{fontSize: '18px', textAlign: 'justify'}}>WE <i>DELIVER </i>
               from initial sketches and transformed designs to stunning, realistic virtual products with the aid of state-of-the-art software and hardware. We maintain our high standards in design, quality and confidentiality.</h3>
            </div>
            <div className='col'>
               <img className="img-width" src="assets/img/Bathroom2.png" alt="" />
            </div>
         </div>
         <div className="row">
            <div className='col'>
               <img className="img-width2" src="assets/img/Kitchen1.jpg" width="100%"  alt="" />
            </div>
            <div className='col'>
               <div className="row">
                     <h3>
                        The offer consists of a wide range of design services:
                     </h3>
               </div>
               <div className="row">

                     <h3>
                        ¹&emsp;Architectual & Interiors
                     </h3>

               </div>
               <div className="row">

                     <h3>
                        ²&emsp;Realistic vizualizations
                     </h3>

               </div>
               <div className="row">

                     <h3>
                        ³&emsp;3D modeling & VR
                     </h3>

               </div>
               <div className="row">

                     <h3>
                        ⁴&emsp;Adobe Works
                     </h3>

               </div>
            </div>
         </div>
         <div className="row">
            <div className='col'>
               <p className="bottom-space-sm" />
               <div className="row">
               

                     <h3 style={{fontSize: '18px', textAlign: 'justify'}}>Based in Calgary <i>Aggie Pictures Studio </i> 
                     collaborates with teams of architects, designers, developers, researchers and is actively involved in local and global projects across Canada and US
                     helping clients define, design and deliver powerful visual solutions.</h3>

               </div>
               <p className="bottom-space-sm" />
               <div className="row">
                  <div className="col">
                     <img src="assets/adobesuite.png" width="50px" alt="" style={{marginLeft:'0px'}} />
                  </div>
                  <div className="col">
                     <img src="assets/revit.png" width="40px" alt="" style={{marginLeft:'0px'}} />
                  </div>
                  <div className="col">
                     <img src="assets/unity.png" width="40px" alt="" style={{marginLeft:'0px'}} />
                  </div>
                  <div className="col">
                     <img src="assets/vray.png" width="80px" alt="" style={{marginLeft:'0px'}} />
                  </div>
                  <div className="col">
                     <img src="assets/sketchup.png" width="120px" alt="" style={{marginLeft:'0px'}} />
                  </div>
               </div>
            </div>
            <div className='col'>
               <img className="img-width" src="assets/img/Terrazzo1.jpg" alt="" />
            </div>
         </div>
         <p className="bottom-space-sm" />
         <div className="row">
            <div className='col'>
               <img className="img-row" src="assets/img/ChildRoom1.png" alt="" />
            </div>
            <div className='col'>
               <img className="img-row" src="assets/img/ChildRoom2.png" alt="" />
            </div>
         </div>
         <p className="bottom-space-sm" />
         <div className="row">
            <div className='col'>
               <img className="img-row" src="assets/img/w1.jpg" alt="" />
            </div>
            <div className='col'>
               <img className="img-row" src="assets/img/w2.jpg" alt="" />
            </div>
            <div className='col'>
               <img className="img-row" src="assets/img/w3.jpg" alt="" />
            </div>
         </div>
         <p className="bottom-space-sm" />
            <div className="row" style={{ flexFlow: "justify" }} id='vr'>
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
         <div className='col'>
            <video width="500" autoPlay loop muted>
               <source src='assets/VR.mp4' type="video/mp4"/>
            </video>
         </div>
         <div className="col" style={{alignItems:'center'}}>
         <img src="assets/VR.png" width="100px" alt="" style={{marginLeft:'0px'}} />
         <h3 style={{fontSize: '18px', textAlign: 'justify'}}>
         Spaces are not stagnant as they modify and adapt with time our designers, experienced in urban and collective architecture,
         are ready to transplant their real-life experience into the digital space of Virtual Reality and
         build spaces for all.
         </h3>
      </div>
   </div>
</div>
</div>
</div>
</div>
);
}