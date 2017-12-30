//点击按钮，改了尺寸
// 生成器随机地为getAdj和getNoun函数生成数字，并返回一个新的披萨名称
function generator(adj, noun) {
    var adjectives = getAdj[adj];
    var nouns = getNoun[noun];
    var randomAdjective = parseInt(Math.random() * adjectives.length);
    var randomNoun = parseInt(Math.random() * nouns.length);
    var name = "The " + adjectives[randomAdjective].capitalize() + " " + nouns[randomNoun].capitalize();
    return name;
}

// 选择随机的形容词及名词
function randomName() {
    var randomNumberAdj = parseInt(Math.random() * adjectives.length);
    var randomNumberNoun = parseInt(Math.random() * nouns.length);
    return generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
}

var ingredientItemizer = function (string) {
    return "<li>" + string + "</li>";
};

// 返回嵌套在<li>中的披萨原料字符串
var makeRandomPizza = function () {
    var pizza = "";

    var numberOfMeats = Math.floor((Math.random() * 4));
    var numberOfNonMeats = Math.floor((Math.random() * 3));
    var numberOfCheeses = Math.floor((Math.random() * 2));
    // 这些函数从各自的原料目录中取出并返回随机的原料
    var selectRandomMeat = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
    var selectRandomNonMeat = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
    var selectRandomCheese = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
    var selectRandomSauce = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
    var selectRandomCrust = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];

    for (var i = 0; i < numberOfMeats; i++) {
        pizza = pizza + ingredientItemizer(selectRandomMeat);
    }

    for (var j = 0; j < numberOfNonMeats; j++) {
        pizza = pizza + ingredientItemizer(selectRandomNonMeat);
    }

    for (var k = 0; k < numberOfCheeses; k++) {
        pizza = pizza + ingredientItemizer(selectRandomCheese);
    }

    pizza = pizza + ingredientItemizer(selectRandomSauce);
    pizza = pizza + ingredientItemizer(selectRandomCrust);

    return pizza;
};

// 为每个披萨分别返回一个DOM元素
var pizzaElementGenerator = function (i) {
    var pizzaContainer,             // 披萨的名称、图片及原料清单容器
        pizzaImageContainer,        // 披萨图片容器
        pizzaImage,                 // 披萨的图片
        pizzaDescriptionContainer,  // 披萨名称及原料清单容器
        pizzaName,                  // 披萨名称
        ul;                         // 原料清单

    pizzaContainer = document.createElement("div");
    pizzaImageContainer = document.createElement("div");
    pizzaImage = document.createElement("img");
    pizzaDescriptionContainer = document.createElement("div");

    pizzaContainer.classList.add("randomPizzaContainer");
    pizzaContainer.style.width = "33.33%";
    pizzaContainer.style.height = "325px";
    pizzaContainer.id = "pizza" + i;                // 给每个披萨元素赋一个独一无二的id
    pizzaImageContainer.style.width = "35%";

    pizzaImage.src = "images/pizza.png";
    pizzaImage.classList.add("img-responsive");
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaContainer.appendChild(pizzaImageContainer);


    pizzaDescriptionContainer.style.width = "65%";

    pizzaName = document.createElement("h4");
    pizzaName.innerHTML = randomName();
    pizzaDescriptionContainer.appendChild(pizzaName);

    ul = document.createElement("ul");
    ul.innerHTML = makeRandomPizza();
    pizzaDescriptionContainer.appendChild(ul);
    pizzaContainer.appendChild(pizzaDescriptionContainer);

    return pizzaContainer;
};

window.performance.mark("mark_start_generating"); // 收集timing数据

// 这个for循环在页面加载时创建并插入了所有的披萨
function initPizze() {
    for (var i = 2; i < 100; i++) {
        var pizzasDiv = document.getElementById("randomPizzas");
        pizzasDiv.appendChild(pizzaElementGenerator(i));
    }
}
requestAnimationFrame(initPizze);

// 使用User Timing API。这里的测量数据告诉了你生成初始的披萨用了多长时间
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to init fixed pizzas on load: " + timeToGenerate[0].duration + "ms");

