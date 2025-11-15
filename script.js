
const main = document.querySelector('main')
console.log(main)

const h1 = main.firstElementChild;
console.log(h1)

const section = h1.nextElementSibling
console.log(section)

const article = section.firstElementChild;
console.log(article)

const p = article.firstElementChild;
console.log(p)

const productcard = p.nextElementSibling;
console.log(productcard)

const products = productcard.children
console.log(products)

//get card

const cart = main
    .firstElementChild
    .nextElementSibling
    .lastElementChild

console.log(cart)


//step2
const productArray = Array.from(products);
console.log(productArray)

productArray.forEach((p) =>{
    p.addEventListener('click', () =>{
        const h5 = document.createElement('h5')
        h5.innerText = productcard.firstElementChild
                                 .firstElementChild
                                 .innerText;
        
        cart.appendChild(p);
    })
})



