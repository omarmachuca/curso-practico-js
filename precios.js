const precioConDescuento = (precio, descuento) => precio - (precio * (descuento/100));

const coupons = [
    { 
        name: "Omar 50",
        discount: 50,  
    },
    {
        name: "Omar 30",
        discount: 30,  
    },
    {
        name: "Omar 20",
        discount: 20,  
    },
];



function onClickprecioConDescuento(){

    //Obtengo Valores de los Inputs
    const price = Number(document.getElementById("InputPrice").value);
    const discount = Number(document.getElementById("InputDiscount").value);
    const couponValue = document.getElementById("InputCoupon").value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };


    //Valido si la clave de cupon es vacia, si esta vacia toma el descuento escrito, sino busca 
    //el descuento del cupon
    if (couponValue == ""){
        precioReal = precioConDescuento(price, discount);
    }
    else{

       const userCoupon = coupons.find(isCouponValueValid);  

        if (!userCoupon){
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "Cupon No Valido";
            return;

        }else{
            precioReal = precioConDescuento(price, userCoupon.discount);
        }
       
    }

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio real es: " + precioReal;

};