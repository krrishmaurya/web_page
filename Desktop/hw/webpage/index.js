const onBurgerClick = () => {
    const menu = document.getElementById("bar");
    const burger = document.getElementById("burger");
    if(menu.style.display === "none"){
        menu.style.display = "block";
        burger.innerHTML = "X"
    } else {
        menu.style.display = "none";
        burger.innerHTML = "&#9776;"
    }

}

