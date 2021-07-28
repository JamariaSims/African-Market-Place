import firebase from "firebase";
require("firebase/auth");

//Sign Up
function SignUp(Data, setData) {
	const { email, password, username } = Data;
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			firebase.database().ref(`${username}/}`).set(Data);
			setData("SignedIn");
		})
		.catch((error) => {
			var errorMessage = error.message;
			setData({ ...Data, ["errorCode"]: errorMessage });
		});
}
/* -------------------------------------------------------------------------- */
/*                                   Sign In                                  */
/* -------------------------------------------------------------------------- */
function SignIn(Data, setData) {
	console.log(Data);
	const { email, password } = Data;

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			console.log(res);
			document.getElementById("form").classList.toggle("hide");
			setData({ ...Data, ["action"]: "LoggedIn" });
		})
		.catch((error) => {
			var errorMessage = error.message;
			setData({ ...Data, ["errorCode"]: errorMessage });
		});
}
export { SignIn, SignUp };
