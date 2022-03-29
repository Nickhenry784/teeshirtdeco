import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import { images } from 'assets/images';
import { layoutStyle } from './style';

function Layout({ children }) {
  return (
    <ImageBackground
      source={images.home.background}
      style={layoutStyle.background}>
      {children}
    </ImageBackground>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
