import data from '../data/producto.json'

export const askData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000)
    })
}
export const askDataId = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((elem) => elem.id === id)
        if (item) {
            resolve(item)
        } else {
            reject({Error: 'Item inexistente'})
        }
    })
}