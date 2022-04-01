import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { SizedBox } from 'sizedbox';
import {
  makeSelectIsShowShopping,
  makeSelectScore,
  makeSelectTurn,
} from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import { setShowShopping, decrementTurn, setScore } from './actions';
import PlayPage from './PlayPage';

const key = 'App';

function App({ dispatch, turn, isShowShopping, score }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [play, setPlay] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onClickBuyButton = () => {
    dispatch(setShowShopping(!isShowShopping));
  };

  const onClickPlayButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrementTurn());
    setPlay(true);
  };

  const handleGameOver = () => {
    setPlay(false);
    setShowPopup(true);
  };

  const onClickBanner = () => {
    setShowPopup(false);
    dispatch(setScore());
  };

  return (
    <Layout turn={turn}>
      {play ? (
        <PlayPage handleFalseResultClick={handleGameOver} />
      ) : (
        <>
          {isShowShopping ? (
            <TouchableOpacity
              onPress={onClickBuyButton}
              onLongPress={onClickBuyButton}>
              <Text style={appStyle.back}>Back</Text>
            </TouchableOpacity>
          ) : (
            <View style={appStyle.appBar}>
              <ImageBackground
                source={images.home.score}
                style={appStyle.buyImage}>
                <Text style={appStyle.turn}>{score}</Text>
              </ImageBackground>
              <TouchableOpacity
                onPress={onClickBuyButton}
                onLongPress={onClickBuyButton}>
                <ImageBackground
                  source={images.home.turn}
                  style={appStyle.buyImage}>
                  <Text style={appStyle.turn}>{turn}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}

          {isShowShopping ? (
            <Buttons />
          ) : (
            <View style={appStyle.centerView}>
              <Image source={images.home.top} style={appStyle.topImage} />
              <SizedBox vertical={5} />
              <TouchableOpacity
                onPress={onClickPlayButton}
                disabled={showPopup}
                onLongPress={onClickPlayButton}>
                <Image source={images.home.play1} style={appStyle.playImage} />
              </TouchableOpacity>
              <SizedBox vertical={10} />
              <ImageBackground
                source={images.home.panel}
                style={appStyle.panelImage}
              />
              <SizedBox vertical={10} />
              <View style={appStyle.bottomView}>
                <Image source={images.home.true} style={appStyle.trueImage} />
                <Image source={images.home.false} style={appStyle.trueImage} />
              </View>
            </View>
          )}
          {showPopup && (
            <TouchableOpacity
              onPress={onClickBanner}
              onLongPress={onClickBanner}
              style={appStyle.popup}>
              <ImageBackground
                source={images.home.popup}
                style={appStyle.popupImage}>
                <Text style={appStyle.scoreText}>{score}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        </>
      )}
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowShopping: PropTypes.bool,
  score: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  score: makeSelectScore(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
