import React from 'react';
import '../../assets/css/sideBar/sideBar.css';

const SideBar = () => {
  return (
    <aside className="aside">
      <a href="#index" className="nav_logo" >M.</a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a href='#index' className='nav_link'>
                <i className='icon-home'></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#about' className='nav_link'>
                <i className='icon-user-following'></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#skills' className='nav_link'>
                <i className='icon-briefcase'></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#portfolio' className='nav_link'>
                <i className='icon-layers'></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#experience' className='nav_link'>
                <i className='icon-graduation'></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#contact' className='nav_link'>
                <i className='icon-call-out'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar