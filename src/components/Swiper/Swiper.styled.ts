import styled from 'styled-components';

export const Container = styled('div')`
  ${({ theme, h }) => {
    const height = `${h}px`;
    return `
    .swiper {
      width: 100%;
      height: ${h ? height : '500px'};
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }    
    
    .swiper-pagination {
      bottom: ${theme.spacing(1)};
    }

    `;
  }}
`;
