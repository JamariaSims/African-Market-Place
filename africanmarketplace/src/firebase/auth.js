import firebase from "firebase";
import { Link } from "react-router-dom";
require("firebase/auth");

//Sign Up
function SignUp(email, password, userName, setAction) {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			const newUser = {
				userName: userName,
				email: email,
				password: password,
			};
			firebase.database().ref(`users/${userName}${password}`).set(newUser);
			setAction("SignedIn");
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
			setAction(errorMessage);
		});
}
//Sign In
function SignIn(email, password, userName, setAction) {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			// Signed in
			console.log(`Welcome ${userName},`);
			document.getElementById("form").classList.toggle("hide");
			setAction("SignedIn");
		})
		.catch((error) => {
			var errorMessage = error.message;
			console.log(errorMessage);
			setAction(errorMessage);
		});
}
export { SignIn, SignUp };
