var greetBtn = document.querySelector(".greetButton")
// var output =  document.getElementById("greetingOutput")
var output = document.querySelector(".display")
var resetButton = document.querySelector(".resetButton")
var inputName = document.querySelector('#input')
var count = document.querySelector(".counter")

if (localStorage['name'] !== undefined) {
    var nameStore = JSON.parse(localStorage['name'])
} else {
    nameStore = {}
}

var greetInstance = MyFactoryFunction(nameStore);
counter()
count.innerHTML = greetInstance.getCount();

greetBtn.addEventListener('click', function () {
    var checkRadioBtn = document.querySelector("input[name='radioBtn']:checked");
    if (checkRadioBtn) {
        var language = checkRadioBtn.value;
    };

    var name = inputName.value;
    output.innerHTML = greetInstance.greet(name, language);
    localStorage['name'] = JSON.stringify(greetInstance.getName())
    counter()
});



function counter() {
    count.innerHTML = greetInstance.getCount();
}


resetButton.addEventListener('click', function () {
    localStorage.clear()
    count.innerHTML = 0
    output.innerHTML = "";
});

// greetBtn.addEventListener("click", greetFunc)