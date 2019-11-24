// 1
const berry = document.getElementById('berry');
console.log(berry);
console.log('I found the berry: ', berry.innerHTML);
berry.style.backgroundColor = "red";

// 2
const fruit = document.querySelector("[data-foodtype='squishy']");
console.log(fruit);
console.log('I found the fruit: ', fruit.innerHTML);
fruit.style.backgroundColor = "orange";

// 3.1
const y = document.getElementsByTagName('li');
console.log(y);

// 3.2
console.log('Using the for loop here:');

for (let i = 0; i < y.length; i++) {
    console.log(y[i].innerHTML);
    if (y[i].innerHTML == 'Pear'){
        y[i].style.backgroundColor = 'green';
    }
    y[i].style.width = '100px';
    y[i].style.listStyleType = 'none';
}

// 4.1
const z = document.querySelectorAll('li');
console.log(z);

// 4.2
console.log('Using forEach here:');

z.forEach((li) => {
    console.log(li.innerHTML);
    li.style.borderStyle = 'solid';
});