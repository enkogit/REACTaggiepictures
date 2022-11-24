import React from 'react';

export function SocialBanners() {

  return (
          <div className='row'>
            <div className='col'>
              <a href='https://www.instagram.com/aggie.pictures/'>
                <img src='assets/insta.png' width='30px' />
              </a>
            </div>
            <div className='col'>
              <a href='https://www.pinterest.ca/aggiepictures/'>
                <img src='assets/pinterest.png' width='30px' />
              </a>
            </div>
            <div className='col'>
              <a href='https://www.youtube.com/@aggie.pictures'>
                <img src='assets/youtube.png' width='30px' />
              </a>
            </div>
          </div>
  );
}