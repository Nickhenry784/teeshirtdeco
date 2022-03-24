import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  appBar: {
    flex: 0.1,
    width: '100%',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  buyImage: {
    width: 120,
    height: 80,
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
    position: 'absolute',
    top: '35%',
    left: '50%',
  },
  turn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: '35%',
    left: '50%',
  },
  centerView: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  mockupView: {
    flex: 0.6,
    width: '100%',
    paddingLeft: 10,
    height: 200,
    alignItems: 'center',
  },
  textMockup: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '80%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  tshirtView: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tshirtImage: {
    width: 250,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  OKImage: {
    width: 150,
    height: 70,
    marginTop: 15,
    resizeMode: 'contain',
  },
  RefeshImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  footerView: {
    flex: 0.4,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  bearButton: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bearImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
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
    backgroundColor: 'white',
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
