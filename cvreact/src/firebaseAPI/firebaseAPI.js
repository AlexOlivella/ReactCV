
import firebase from './config'

const db = firebase.firestore()


export async function publishReview(name, lastName, company, position, review, ratio) {
    return await db.collection("reviews").add({
        name,
        lastName,
        company,
        position,
        review,
        ratio
    })
        .then(function () {
            return "success"
        })
        .catch(function (error) {

        });

}