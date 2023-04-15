function getThis() {
    console.log(this);
}

// getThis();

// window.getThis();
// console.log(window.getThis);

function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}

function getName() {
    console.log(this.name)
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    getName() {
        console.log(this.name);
    },
    info: {
        information: ['2.3fds'],
        getInfo: function () {
            console.log(this);
        },
    },
};
prod1.getPrice();
prod1.info.getInfo();
prod1.getName();

const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
};

prod2.getName = prod1.getName;

prod2.getName();

// prod2.getPrice();

let str = 'Hello world';
const reversStr = str
    .split('') // Переход на массив  ['H', 'e' ...]
    .reverse() // перевернулась   ['d', 'l' ...]
    .join(''); // переход ее в строку  {dlrow olleH}
// console.log(reversStr);

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    // getName,
};

// getPrice.call(prod3, '*');
// getPrice.apply(prod3, ['*']);

// prod3
// .getName() // undefined
// .getPrice(); // prod3.getPrice()

const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);

setTimeout(getPriceBind, 1000);
