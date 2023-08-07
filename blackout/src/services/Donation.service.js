import { db } from "../firebase/Firebase";
import { collection, addDoc, query, where, getCountFromServer } from "firebase/firestore";


class DonationService {
    constructor() {
        this.collection = 'donations';
    }


    async addDonation(user, amount) {
        const date = new Date();
        console.log(user);
        console.log(amount);
        console.log(date.getTime());


        const docRef = await addDoc(collection(db, this.collection), {
            userid: user.uid,
            amount: amount,
            date: date
          });
    }

    async getDonationCount(user) {
        const coll = collection(db, "donations");
        const q = query(coll, where("userid", "==", user.uid));
        const snapshot = await getCountFromServer(q);
        const count = snapshot.data().count
        return count;
    }

}

export default DonationService;