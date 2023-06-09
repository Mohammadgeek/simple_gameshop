
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {logic} from './compotent'
import style from './dynamic.css';
import styletwo from './static.css';
import './compotent';


let getImages = document.querySelectorAll('img');
let div_image = document.querySelectorAll('label');
let getinp = document.querySelectorAll('input');
let ul_list = document.querySelector('ul');
let fa = document.querySelectorAll('.fa');

let body = document.querySelector('body');
let cart = document.querySelector('#cart_icon');

let imglst = document.querySelectorAll('label img')

let originalsrc; // golbal bariable 


main();

function main(){
  window.addEventListener('DOMContentLoaded',function(){
    console.log('loaded page');
    localStorage.clear();
    create_elem();
    create_cart();
    add_game_cart();
  })
}
// change game images with hambarger menu + button page
/*
window.onload = () =>{
    console.log('loaded page');
    localStorage.clear();
    create_elem();
    create_cart();
    add_game_cart();
}
*/



function add_game_cart(){

  let tbody = document.querySelector('tbody');
  let c = [...imglst]; // create array with speard method
  let arr2 = [...tbody.children];

  for(const i of c){

    i.addEventListener('click',function(){
      let gamediv = document.createElement('div')

      gamediv.setAttribute('id','imgitem');

      let gameimg = document.createElement('img');
      gameimg.setAttribute('id','imgsrc');

      localStorage.setItem('imgsrc',originalsrc); // using data store for save src images
      let read_data = JSON.stringify(localStorage.getItem('imgsrc'));
      console.log(`reading stronge from json : ${JSON.parse(read_data)}`);
       
      
      if(arr2.length <= 5){
        console.log('show image product in order!');
         originalsrc = i.src;
         gameimg.src = originalsrc;
         tbody.appendChild(gamediv);
         gamediv.appendChild(gameimg);
         document.querySelector('tr').style.right = "6rem";
         

      }else{
        arr2.forEach(index =>{
          arr2.pop(); // remove lastchild
        })
      }

    })
  }
 
}

function create_elem(){

body.insertAdjacentHTML
('afterbegin',"<button id = cart_icon class = btn btn-primary  type= button data-toggle= modal data-target=#cartModal>cart order</button>")

body.insertAdjacentHTML('afterbegin',`<i id = "moonicon" class="fa fa-moon-o themeicon"></i>`)
let cart_btn = document.querySelector('button');  


cart_btn.insertAdjacentHTML(
    'afterbegin',
   `
   <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel">
          Your Shopping Cart
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table table-image">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Game</th>
              <th scope= "col">count</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody class = "table">
          </tbody>
 
          
   `
)

create_price_item();
create_count_item();


lightmode();
//Darkmode();

}


function create_cart(){
let cart_btn = document.querySelector('#cart_icon');
let cart_model = document.querySelector('#cartModal');
let modelmain = document.querySelector('.modal-content')

cart_btn.addEventListener('click',function(){
    console.log(document.querySelector('#cartModal'))
    cart_model.classList.add('show');
    body.style.overflow = "hidden";

    if(modelmain.classList.contains('hide')){
        ul_list.style.filter = 'none'
        console.log('Open cart order')
        modelmain.classList.toggle('show');
        body.style.overflow = "visible"
    }
    if(modelmain.classList.contains('hide') && modelmain.classList.contains('show')){
      console.log('show hide class name');
      body.style.overflow = "hidden";
      ul_list.style.filter = "blur(0.5rem)";
    }
    
    close_cart();
   

})

}

function create_price_item(){
    let tbody = document.querySelector('tbody');
    let thead = document.querySelector('thead');
    let div_price = document.createElement('div');
    div_price.setAttribute('id','pricediv');

    const ELNew = (tag, prop,) => Object.assign(document.createElement(tag), prop,);
    console.log('created price value product!')
    

    const userCorrectAnswers = [
      ELNew("span", {textContent:"120$"},),
      ELNew("span", {textContent:"60$"}),
      ELNew("span", {textContent:"30$"}),
      ELNew("span", {textContent:"40$"}),
      ELNew("span", {textContent:"20$"}),
      ELNew("span", {textContent:"12$"}),
    ]

    console.log('create array price item : ',userCorrectAnswers);
      
    imglst.forEach(value =>{
      value.addEventListener('click',function(){
        userCorrectAnswers.forEach(index =>{
        console.log(`show detail index value equall : ${index.innerHTML}`)
        div_price.innerHTML = index.innerHTML;
      })
  })     
})

    /*
      imglst.forEach(value =>{
        value.addEventListener('click',function(){
          thead.after(div_price);
          div_price.innerHTML = userCorrectAnswers.reduce((html, el) => html += el.outerHTML, "");
        })
      })*/

}

function create_count_item(){
  console.log('created count value!')

  let tbox = document.querySelector('thead')
  let quantity = document.createElement('div');

  quantity.setAttribute('class','count_item')
  tbox.before(quantity);

  // write custom html code in js

   quantity.style.cssText = `
   position: absolute;
   display : flex;
   flex-flow: wrap column;
   left: 45%;
   top: 6rem;
   `

   imglst.forEach(value =>{
    value.addEventListener('click',function(){
      quantity.insertAdjacentHTML('afterbegin',
  `
    <input type="number" id="quantity" name="quantity" min="1" max="7" title = "add count items!" value = "">
  `)
  let input_count_item = document.querySelector('#quantity');
        })
   })
}

function close_cart(){
    let closeicon = document.querySelector('.close');
    let modelmain = document.querySelector('.modal-content')
    console.log(closeicon);
    closeicon.addEventListener('click',function(){
        modelmain.classList.toggle('hide');
    })
}

function Darkmode(){
  console.log('Dark mode enable!')
  let moonicon = document.querySelector('#moonicon');
  let sun = document.querySelector('#sunicon');

  moonicon.style.display = 'block';
  moonicon.addEventListener('click',function(){
      localStorage.removeItem('theme');
      let get_theme = localStorage.setItem('theme','darktoggle')
      if(localStorage.getItem('theme') == 'darktoggle'){
       body.classList.remove('light');
       moonicon.style.display = 'none';
       sun.style.display = 'block'
      }
  })

}

function lightmode(){
 let moonicon = document.querySelector('#moonicon');
 moonicon.style.display = 'none';
 body.insertAdjacentHTML('afterbegin',`<i id = "sunicon" class="fa fa-sun-o"></i>`)
 let sun = document.querySelector('#sunicon');
 sun.addEventListener('click',function(){
   localStorage.setItem('theme','light')
   body.classList.toggle('light');
   if(body.classList.contains('light')){
      sun.style.display = 'none';
      Darkmode();
   }
  
 })

}




    
