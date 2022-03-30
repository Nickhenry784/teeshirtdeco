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
  back: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Mat Saleh',
  },
  turn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Mat Saleh',
  },
  centerView: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  brainImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'Mat Saleh',
    textAlign: 'center',
  },
  labelReadyText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'Mat Saleh',
    textAlign: 'center',
  },
  startImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  timeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'Mat Saleh',
    textAlign: 'center',
  },
  gridView: {
    width: '90%',
    height: 450,
    paddingLeft: 10,
    alignItems: 'center',
  },
  iconButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  gameOverImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    top: '30%',
  },
  winImage: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    position: 'absolute',
    top: '30%',
  },
  iconImage: {
    width: 60,
    height: 60,
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
    backgroundColor: 'blue',
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
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
