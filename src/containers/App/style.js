import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const appStyle = StyleSheet.create({
  appBar: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buyItemView: {
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buyImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  back: {
    fontSize: 30,
    fontFamily: 'knitting-pattern',
    color: 'white',
  },
  turn: {
    marginTop: 5,
    fontSize: 30,
    color: 'white',
    fontFamily: 'knitting-pattern',
  },
  scoreText: {
    marginTop: 5,
    fontSize: 30,
    color: 'white',
    fontFamily: 'knitting-pattern',
  },
  homeView: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  topView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '80%',
  },
  labelText: {
    fontFamily: 'knitting-pattern',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  startView: {
    flex: 0.9,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  playView: {
    flex: 0.9,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  bottomView: {
    width: '100%',
    height: '100%',
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  itemButton: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    alignItems: 'center',
  },
  itemImage: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
  },
  playImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  mockupImage: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.3,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '20%',
  },
  closeButton: {
    width: 30,
    height: 30,
    textAlign: 'center',
    position: 'absolute',
    top: '3%',
    right: '3%',
  },
});

export const layoutStyle = StyleSheet.create({
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  children: {
    width: '100%',
    height: '100%',
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'rgba(0,0,0,0.10)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'knitting-pattern',
    fontSize: 20,
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
