let currentIndex = 0;
const foodImages = [
    'static/food1.png',
    'static/food2.png',
    'static/food3.png',
    'static/food4.png',
    'static/food5.png',
    'static/food6.png'
];

function changePlateImage() {
    currentIndex = (currentIndex + 1) % foodImages.length;
    const plateImage = document.getElementById('plateImage');
    plateImage.src = foodImages[currentIndex];
}

setInterval(changePlateImage, 3500);

// Kezdéskor beállítjuk az első képet
changePlateImage();



let kosarka = document.querySelector('#kosar');
let kosarkam = document.querySelector('.kosarr');
let zaroKosarka = document.querySelector('#zaro');

//nyitja a kosarat
kosarka.onclick = () => {
    kosarkam.classList.add("active");
   
};
//zárja a kosarat
zaroKosarka.onclick = () => {
    kosarkam.classList.remove("active");
};

/*
document.addEventListener("DOMContentLoaded", function () {
    var addCartButtons = document.querySelectorAll('.add-cart-btn');
    addCartButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Megakadályozza az alapértelmezett űrlapbeküldési működést

            // Adatok kinyerése a gombhoz tartozó adatmezőkből
            var productName = button.getAttribute('data-name');
            var productPrice = parseInt(button.getAttribute('data-price'));
            var productQty = parseInt(button.previousElementSibling.value); // Mennyiség lekérése az input mezőből

            // Ellenőrzés, hogy a termék már van-e a kosárban
            var existingItem = document.querySelector('.kosar-box[data-name="' + productName + '"]');
            if (existingItem) {
                // Ha már van a termék a kosárban, növeljük a mennyiséget
                var currentQty = parseInt(existingItem.querySelector('.kosar-mennyiseg').value);
                existingItem.querySelector('.kosar-mennyiseg').value = currentQty + productQty;
            } else {
                // Ha még nincs a termék a kosárban, hozzáadjuk
                addToCart(productName, productPrice, productQty);
            }

            // Kosár frissítése
            updateTotal();
        });
    });

    // Kosárból való törlés kezelése
    var cartContent = document.querySelector('.kosar-tartalom');
    cartContent.addEventListener('click', function (event) {
        if (event.target.classList.contains('cart-remove')) {
            event.target.closest('.kosar-box').remove(); // Törli a terméket a kosárból
            updateTotal(); // Frissíti az összeget
        } updateTotal();
    }
    );

    // Mennyiség módosítása kezelése
    cartContent.addEventListener('change', function (event) {
        if (event.target.classList.contains('kosar-mennyiseg')) {
            updateTotal(); // Frissíti az összeget
        }
    });

    function addToCart(name, price, quantity) {
        // Kosár tartalomának frissítése
        var cartContent = document.querySelector('.kosar-tartalom');

        // Új termék létrehozása
        var newItem = document.createElement('div');
        newItem.classList.add('kosar-box');
        newItem.dataset.name = name;
        newItem.innerHTML = `
            <img src="food1.png" alt="" class="kosar-kep">
            <div class="kosar-reszletek">
                <div class="kosar-termek-cim">${name}</div>
                <div class="kosar-ar">${price * quantity} Ft</div>
                <input type="number" value="${quantity}" class="kosar-mennyiseg">
            </div>
            <i class='bx bxs-trash-alt cart-remove'></i>
        `;

        // Új termék hozzáadása a kosárhoz
        cartContent.appendChild(newItem);
        updateTotal();
    }

    function updateTotal() {
        var total = 0;
        console.log(total);
        var items = document.querySelectorAll('.kosar-box');
        console.log(items);
        items.forEach(function(item) {
            var price = parseInt(item.querySelector('.kosar-ar').innerHTML); // Ár lekérése
            console.log(price);
            var quantity = parseInt(item.querySelector('.kosar-mennyiseg').value); // Mennyiség lekérése
            console.log(quantity);
            total += price * quantity; // Ár és mennyiség szorzása, majd hozzáadása a teljes összeghez
            console.log(total);
        });
    
        // Fizetendő összeg frissítése
        document.getElementById('totalAmount').textContent = total + ' Ft';
    }
    
});*/









// Új függvény az összeg frissítésére
function updateTotal() {
    var total = 0;
    var items = document.querySelectorAll('.kosar-box');
    console.log(items);
    items.forEach(function(item) {
        var price =  item.querySelector('.kosar-ar').innerText * 1 //parseInt(item.querySelector('.kosar-ar'));
        console.log("price:",price);
        var quantity = parseInt(item.querySelector('.kosar-mennyiseg').value);
        console.log(quantity);
        total += price * quantity;
    });
    console.log(total);
    document.getElementById('totalAmount').textContent = total;
}

document.addEventListener("DOMContentLoaded", function () {
    // Add-cart-btn gombokhoz rendelt eseménykezelők
    var addCartButtons = document.querySelectorAll('.add-cart-btn');
    addCartButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var productName = button.getAttribute('data-name');
            var productPrice = parseInt(button.getAttribute('data-price'));
            var productImage = button.getAttribute('data-image');

            var productQty = parseInt(button.previousElementSibling.value);
            var existingItem = document.querySelector('.kosar-box[data-name="' + productName + '"]');
            if (existingItem) {
                var currentQty = parseInt(existingItem.querySelector('.kosar-mennyiseg').value);
                existingItem.querySelector('.kosar-mennyiseg').value = currentQty + productQty;
            } else {
                addToCart(productName, productPrice, productQty, productImage);
            }
            updateTotal(); // Összeg frissítése az új elem hozzáadása után
        });
    });

    // Cart-remove ikonokhoz rendelt eseménykezelők
    var cartContent = document.querySelector('.kosar-tartalom');
    cartContent.addEventListener('click', function (event) {
        if (event.target.classList.contains('cart-remove')) {
            event.target.closest('.kosar-box').remove();
            updateTotal(); // Összeg frissítése a termék eltávolítása után
        }
    });

    // Mennyiség módosítása eseménykezelő
    cartContent.addEventListener('change', function (event) {
        if (event.target.classList.contains('kosar-mennyiseg')) {
            updateTotal(); // Összeg frissítése a mennyiség módosítása után
        }
    });

    function addToCart(name, price, quantity, image) {
        var cartContent = document.querySelector('.kosar-tartalom');
        var newItem = document.createElement('div');
        newItem.classList.add('kosar-box');
        newItem.dataset.name = name;
        console.log("Retkes kép", image);
        newItem.innerHTML = `
            <img src="static/${image}" alt="" class="kosar-kep">
            <div class="kosar-reszletek">
                <div class="kosar-termek-cim">${name}</div>
                <div class="kosar-ar">${price * quantity}</div>
                <input type="number" value="${quantity}" class="kosar-mennyiseg">
            </div>
            <i class='bx bxs-trash-alt cart-remove'></i>
        `;
        cartContent.appendChild(newItem);
    }
});


console.log("hello");