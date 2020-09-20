import React from 'react'
import {Link} from 'react-router-dom'
import  './index.css'

export interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <div className="header">
      <Link to="/render">render</Link>
    </div>
  );
}

export default Header;