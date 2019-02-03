import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import Button from '../components/Button';
import renderIf from '../utils/renderIf';

// 将图标添加到库中

const Style = () => (
  <>
    <style jsx>
      {`
      @media screen and (max-width: 768px) {
        h1{
          font-size: 100px!important;
        }
        li {
          margin: 5px!important;
        }
        li span {
          height: 16px;
          width: 16px;
          margin-right: 5px;
        }
      }
      @media screen and (max-width: 550px) {
        h1{
          font-size: 80px!important;
        }
        li span {
          height: 16px;
          width:16px;
          margin-right: 5px;
        }
      }
      .index {
        width: 100vw;
        height: 100vh;
        display:flex;
        justify-content:center;
        align-items: center;
    
      }
      h1 {
        font-size: 150px;
        color: #000;
        text-align: center;
        letter-spacing: 9px;
        transition: all .3s ease;
      }
      a {
        text-decoration: none;
      }
      nav {
        display: flex;
        justify-content: center;
        overflow: hidden;
        padding-bottom: 150px;
      }
      li {
        display: inline-block;
        margin: 20px;
        font-size: 0;
      }
      li span {
        margin-right: 7px;

      }
      a:hover {
        color: #000;
        text-decoration: none;
      }
      a:nth-child(n) {
        
      }
    `}
    </style>
    <style global jsx>
      {`
        * {
          padding: 0;
        }
        body {
          font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
          background-size: 28px 28px;
        }
    `}
    </style>
  </>
);

const buttonData = [{
  name: 'HOME',
  href: '/',
}, {
  name: 'BLOG',
  href: '/blog',
}, {
  name: 'RESUME',
  href: '/resume',
}, {
  name: 'ABOUT',
  href: '/about',
}, {
  name: 'GITHUB',
  icon: 'github',
  href: 'https://github.com/vivatoviva',
}];

const LiButton = ({ href, icon, name }) => (
  <li>
    <Button href={href}>
      {renderIf(icon)(<span className="fa fa-heart" />)}
      {name}
    </Button>
  </li>
);
LiButton.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

LiButton.defaultProps = {
  icon: '',
};

export default () => (
  <div className="index">
    <Head title="主页" />
    <Style />
    <div className="index-page">
      <h1>Genluo</h1>
      <nav>
        {
          buttonData.map(item => <LiButton key={item.name} {...item} />)
        }
      </nav>
    </div>
  </div>
);
