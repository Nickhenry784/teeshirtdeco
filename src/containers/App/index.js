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
import { SizedBox } from 'sizedbox';
import { FlatList } from 'react-native-gesture-handler';
import { hairData } from './data/hair';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import { setShowShopping, decrementTurn } from './actions';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [indexHair, setIndexHair] = useState(-1);
  const [hairState, setHairState] = useState(false);
  const [indexFrame, setIndexFrame] = useState(0);
  const num = 3;

  const onClickBackButton = () => {
    dispatch(setShowShopping(false));
  };

  const onClickBuyButton = () => {
    dispatch(setShowShopping(true));
  };

  const onClickHairImage = value => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setIndexFrame(value);
  };

  const onClickSaveButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setIndexHair(indexFrame);
    setHairState(true);
    dispatch(decrementTurn());
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
            onLongPress={onClickBuyButton}
            style={appStyle.buyButton}>
            <Image source={images.home.buy} style={appStyle.buyImage} />
            <Text style={appStyle.turn}>{turn}</Text>
          </TouchableOpacity>
        )}
      </View>
      {isShowShopping ? (
        <Buttons />
      ) : (
        <View style={appStyle.centerView}>
          <View style={appStyle.mockupView}>
            <ImageBackground source={images.home.man} style={appStyle.manImage}>
              {hairState && (
                <Image
                  source={hairData[indexHair].image}
                  style={appStyle.hairImage}
                />
              )}
            </ImageBackground>
          </View>
          <SizedBox vertical={10} />
          <View style={appStyle.footerView}>
            <FlatList
              data={hairData}
              scrollEnabled={false}
              numColumns={num}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => onClickHairImage(index)}
                  onLongPress={() => onClickHairImage(index)}>
                  {index === indexFrame ? (
                    <Image
                      source={images.home.frame}
                      style={appStyle.frameImage}
                    />
                  ) : (
                    <View style={appStyle.frameImage} />
                  )}
                  <Image source={item.image} style={appStyle.hairImageList} />
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity
            onPress={onClickSaveButton}
            onLongPress={onClickSaveButton}
            style={appStyle.saveButton}>
            <Image source={images.home.save} style={appStyle.saveImage} />
          </TouchableOpacity>
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
