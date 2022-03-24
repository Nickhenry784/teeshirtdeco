import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { FlatGrid } from 'react-native-super-grid';
import { bearData } from './data/bear';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import { setShowShopping, decrementTurn } from './actions';
import Mockup from './Mockup';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [isShowMockup, setShowMockup] = useState(false);
  const [index, setIndex] = useState(0);
  const [bearImageIndex, setBearImageIndex] = useState(0);
  const [isShowBearDecorOnShirt, setShowBearDecorOnShirt] = useState(false);

  const onClickBackButton = () => {
    dispatch(setShowShopping(false));
  };

  const onClickBuyButton = () => {
    dispatch(setShowShopping(true));
  };

  const onClickBearImage = value => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setIndex(value);
    setShowMockup(true);
  };

  const handleClickOKButtonMockup = () => {
    setShowBearDecorOnShirt(true);
    setShowMockup(false);
    setBearImageIndex(index);
    dispatch(decrementTurn());
  };

  const onClickAgainButton = () => {
    setShowBearDecorOnShirt(false);
  };

  const handleClickCancelButtonMockup = () => {
    setShowMockup(false);
  };

  return (
    <Layout turn={turn}>
      <View style={appStyle.appBar}>
        {isShowShopping ? (
          <TouchableOpacity
            onPress={onClickBackButton}
            onLongPress={onClickBackButton}>
            <Text style={appStyle.back}>Back</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onClickBuyButton}
            onLongPress={onClickBuyButton}>
            <Image source={images.home.buy} style={appStyle.buyImage} />
            <Text style={appStyle.turn}>{turn}</Text>
          </TouchableOpacity>
        )}
      </View>
      {isShowShopping ? (
        <Buttons />
      ) : (
        <View style={appStyle.centerView}>
          {isShowMockup ? (
            <Mockup
              setShowMockup={handleClickCancelButtonMockup}
              setShowBearDecorTshrit={handleClickOKButtonMockup}
            />
          ) : (
            <>
              <View style={appStyle.tshirtDecorView}>
                <ImageBackground
                  source={images.home.tshirt}
                  style={appStyle.tshirtImage}>
                  {isShowBearDecorOnShirt && (
                    <Image
                      source={bearData[bearImageIndex].image}
                      style={appStyle.bearDecorImage}
                    />
                  )}
                </ImageBackground>
              </View>
              <TouchableOpacity
                onPress={onClickAgainButton}
                onLongPress={onClickAgainButton}>
                <Image
                  source={images.home.buttonRefesh}
                  style={appStyle.RefeshImage}
                />
              </TouchableOpacity>
            </>
          )}
          <View style={appStyle.footerView}>
            <FlatGrid
              itemDimension={80}
              data={bearData}
              spacing={10}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => onClickBearImage(index)}
                  onLongPress={() => onClickBearImage(index)}>
                  <Image source={item.image} style={appStyle.bearImage} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowShopping: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
