
let getImages = document.querySelectorAll('img');
let div_image = document.querySelectorAll('label');
let getinp = document.querySelectorAll('input');
let ul_list = document.querySelector('ul');
let fa = document.querySelectorAll('.fa');

let body = document.querySelector('body');
let cart = document.querySelector('#cart_icon');

let originalsrc;


// count hover input element & visible tick effect




// change game images with hambarger menu + button page
window.onload = () =>{
    console.log('loaded page');
    localStorage.clear();
    create_elem();
    create_cart();
    getsrc_img();
}






function getsrc_img(){
  
  total_img = document.querySelectorAll('label img')
  let c = [...total_img]; // create array with speard method
  for(const i of c){
    //console.log('get src images:',i.src);
    i.addEventListener('click',function(){
      let gamediv = document.createElement('div')
      //let gamediv = document.createElement('div');
      gamediv.setAttribute('id','imgitem');

      let gameimg = document.createElement('img');
      gameimg.setAttribute('id','imgsrc');

      let tbody = document.querySelector('tbody');

      

      console.log(gamediv.parentNode);

      localStorage.setItem('imgsrc',originalsrc); // using data store for save src images
      let read_data = JSON.stringify(localStorage.getItem('imgsrc'));
      console.log(`reading stronge from json : ${JSON.parse(read_data)}`);
       
      let arr2 = [...tbody.children];
      if(arr2.length <= 5){
        console.log('show image product in order!');
         originalsrc = i.src;
         gameimg.src = originalsrc;
         tbody.appendChild(gamediv);
         gamediv.appendChild(gameimg);
         console.log('cart order child item :: ',tbody.children);

      }else{
        arr2.forEach(index =>{
          arr2.pop(); // remove lastchild
        })
      }

    })
  }
 
}

function create_elem(){

//fix_overlay();

body.insertAdjacentHTML
('afterbegin',"<button id = cart_icon class = btn btn-primary  type= button data-toggle= modal data-target=#cartModal>cart order</button>")

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

let checkboxes = document.querySelector('.overlay')
let inputbox = document.querySelectorAll('input');


let result = getComputedStyle(checkboxes,':before').content;
if(result === '\02713'){
  console.log('true output input : checked!')
}

create_price_item();
create_count_item();
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

    const ELNew = (tag, prop,) => Object.assign(document.createElement(tag), prop,);
    console.log('created price value product!')
    
    const userCorrectAnswers = [
      ELNew("div", {textContent:"120$"},),
      ELNew("div", {textContent:"60$"}),
      ELNew("div", {textContent:"30$"}),
      ELNew("div", {textContent:"40$"}),
     // ELNew("div", {textContent:"20$"}),
     // ELNew("div", {textContent:"12$"}),
    ]
    //thead.after(div_price);

    div_price.style.cssText = `
    position: absolute;
    left: 85%;
    font-size: 1.4em;
    top: 7rem;
   `
    //div_price.innerHTML = userCorrectAnswers.reduce((html, el) => html += el.outerHTML, "");
    console.log('create array price item : ',userCorrectAnswers);
    
    let arr2 = [...tbody.children];
    if(arr2.length <= 5){
      thead.after(div_price);
      div_price.innerHTML = userCorrectAnswers.reduce((html, el) => html += el.outerHTML, "");
    }

    //style price item
    /*
position: absolute;
left: 18rem;
font-size: 1.3em;
top: 7rem;
*/
}

function create_count_item(){
  console.log('created count value!')
}
function close_cart(){
    let closeicon = document.querySelector('.close');
    let modelmain = document.querySelector('.modal-content')
    console.log(closeicon);
    closeicon.addEventListener('click',function(){
        console.log('close cart order')
        modelmain.classList.toggle('hide');
    })
}




