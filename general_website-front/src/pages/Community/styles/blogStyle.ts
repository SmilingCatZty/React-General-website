import React from 'react'

const blogStyle: React.CSSProperties = {
  minHeight: '300px',
  maxHeight: '450px',
}

const blogTitleStyle: React.CSSProperties = {
  width: '100%',
  height: '40px',
  border: '2px solid #ccc'
}

const blogContentStyle: React.CSSProperties = {
  width: '100%',
  // minHeight: '210px',
  height: '400px',
  marginTop: '10px',
  border: '2px solid #ccc'
}

const blogContentTextStyle: React.CSSProperties = {
  width: '100%',
  height: '250px',
}

const blogContentImgStyle: React.CSSProperties = {
  width: '100%',
  height: '140px',
  marginTop: '10px',
  border: '2px solid #ccc'
}

export { blogStyle, blogTitleStyle, blogContentTextStyle, blogContentStyle, blogContentImgStyle }
