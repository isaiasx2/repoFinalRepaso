//*VARABLES QUE VAMOS A SELECCIONAR DE NUESTRO DOM*/

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const agregarCarrito = document.getElementsByClassName('agregarCarrito');
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal")


let carrito = []

let stock = []

    const fetchProducts = async ()=>{

        try{

            const request = await fetch('https://fakestoreapi.com/products')

            const response = await request.json()

            /* SPREAD OPERATOR */

            stock.push(...response)
            console.log(stock)



            stock.forEach((product)=>{

                product.quantity = 1

                product.description = "articulo de fake store"


                contenedor.innerHTML += `
                
                
                    <div class="tarjeta">
                    <img src="${product.image}"/>
                    <div class= "tarjeta-cuerpo">
                    
                        <h5 class= "card-title h-50 d-flex align-items-center titulo">
                            <strong>${product.title}</strong>
                        </h5>
                        <p class="card-text precio" >
                        <strong>
                        precio: ${product.price}
                        </strong>
                        </p>
                        <p class="card-text desc">
                        
                        <strong>
                        descripcion :
                        </strong>

                        ${product.description}
                        
                        </p>


                        <p class="card-text cant">
                        <strong>
                        cantidad :
                        
                        </strong>
                        ${product.quantity}

                        </p>

                        <button 
                        onclick="agregarProducto(${product.id})"
                        class="btn btn-primary agregarCarrito">
                        <strong>
                        Agregar al carrito
                        </strong>
                        </button>
                    
                     </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
                 ` 






            })



        }catch (error){
            console.log(error)
        }


      



    }


    fetchProducts();








