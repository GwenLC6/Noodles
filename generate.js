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
    alert(noodles);
}
