
class CartProduct {
    
    constructor (title,description,image) {
        this.title = title
        this.description = description
        this.image = image
    }
    
    createListener(element){
        element.addEventListener("click", () => {
            
        })
    }

    generateProduct() {
        const productInfo = `
            <div class="container-product-img"><img class='product-img' src=""></div>
            <div class="card-bodroduct">
                <h3 class="title-product"></h3>
                <p class="description-product"></p>
                <div class="footer-card">
                    <div class="footer-card-qte">
                        <button class="btn-product-qte">-</button>
                        <strong>0</strong>
                        <button class="btn-product-qte">+</button>
                    </div>
                    <button class="btn-product">Ajouter au panier</button>
                </div>
            </div>
    `
        
        const div = document.createElement("div")
        div.innerHTML = productInfo
        div.classList.add('card-product')
        
        const imgElement =  div.getElementsByClassName("product-img")
        const titleElement =  div.getElementsByClassName("title-product")
        const descriptionElement =  div.getElementsByClassName("description-product")
        
        imgElement[0].src = this.image
        titleElement[0].innerText = this.title
        descriptionElement[0].innerText = this.description
        
        this.createListener(div)
        
        this.addProductToDOM(div)
    }
    
    addProductToDOM(element) {
        let containerProduct = document.querySelector('.container-products')
        containerProduct.append(element)
    }
}

//const products = [  {title: "mon titre", image:"img", description: "dsfdsf"},{title: "mon titre", image:"img", description: "dsfdsf"}    ]

export default CartProduct;