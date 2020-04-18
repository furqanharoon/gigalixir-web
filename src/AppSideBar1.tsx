import React from 'react';
import { MenuItemLink } from 'react-admin';

const header = {
  textDecoration: 'none',
  borderBottom: '1px solid #aaa',
  padding: '18px 30px 12px',
  margin: '-48px 0 0'
} as React.CSSProperties;

const SidebarStyle = {
  width: '250px',
  padding: '20px'
} as React.CSSProperties;

const SidebarLinkStyle = {
  borderRadius: '7px',
  padding: '20px',
  margin: '0 0 10px',
  '&:hover': {
    backgroundColor:'#216dff',
    color: '#fff'
  },
  '&:active': {
    backgroundColor:'#216dff',
    color: '#fff'
  },
  '&:focus': {
    backgroundColor:'#216dff',
    color: '#fff'
  }
} as React.CSSProperties;

const AppSideBar = () => {
  return (
    <div style={SidebarStyle}>
      <MenuItemLink style={SidebarLinkStyle} to="/Dashboard" primaryText="Dashboard" />
      <MenuItemLink style={SidebarLinkStyle} to="/Profile" primaryText="Profile" />
      <MenuItemLink style={SidebarLinkStyle} to="/Setting" primaryText="Setting" />
      <MenuItemLink style={SidebarLinkStyle} to="/Gallery" primaryText="Gallery" />
    </div>
  );
}

export default AppSideBar;
