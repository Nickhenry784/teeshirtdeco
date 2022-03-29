import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  appBar: {
    flex: 0.1,
    width: '100%',
    paddingLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buyButton: {
    width: 100,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  tshirtDecorView: {
    flex: 0.6,
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bearDecorImage: {
    width: 100,
    height: 100,
    opacity: 0.7,
    resizeMode: 'contain',
  },
  back: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  turn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  centerView: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  mockupView: {
    flex: 0.5,
    width: '100%',
    paddingLeft: 10,
    height: 200,
    alignItems: 'center',
  },
  manImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  hairImage: {
    width: 200,
    height: 110,
    resizeMode: 'contain',
    position: 'absolute',
    top: '-8%',
  },
  saveButton: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
  },
  saveImage: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
  },
  frameImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  footerView: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  hairImageList: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    top: '0%',
    left: '5%',
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
    backgroundColor: 'rgba(0,0,0,0.10)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
