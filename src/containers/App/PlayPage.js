import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { images } from 'assets/images';
import { SizedBox } from 'sizedbox';
import { calculationInt, randomIntFromInterval } from 'utils/number';
import { createStructuredSelector } from 'reselect';
import { appStyle } from './style';
import { incrementScore } from './actions';
import { makeSelectScore } from './selectors';

function PlayPage({ score, handleFalseResultClick, dispatch }) {
  const [secondsCoutdown, setSecondsCoutdown] = useState(5);
  const [randomResult, setRandomResult] = useState(randomIntFromInterval(0, 3));
  const calculation = ['+', '-', 'x', '/'];
  const index = useRef(10);

  const calculationNumber = useRef([
    randomIntFromInterval(0, index.current),
    randomIntFromInterval(1, index.current),
    calculation[randomIntFromInterval(0, 3)],
  ]);

  const calculationResult = useRef(
    calculationInt(
      calculationNumber.current[0],
      calculationNumber.current[1],
      calculationNumber.current[2],
    ),
  );

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (secondsCoutdown > 0) {
        setSecondsCoutdown(secondsCoutdown - 1);
      }
      if (secondsCoutdown === 0) {
        handleFalseResultClick();
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [secondsCoutdown]);

  const onClickTrueButton = isTrue => {
    switch (calculationNumber.current[2]) {
      case '+': {
        if (isTrue === true) {
          if (
            calculationNumber.current[0] + calculationNumber.current[1] ===
            calculationResult.current
          ) {
            dispatch(incrementScore());
          } else {
            handleFalseResultClick();
          }
        } else if (
          calculationNumber.current[0] + calculationNumber.current[1] !==
          calculationResult.current
        ) {
          dispatch(incrementScore());
        } else {
          handleFalseResultClick();
        }
        break;
      }
      case '-': {
        if (isTrue === true) {
          if (
            calculationNumber.current[0] - calculationNumber.current[1] ===
            calculationResult.current
          ) {
            dispatch(incrementScore());
          } else {
            handleFalseResultClick();
          }
        } else if (
          calculationNumber.current[0] - calculationNumber.current[1] !==
          calculationResult.current
        ) {
          dispatch(incrementScore());
        } else {
          handleFalseResultClick();
        }
        break;
      }
      case 'x': {
        if (isTrue === true) {
          if (
            calculationNumber.current[0] * calculationNumber.current[1] ===
            calculationResult.current
          ) {
            dispatch(incrementScore());
          } else {
            handleFalseResultClick();
          }
        } else if (
          calculationNumber.current[0] * calculationNumber.current[1] !==
          calculationResult.current
        ) {
          dispatch(incrementScore());
        } else {
          handleFalseResultClick();
        }
        break;
      }
      case '/': {
        if (isTrue === true) {
          if (
            calculationNumber.current[0] / calculationNumber.current[1] ===
            calculationResult.current
          ) {
            dispatch(incrementScore());
          } else {
            handleFalseResultClick();
          }
        } else if (
          calculationNumber.current[0] / calculationNumber.current[1] !==
          calculationResult.current
        ) {
          dispatch(incrementScore());
        } else {
          handleFalseResultClick();
        }
        break;
      }
      default: {
        return false;
      }
    }
    if (score > 10) {
      index.current += 10;
    }
    setRandomResult(randomIntFromInterval(0, 3));
    calculationNumber.current = [
      randomIntFromInterval(0, index.current),
      randomIntFromInterval(1, index.current),
      calculation[randomIntFromInterval(0, 3)],
    ];
    calculationResult.current = calculationInt(
      calculationNumber.current[0],
      randomResult === 0
        ? calculationNumber.current[1]
        : randomIntFromInterval(0, 30),
      calculationNumber.current[2],
    );
    setSecondsCoutdown(5);
  };

  return (
    <View style={appStyle.playView}>
      <ImageBackground source={images.home.score} style={appStyle.buyImage}>
        <Text style={appStyle.turn}>{score}</Text>
      </ImageBackground>
      <View style={appStyle.centerView}>
        <Image source={images.home.top} style={appStyle.topImage} />
        <SizedBox vertical={5} />
        <Text style={appStyle.timeText}>{secondsCoutdown}</Text>
        <SizedBox vertical={10} />
        <ImageBackground source={images.home.panel} style={appStyle.panelImage}>
          <View style={appStyle.calculationView}>
            <Text style={appStyle.calculationText}>
              {calculationNumber.current[0]}
            </Text>
            <Text style={appStyle.calculationText}>
              {calculationNumber.current[2]}
            </Text>
            <Text style={appStyle.calculationText}>
              {calculationNumber.current[1]}
            </Text>
            <Text style={appStyle.calculationText}> = </Text>
            <Text style={appStyle.calculationText}>
              {calculationResult.current === 0
                ? 0
                : calculationResult.current.toFixed(2)}
            </Text>
          </View>
        </ImageBackground>
        <SizedBox vertical={30} />
        <View style={appStyle.bottomView}>
          <TouchableOpacity
            onPress={() => onClickTrueButton(true)}
            onLongPress={() => onClickTrueButton(true)}>
            <Image source={images.home.true} style={appStyle.trueImage} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onClickTrueButton(false)}
            onLongPress={() => onClickTrueButton(false)}>
            <Image source={images.home.false} style={appStyle.trueImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

PlayPage.propTypes = {
  score: PropTypes.number,
  dispatch: PropTypes.func,
  handleFalseResultClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  score: makeSelectScore(),
});

export default connect(mapStateToProps)(PlayPage);
