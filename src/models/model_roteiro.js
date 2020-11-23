import firebase from 'firebase'

export const model_roteiro = () => ({
    create: async (roteiro) => {
        return await firebase.firestore().collection('roteiro').doc('x').set(roteiro).then(() => roteiro)
    },
    update: () => { },
    search: () => { },
})