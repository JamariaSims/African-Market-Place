import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
require("firebase/auth");

export function SignUp(tempUser, setUserData, userData, setErrorLog) {
	firebase
		.auth()
		.createUserWithEmailAndPassword(tempUser.email, tempUser.password)
		.then(() => {
			setUserData({ ...userData, ["SignUp"]: false });
			setUserData(tempUser);
			setErrorLog("");
		})
		.catch((error) => {
			var errorMessage = error.message;
			setErrorLog(errorMessage);
		});
}
export function SignIn(tempUser, setErrorLog, setUserData) {
	firebase
		.auth()
		.signInWithEmailAndPassword(tempUser.email, tempUser.password)
		.then(() => {
			tempUser.Login = true;
			tempUser.Market = true;
			setUserData(tempUser);
		})
		.catch((error) => {
			var errorMessage = error.message;
			setErrorLog(errorMessage);
		});
}

export function SendData(userData, cart) {
	firebase.database().ref(`${userData.email}/`).set({ cart });
}
