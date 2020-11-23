import firebase from 'firebase'

export const model_roteiro = () => ({
    create: async (roteiro) => (
        await firebase.firestore().collection('roteiros').doc(roteiro.id).set(roteiro).then(() => roteiro)
    ),
    update: async (roteiro) => (
        await firebase.firestore().collection('roteiros').doc(roteiro.id).update(roteiro).then(() => roteiro)
    ),
    search: async (id) => (
        await firebase.firestore().collection('roteiros').doc(id).get().then((snap) => snap.docs)
    ),
})