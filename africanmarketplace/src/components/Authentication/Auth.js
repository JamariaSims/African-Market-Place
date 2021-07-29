import firebase from "firebase";
import WalledGarden from "../../Views/WalledGarden";
require("firebase/auth");

export function SignUp(userData, setUserData, test, setErrorLog) {
	firebase
		.auth()
		.createUserWithEmailAndPassword(test.email, test.password)
		.then(() => {
			// setUserData(tempUser);
			firebase.database().ref(`Emails/`).set({ test });
			firebase.database().ref(`Users/`).set({ test });
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
			setUserData(tempUser);
		})
		.catch((error) => {
			var errorMessage = error.message;
			setErrorLog(errorMessage);
		});
}

export function UserCheck(userData, setUserData, test, setErrorLog) {
	var ref = firebase.database().ref();
	ref.on("value", (snapshot) => {
		const data = snapshot.val();
		const { Users, Emails } = data;
		console.log(`${Users}.${test.username}`);
	});
	// SignUp(userData, setUserData, test, setErrorLog);
}
