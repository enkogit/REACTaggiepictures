import React from 'react';

export function TokenBanners() {
  const handleClickDesignScroll = () => {
    const element = document.getElementById('design');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickVRScroll = () => {
    const element = document.getElementById('vr');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickTeamScroll = () => {
    const element = document.getElementById('team');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <div className='container'>
          <div className='row'>
                <div to='' className='banner__wrapper'>
                  <div to='' className='banner__container'>
                        <a className="btn effect04" onClick={handleClickDesignScroll} href={handleClickDesignScroll}>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          DESIGN
                          </h2>
                        </a>
                        <a className="btn effect04" onClick={handleClickVRScroll} href={handleClickDesignScroll}>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          VR
                          </h2>
                        </a><a className="btn effect04" onClick={handleClickTeamScroll} href={handleClickDesignScroll}>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          CONTACT
                          </h2>
                        </a>
                    </div>
                  </div>
                </div>
      </div>
  );
}