import Firebase from "firebase"
import FirebaseConfig from "./FirebaseConfig"
let firebase = Firebase.initializeApp(FirebaseConfig)
export default firebase