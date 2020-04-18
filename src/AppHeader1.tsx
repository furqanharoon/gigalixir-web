import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from './logo.png';

const header = {
  textDecoration: 'none',
  borderBottom: '1px solid #aaa',
  padding: '18px 30px 12px',
  margin: '-48px 0 0'
} as React.CSSProperties;
const LogoStyle =  {
  width: '130px'
} as React.CSSProperties;
const customList = {
  float: 'right',
  listStyle: 'none',
  padding: 0,
  margin: 0
} as React.CSSProperties;
const customListItem = {
  float: 'left',
  marginLeft: '50px'
} as React.CSSProperties;
const iconStyle = {
  fontSize: '12px'
} as React.CSSProperties;

const profileStyleHolder = {
  cursor: 'pointer'
} as React.CSSProperties;

const profileIcon = {
  backgroundColor: '#08b7a4',
  display: 'inline-block',
  verticalAlign: 'middle',
  fontSize: '14px',
  lineHeight: '40px',
  fontWeight: 'bold',
  textAlign: 'center'
} as React.CSSProperties;
const profileText = {
  color: '#555',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: 'bold',
  display: 'inline-block',
  verticalAlign: 'bottom',
  margin: '0 0 12px 10px',
} as React.CSSProperties;
const profileIconStyle= {
  color: '#555',
  fontSize: '20px',
  lineHeight: '16px',
  display: 'inline-block',
  verticalAlign: 'bottom',
} as React.CSSProperties;
const blueColor = {
  backgroundColor: '#216dff'
} as React.CSSProperties;
const helpIconHolder= {
  padding: '0',
  margin: '5px 0 0'
} as React.CSSProperties;
const helpIcon = {
  backgroundColor: '#e0e5fe',
  color: '#000',
  fontSize: '16px',
  height: '30px',
  width: '30px'
} as React.CSSProperties;

const AppHeader = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const open = false;

  const handleClose = () => {
    console.log('handle close')
  };

  return (
    <header style={header}>
      {<a href='Home'><img style={LogoStyle} src={'https://res.cloudinary.com/dwlstwcc4/image/upload/v1585911372/logo_wfwgq6.png'} alt='Logo' /></a>}
      <ul style={customList}>
        <li style={customListItem}>
          <a
            href='Home'
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
            style={profileStyleHolder}
          >
            <Avatar style={profileIcon}>OP</Avatar>
            <span style={profileText}>test@gmail.com <ArrowDropDownIcon style={profileIconStyle} /></span>
          </a>
          <Menu
            id="menu-appbar"
            // anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </li>
        <li style={customListItem}>
          <IconButton style={helpIconHolder}>
            <Avatar style={helpIcon}>?</Avatar>
          </IconButton>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;
