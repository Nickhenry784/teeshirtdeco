import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { SizedBox } from 'sizedbox';
import { randomIntFromInterval } from 'utils/number';
import { isSet } from 'immer/dist/internal';
import { iconData } from './data/icon';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import { setShowShopping, decrementTurn } from './actions';
import PlayPage from './PlayPage';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [play, setPlay] = useState(false);
  const [iconList, setIconList] = useState(iconData);
  const length = useRef(iconData.length);
  const [showPopup, setShowPopup] = useState(false);
  const [win, setWin] = useState(false);

  const onClickBuyButton = () => {
    dispatch(setShowShopping(!isShowShopping));
  };

  const handleGameOver = value => {
    setPlay(false);
    if (value) {
      setWin(true);
    }
    setShowPopup(true);
  };

  const onClickBanner = () => {
    setShowPopup(false);
  };

  const onClickStartButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrementTurn());
    handleRandomListIcon();
    setPlay(true);
  };

  const handleRandomListIcon = () => {
    const list = [...iconData];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < 5; index++) {
      list.splice(randomIntFromInterval(0, length.current - 1), 1);
      length.current -= 1;
    }
    const list1 = [...list];
    const list2 = list.concat(list1);
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < list2.length; index++) {
      const element = list2[index];
      list2.splice(index, 1);
      list2.splice(randomIntFromInterval(0, 22), 0, element);
    }
    setIconList(list2);
  };

  return (
    <Layout turn={turn}>
      {play ? (
        <PlayPage listIcon={iconList} handleFalseResultClick={handleGameOver} />
      ) : (
        <>
          <View style={appStyle.appBar}>
            {isShowShopping ? (
              <TouchableOpacity
                onPress={onClickBuyButton}
                onLongPress={onClickBuyButton}>
                <Text style={appStyle.back}>Back</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onClickBuyButton}
                onLongPress={onClickBuyButton}
                style={appStyle.buyButton}>
                <Image source={images.home.heart} style={appStyle.buyImage} />
                <Text style={appStyle.turn}>{turn}</Text>
              </TouchableOpacity>
            )}
          </View>
          {isShowShopping ? (
            <Buttons />
          ) : (
            <View style={appStyle.centerView}>
              <Image source={images.home.brain} style={appStyle.brainImage} />
              <SizedBox vertical={10} />
              <Text style={appStyle.labelText}>
                You have to choose the same pairs of pictures to win
              </Text>
              <SizedBox vertical={20} />
              <Text style={appStyle.labelReadyText}>Are you ready?</Text>
              <SizedBox vertical={20} />
              <TouchableOpacity
                onPress={onClickStartButton}
                onLongPress={onClickStartButton}>
                <Image source={images.home.start} style={appStyle.startImage} />
              </TouchableOpacity>
            </View>
          )}
          {showPopup && (
            <TouchableOpacity
              onPress={onClickBanner}
              onLongPress={onClickBanner}
              style={!win ? appStyle.gameOverImage : appStyle.winImage}>
              <Image
                source={!win ? images.home.gameover : images.home.win}
                style={!win ? appStyle.gameOverImage : appStyle.winImage}
              />
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
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
