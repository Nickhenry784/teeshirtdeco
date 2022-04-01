import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  appBar: {
    flex: 0.1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  buyImage: {
    width: 90,
    height: 30,
    resizeMode: 'contain',
  },
  back: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'ViaAppia',
    position: 'absolute',
    marginTop: 10,
    left: '-45%',
  },
  turn: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'ViaAppia',
    position: 'absolute',
    paddingTop: 6,
    left: '60%',
  },
  centerView: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  topImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },

  playImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  panelImage: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  startImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  bottomView: {
    flex: 0.8,
    width: '80%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trueImage: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
  },
  playView: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-start',
    width: '100%',
  },
  timeText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'ViaAppia',
  },
  calculationView: {
    flex: 0.4,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculationText: {
    fontSize: 40,
    paddingRight: 10,
    color: 'white',
    fontFamily: 'ViaAppia',
  },
  popup: {
    width: 300,
    height: 200,
    position: 'absolute',
    top: '40%',
  },
  popupImage: {
    width: 310,
    height: 150,
    resizeMode: 'contain',
    alignItems: 'center',
    paddingTop: 70,
  },
  scoreText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'ViaAppia',
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
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#2d1416',
    justifyContent: 'flex-start',
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
    backgroundColor: 'white',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'ViaAppia',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
