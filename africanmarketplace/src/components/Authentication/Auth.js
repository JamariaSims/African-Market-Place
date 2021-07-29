import firebase from "firebase";
import WalledGarden from "../../Views/WalledGarden";
require("firebase/auth");

export function SignUp(userData, setUserData, tempUser) {
	const { email, password } = tempUser;
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			// firebase.database().ref(`${username}/}`).set(Data);
			setUserData(tempUser);
			console.log(userData);
		})
		.catch((error) => {
			var errorMessage = error.message;
		});
}
export function SignIn(props) {
	const { tempUser, setErrorLog } = props;
	firebase
		.auth()
		.signInWithEmailAndPassword(tempUser.email, tempUser.password)
		.then(() => {
			return "Pass";
		})
		.catch((error) => {
			var errorMessage = error.message;
			setErrorLog(errorMessage);
		});
}
