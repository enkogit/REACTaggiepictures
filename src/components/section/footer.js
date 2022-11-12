import React  from 'react';
import { TokenBanners } from './sub/token_banners';
export function Footer() {
return (
<div className='container'>
   <p className='bottom-space' />
   <p className="bottom-space-xsm" />
   <div className='row' style={{'flexFlow':'column'}}>
      <div className='col'>
        <TokenBanners />
      </div>
   </div>
   <div className='row'>
      <div className='col'>
         <p style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © AGGIE.PICTURES All Rights Reserved.</p>
      </div>
   </div>
   <p className='bottom-space-md' />
</div>
);
}