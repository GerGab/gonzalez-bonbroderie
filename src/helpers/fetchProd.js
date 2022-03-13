export const getFetch = new Promise((resolve,reject) => {
    fetch("./productos.json")
    .then(resp => resp.json())
    .then(productos => 
        setTimeout(()=> {resolve(productos)},3000))
})