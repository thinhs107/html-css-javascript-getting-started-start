/*FallBacks*/
/*Polyfill */
/*Browser Support* HTML5 Please*/

/*Local Storage*/
window.addEventListener("DOMContentLoaded", function(e){
    const orderButton = document.querySelectorAll("button[data-order]");

    orderButton.forEach(function(button){
        button.addEventListener("click", function(e){
            const button = e.currentTarget;
            const container = button.parentNode;

            const order = {
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };

            localStorage.setItem("order", JSON.stringify(order));

            const url = window.location.href.replace("pies.html", "order.html");
            window.location.href=url;
        });
    });
})
