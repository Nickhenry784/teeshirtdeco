import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { FlatGrid } from 'react-native-super-grid';
import { randomIntFromInterval } from 'utils/number';
import { imageData } from './data/image';
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
  const [imageItem, setImageItem] = useState(
    imageData[randomIntFromInterval(0, 8)],
  );
  const [imageList, setImageList] = useState([...imageData]);
  const [play, setPlay] = useState(false);
  const [score, setScore] = useState(0);
  const [resultClick, setResultClick] = useState(false);
  const [time, setTime] = useState(3);
  const result = useRef(false);
  const [mockupShow, setMockupShow] = useState(false);

  useEffect(() => {
    const timeCoutDown = 1;
    const timeOut = setTimeout(() => {
      if (play && time > 0) {
        setTime(time - 1);
      }
      if (play && time === 0) {
        if (resultClick) {
          setScore(score + 10);
        } else {
          setPlay(false);
          setMockupShow(true);
        }
        setTime(3);
        setResultClick(false);
        setImageItem(imageData[randomIntFromInterval(0, 8)]);
        setImageList(handleRandomIndexList());
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time, play]);

  const onClickBackButton = () => {
    dispatch(setShowShopping(false));
  };

  const onClickBuyButton = () => {
    dispatch(setShowShopping(true));
  };

  const onClickPlayButton = value => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setPlay(true);
    dispatch(decrementTurn());
  };

  const onClickImageButton = item => {
    if (item.id === imageItem.id) {
      setResultClick(true);
    } else {
      setResultClick(false);
    }
  };

  const onClickCloseButton = () => {
    setMockupShow(false);
    setScore(0);
  };

  const handleRandomIndexList = () => {
    const list = [...imageData];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < list.length; index++) {
      const randomIndex = randomIntFromInterval(0, list.length - 1);
      const element = list[index];
      list.splice(index, 1);
      list.splice(randomIndex, 0, element);
    }
    return list;
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
            style={appStyle.buyItemView}>
            <Image source={images.home.turn} style={appStyle.buyImage} />
            <Text style={appStyle.turn}>{turn}</Text>
          </TouchableOpacity>
        )}
        {play && <Text style={appStyle.scoreText}>{`SCORE: ${score}`}</Text>}
      </View>
      {isShowShopping ? (
        <Buttons />
      ) : (
        <View style={appStyle.homeView}>
          <View style={appStyle.topView}>
            {!play ? (
              <View style={appStyle.startView}>
                <TouchableOpacity
                  onPress={onClickPlayButton}
                  onLongPress={onClickPlayButton}>
                  <Image source={images.home.play} style={appStyle.playImage} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={appStyle.playView}>
                <Text style={appStyle.labelText}>TIME</Text>
                <Text style={appStyle.labelText}>{time}</Text>
                <Image source={imageItem.image} style={appStyle.playImage} />
              </View>
            )}
            <Text style={appStyle.labelText}>
              Choose the right image with the model
            </Text>
          </View>
          <View style={appStyle.bottomView}>
            <FlatGrid
              data={imageList}
              itemDimension={100}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  disabled={!play}
                  onPress={() => onClickImageButton(item)}
                  onLongPress={() => onClickImageButton(item)}
                  style={appStyle.itemButton}>
                  <Image source={item.image} style={appStyle.itemImage} />
                </TouchableOpacity>
              )}
            />
          </View>
          {mockupShow && (
            <ImageBackground
              source={images.home.mockup}
              style={appStyle.mockupImage}>
              <TouchableOpacity
                onPress={onClickCloseButton}
                onLongPress={onClickCloseButton}
                style={appStyle.closeButton}>
                <Text style={appStyle.scoreText}>X</Text>
              </TouchableOpacity>
              <Text style={appStyle.scoreText}>{`SCORE: ${score}`}</Text>
            </ImageBackground>
          )}
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
