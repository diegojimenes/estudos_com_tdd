
export const model_roteiro = () => ({
    create: (roteiro) => {
        return roteiro
    },
    update: (roteiro) => {
        return roteiro
    },
    search: (id) => {
        if (id != 'x') return []
        return [{ id }]
    },
})