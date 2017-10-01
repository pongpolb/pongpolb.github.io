import React from 'react';
import { Link } from 'react-router';

import Logo from './logo.svg';
import Github from './iconmonstr-github.svg';
import Facebook from './iconmonstr-facebook.svg';

import style from './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div className={style.header}>
          <Logo width={80} height={80} className={style.logo}/>
          <h2>
            @pongpolb blog
          </h2>
          <div className="row">
            <Link to={'/'} className="btn btn-menu">About</Link>
            <Link to={'/blog'} className="btn btn-menu">Blog</Link>
          </div>
        </div>
        <div className="body">
          {this.props.children}
        </div>
        <div className={style.footer}>
          <p>
            © 2017 • pongpolb .
          </p>
            <ul>
              <li>
                <a href={'https://github.com/pongpolb'} className="btn btn-logo">
                  <Github width={40} height={40} />
                </a>
              </li>
              <li>
                <a href={'https://www.facebook.com/pongpolb'} className="btn btn-logo">
                  <Facebook width={40} height={40} />
                </a>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Layout;
