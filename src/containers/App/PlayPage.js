import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { images } from 'assets/images';
import { FlatGrid } from 'react-native-super-grid';
import { SizedBox } from 'sizedbox';
import { FlatList } from 'react-native-gesture-handler';
import { appStyle } from './style';
import Layout from './Layout';

function App({ dispatch, listIcon, handleFalseResultClick }) {
  const [startGameState, setStartGameState] = useState([]);
  const [score, setScore] = useState(0);
  const [heart, setHeart] = useState(3);
  const [minutesCoutdown, setMinutesCoutdown] = useState(2);
  const [secondsCoutdown, setSecondsCoutdown] = useState(60);
  const [doubleClick, setDoubleClick] = useState(false);
  const [result, setResult] = useState(null);
  const num = 4;
  const indexOld = useRef(-1);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (secondsCoutdown > 0) {
        setSecondsCoutdown(secondsCoutdown - 1);
      }
      if (secondsCoutdown === 0 && minutesCoutdown > 0) {
        setMinutesCoutdown(minutesCoutdown - 1);
        setSecondsCoutdown(60);
      }
      if (secondsCoutdown === 0 && minutesCoutdown === 0) {
        onClickOKButton();
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [secondsCoutdown, minutesCoutdown]);

  const onClickIconImage = (value, index) => {
    const list = [...startGameState];
    list[index] = true;

    if (!doubleClick) {
      indexOld.current = index;
      setResult(value);
      setDoubleClick(true);
      setStartGameState(list);
      return false;
    }
    if (result.id === value.id) {
      setScore(score + 1);
    } else {
      setHeart(heart - 1);
      list[indexOld.current] = false;
      list[index] = false;
    }
    if (heart === 0) {
      handleFalseResultClick();
    }
    if (score === 12) {
      handleFalseResultClick(true);
    }
    setDoubleClick(false);
    setResult(null);
    setStartGameState(list);
  };

  const onClickOKButton = () => {
    setMinutesCoutdown(0);
    setSecondsCoutdown(0);
    const list = [...startGameState];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < listIcon.length; index++) {
      list.push(false);
    }
    setStartGameState(list);
  };
  return (
    <Layout>
      <View style={appStyle.appBar}>
        <Text style={appStyle.turn}>
          SCORE:
          {score}
        </Text>
        {startGameState.length !== 0 && (
          <Text style={appStyle.turn}>
            HEART:
            {heart}
          </Text>
        )}
      </View>
      <View style={appStyle.centerView}>
        {startGameState.length === 0 && (
          <Text style={appStyle.timeText}>
            {`${minutesCoutdown} : ${secondsCoutdown}`}
          </Text>
        )}
        <SizedBox vertical={10} />
        <FlatList
          data={listIcon}
          numColumns={num}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onClickIconImage(item, index)}
              onLongPress={() => onClickIconImage(item, index)}
              disabled={
                startGameState.length === 0 ? true : startGameState[index]
              }
              style={appStyle.iconButton}>
              {startGameState.length === 0 ? (
                <Image source={item.image} style={appStyle.iconImage} />
              ) : (
                <Image
                  source={
                    startGameState[index] ? item.image : images.home.question
                  }
                  style={appStyle.iconImage}
                />
              )}
            </TouchableOpacity>
          )}
        />
        {startGameState.length === 0 && (
          <TouchableOpacity
            onPress={onClickOKButton}
            onLongPress={onClickOKButton}>
            <Image source={images.home.ok} style={appStyle.startImage} />
          </TouchableOpacity>
        )}
      </View>
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  listIcon: PropTypes.array,
  handleFalseResultClick: PropTypes.func,
};

export default connect()(App);
