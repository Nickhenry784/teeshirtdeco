import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { images } from 'assets/images';
import { layoutStyle } from './style';

function Layout({ children }) {
  return <View style={layoutStyle.background}>{children}</View>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
