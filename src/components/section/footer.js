import React  from 'react';
import { TokenBanners } from './sub/token_banners';
export function Footer() {
return (
<div className='container'>
   <p className='bottom-space' />
   <div className='row' style={{'flexFlow':'column'}}>
      <div className='col' style={{width:'100%'}}>
        <TokenBanners />
      </div>
   </div>
   <div className='row'>
      <div className='col' style={{width:'100%'}}>
         <p style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © AGGIE.PICTURES All Rights Reserved.</p>
      </div>
   </div>
   <p className='bottom-space' />
</div>
);
}