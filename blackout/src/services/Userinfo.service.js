import { db } from "../firebase/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";


class UserInfoService {
    constructor() {
        this.collection = 'userinfo';
    }


    async addUser(user, username) {
        await setDoc(doc(db, "userinfo", user.uid), {
            username: username
          });
    }

    async fetchUsername(user) {
        const uid = user.uid;
        const docRef = doc(db, "userinfo", uid);
        const docSnap = await getDoc(docRef);
        return docSnap.data().username;
    }

}

export default UserInfoService;