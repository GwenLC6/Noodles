var noodles = [false, false, false];
var ingredients = [false, false, false, false, false, false, false, false, false, false];

function hasIngredient(checkbox) {
    var category = checkbox.name;
    var index = checkbox.value;
    if(checkbox.checked) {
        if (category == "noodle") {
            noodles[index] = true;
        } else if (category == "ingredient") {
            ingredients[index] = true;
        }
    } else {
        if (category == "noodle") {
            noodles[index] = false;
        } else if (category == "ingredient") {
            ingredients[index] = false;
        }
    }
}

function findRecipes() {
    var recipes = [];
    if ((ingredients[7] && noodles[0]) || (ingredients[12] && noodles[0])) {
        var this_recipe = {};
        this_recipe['value'] = "One-wok Vegan Stir-fry";
        this_recipe['href'] = "vegan.html";
        recipes.push(this_recipe);
    }
    if (ingredients[3] || noodles[0]) {
        var this_recipe = {};
        this_recipe['value'] = "Hearty Soup Noodle";
        this_recipe['href'] = "soup.html";
        recipes.push(this_recipe);
    }
    if (noodles[1]) {
        var this_recipe = {};
        this_recipe['value'] = "Cold Soba Treat";
        this_recipe['href'] = "soba.html";
        recipes.push(this_recipe);
    }
    if (noodles[2]) {
        var this_recipe = {};
        this_recipe['value'] = "Spicy Pasta Fusion";
        this_recipe['href'] = "pasta.html";
        recipes.push(this_recipe);
    }
    if (ingredients[4]) {
        var this_recipe = {};
        this_recipe['value'] = "Sweet n Sour Peanut Butter Noodles";
        this_recipe['href'] = "peanut.html";
        recipes.push(this_recipe);
    }

    var modalDiv = document.getElementById("recipe-results2");
    recipes.forEach(element => {
        var div = document.createElement('div');
        var linkToRecipe = document.createElement('a');
        div.setAttribute('class', "big-text");
        linkToRecipe.setAttribute('class', "light");
        linkToRecipe.innerText = element.value;
        linkToRecipe.setAttribute('href', element.href);
        modalDiv.appendChild(div);
        div.appendChild(linkToRecipe);
    });

    showRecipes();
}

function showRecipes() {
    var modal = document.getElementById("recipe-results");
    modal.style.display = "block";
}

var closeButton = document.getElementById("closeResults");
function closeResults() {
    var modal = document.getElementById("recipe-results");
    modal.style.display = "none";
    var modalDiv = document.getElementById("recipe-results2");
    modalDiv.innerHTML = "";
}
