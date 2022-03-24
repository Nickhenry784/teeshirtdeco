import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { images } from 'assets/images';
import { appStyle } from './style';

function Mockup({ dispatch, setShowMockup, setShowBearDecorTshrit }) {
  const onClickBackButton = () => {
    setShowMockup();
  };

  const onClickOKButton = () => {
    setShowBearDecorTshrit();
  };

  return (
    <View style={appStyle.mockupView}>
      <Text style={appStyle.textMockup}>Do you want add design on shirt?</Text>
      <View style={appStyle.buttonView}>
        <TouchableOpacity
          onPress={onClickBackButton}
          onLongPress={onClickBackButton}>
          <Image
            source={images.home.buttonCancel}
            style={appStyle.cancelImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClickOKButton}
          onLongPress={onClickOKButton}>
          <Image source={images.home.buttonOK} style={appStyle.OKImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Mockup.propTypes = {
  dispatch: PropTypes.func,
  setShowMockup: PropTypes.func,
  setShowBearDecorTshrit: PropTypes.func,
};

export default connect()(Mockup);
