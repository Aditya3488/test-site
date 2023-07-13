// const myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!'

// document.querySelector('html').addEventListener('click',function(){
//     alert('Ouch! stop poking me!')
// })

// function multiply(num1,num2){
//     let result = num1*num2;
//     return result
// }
// console.log(multiply(2,3))
// console.log(multiply(5,3))
// console.log(multiply(2.2,3))

const myImage = document.querySelector('img')

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/image2.jpg'){
        myImage.setAttribute('src','images/image1.jpg')
    }else{
        myImage.setAttribute('src','images/image2.jpg')
    }
}
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName(){
    const myName = prompt('please enter your name');
    if(!myName){
        setUserName()
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = `Hello,${myName}`
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    const storedName = localStorage.getItem('name')
    myHeading.textContent = `Hello,${storedName}`
}

myButton.onclick = ()=>{
    setUserName();
}