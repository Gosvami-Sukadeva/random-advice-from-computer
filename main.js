const advices = ["walcz", "przemyśl to jeszcze raz"];
const add = document.querySelector('.add');
const remove = document.querySelector('.clean');
const h1 = document.querySelector('h1');
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");

const addElement = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if (input.value.length) {
        for (advice of advices) {
            if (advice === newAdvice) {
                alert("ta rada już jest");
                return
            }
        }
    }
    console.log('działa!!');
    advices.push(newAdvice);
    input.value = "";
}
const cleanElements = (e) => {
    e.preventDefault();
    console.log('wyczyszczone');
    advices.length = 0;

}
const showTheDragon = () => {
    const index = Math.floor(Math.random() * advices.length);
    h1.textContent = `${advices[index]}`
}

const showAllOptions = () => {
    alert(advices.join(" ---- "));
}

showOptions.addEventListener('click', showAllOptions);
showAdvice.addEventListener('click', showTheDragon);
remove.addEventListener('click', cleanElements);
add.addEventListener('click', addElement);