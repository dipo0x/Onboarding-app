import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const colors = {
  primary: "#181619",
  background: '#000',
  inputBackground: '#232323',
  white: '#FFF',
  grayText: '#999',
  lightGray: '#AAA',
  pinkLink: '#FF69B4',
  divider: '#555',
  outlineColor: "#4C4C4C",
  placeHolderColor: "#7D7D7D"
};

export const appStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  indexContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    color: colors.white,
    marginTop: 2,
    letterSpacing: 1.0,
    fontFamily: "Manrope-Bold",
  },
  imageContainer: {
    alignItems: "center",
    transform: [{ translateY: 70 }],
    maxWidth: 300,
    height: 300,
  },
  signUpButton: {
    justifyContent: "space-between",
    paddingTop: 180,
  },
  buttonContainer: {
    width: 365,
    height: 60,
    borderRadius: 25,
    overflow: "hidden",
  },
  gradientBackground: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Manrope-Bold",
  },
  loginButtonText: {
    marginTop: 40,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Manrope-Bold",
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  phonePage: {
    alignItems: "center",
    
    paddingTop: 40,
  },
  phoneHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Manrope-Bold",
  },
  username: {
    paddingTop: 50,
    color: "white",
    fontSize: 40,
    fontWeight: "regular",
  },
  changeUsername: {
    paddingTop: 15,
    color: "#E3428F",
    fontSize: 20,
    fontWeight: "semibold"
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.inputBackground,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: -17,
    paddingVertical: 15,
    paddingHorizontal: 15,
    outlineColor: colors.outlineColor,
    outlineStyle: "solid",
    outlineWidth: 1,
  },
  countryCodeContainer: {
    borderRadius: 12,
    height: 40,
    width: 70,
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: colors.divider,
    backgroundColor: colors.outlineColor,
    marginRight: 10,
    justifyContent: 'center',
  },
  countryCodeText: {
    paddingLeft: 6,
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    color: colors.white,
    fontSize: 18,
  },
  termsText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 17,
    marginHorizontal: 20,
    marginTop: 40,
    lineHeight: 20,
  },
  linkText: {
    color: colors.pinkLink,
    fontWeight: 'bold',
  },
  nextButtonContainer: {
    alignSelf: 'flex-end',
    marginRight: 20,
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 30
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 30,
    lineHeight: 30,
  },
  keypad: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  keyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  keyContainer: {
    width: (width - 60) / 3,
    height: width * 0.15,
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  keyNum: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '300'
  },
  keyLetters: {
    color: colors.lightGray,
    fontSize: 10,
    marginTop: 2,
  },
  otpHeaderText: {
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    flexDirection: 'row',
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Manrope-Bold",
  },
  otpTextInput: {
    flex: 1,
    color: colors.white,
    fontSize: 30,
    textAlign: "center"
  },
  nameTextInput: {
    flex: 1,
    height: 30,
    color: colors.white,
    fontSize: 15,
    marginLeft: 10,
  },
  nameTextInput2: {
    flex: 1,
    height: 30,
    color: colors.white,
    fontSize: 15,
    marginLeft: 10
  },
   profilePictureContainer: {
    alignItems: "center",
    transform: [{ translateY: 70 }],
    borderRadius: "100%",
    width: 220,
    height: 220,
  },
  profilePictureButton: {
    marginBottom: 0,
    width: 365,
    height: 60,
    borderRadius: 25,
    overflow: "hidden",
  },
   profilePictureNextButton: {
    justifyContent: "space-between",
    paddingTop: 370,
  },
  skipButton: {
    position: "absolute",
    top: 70,
    right: 30,
    zIndex: 1,
  },
  skipButtonText: {
    color: colors.placeHolderColor,
    fontFamily: "Manrope-SemiBold",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipButtonStyle: {
    color: colors.white
  },
  skipHeaderText: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    flexDirection: 'row',
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Manrope-Bold",
  },
});
