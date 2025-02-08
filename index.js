.dropdown-content {
    display: none;
    position: sticky;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    padding: 2px;
    z-index: 1;
    width: fit-content;
    top: 5em;
    border-radius: 2em;
    border: 5px solid greenyellow;
    background-image: url(https://www.publicdomainpictures.net/pictures/290000/nahled/red-and-black-texture-background.jpg);
}

#content{
background: black;
color: white;
font-size: 2em;
}

.cart{
font-size: 20px;
border-radius: 12px;
background: #f73636;
border: 3px solid white;
color: white;
font-family: 'GEORGIA';
}

.cart:hover{
background-color: #02f11e;
transition:all 0ms ease-out;

}


.bukm{
    display: contents;
}





.dark-mode {
   
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
}

.light-mode {
    background: #4B79A1;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #283E51, #4B79A1);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #283E51, #4B79A1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
}

#mode-toggle{
background-color: #f73636;
width: 78px;
border-radius: 30px;
color: antiquewhite;
font-size: 1.2em;
}


* {
box-sizing: border-box;
}

.body {
margin: 0;
font-family: 'Raleway', sans-serif;
position: relative;
 -webkit-touch-callout: none; /* iOS */
    -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera
                                and Firefox */

}

.header {
background-color: #3f3d3d;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
width: 100%;
z-index: 1;
top: 0em;
height: 4em;
}

.heades{
    width: 100%;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 50%;
}
.burger-menu{
    display:none;
}
.burger-icon {
    margin-left: 2em;
    font-size: 1.8em;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    margin-right: 0.2em;
    display:none;
    border-radius: 2em;
}

.main {
display: block;
margin: 0 1rem;
text-align: -webkit-right;
}

.section {
flex: 1 1 100%;
padding: 1rem;
}

.section-1 {
color: white;
padding: 2rem;
text-align: -webkit-center;
width: -webkit-fill-available;
}

.section-2 {
padding: 2rem;
text-align: center;
margin-top: 2rem;
}

.footer {
background-color: #ac3434;
padding: 1rem;
text-align: center;
color: white;
margin-top: 2rem;
}

.heades li{
    margin:5em;
    text-decoration: none;
    font-size: 20px;
    border-radius: 8px;
    color: #755151;
    font-family: 'georgia';
    list-style: none;
}

.heades li a{
    color: white;
    text-decoration-line: none;
}
.logo {
    width: 4em;
    position: absolute;
    top: 0.3em;
    left: 0em;
}


@keyframes zoom {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
.order-button {
background-color: #181717;
border: none;
color: rgb(174 250 5);
padding: 0.5rem 1rem;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 1.2rem;
margin: 0.5rem;
cursor: pointer;
border-radius: 0.5rem;
border: 2px solid #13ff4e;
font-family: inherit;
}

.nav-list {
padding: 0;
margin: 0;
display: block;
list-style: none;
}
.wer{
text-align: center;
margin-top: -4.5em;
}

.kool {
font-family: 'Times New Roman', Times, serif;

}

.menu-items {
display: none;
}
/* list-style: none;
border-radius: 15px;
border: 2px solid #2b3731ab;
background-color: #ffffffeb; */


/* .menu-items.visible {
display: flex;
position: absolute;
top: -0.1em;
} */

/* .menu-items li {
margin: 0.5em auto;
}

.menu-items a {
    text-decoration: none;
    font-size: 20px;
    border-radius: 8px;
    background: #1b972a;
    border: 1.5px solid black;
    color: white;
    font-family: 'georgia';
}

.menu-items a:hover{
background-color: #02f11e;
transition: 0ms;
}
 */
#tagList {
   background: #a2b41952;
    border-radius: 15px;
    width: 18%;
}
@keyframes textAnimation {
0% { opacity: 0; transform: translateY(-20px); }
50% { opacity: 1; transform: translateY(0); }
100% { opacity: 0; transform: translateY(20px); }
}



.animated-text {
    text-align: center;
    color: #ffffff;
}
.img{
max-width: 103%;
width: 200em;
height: auto;
object-fit:contain;

}
.posl{
font-size: xxx-large;
}
.price{
font-size: x-large;
border-radius: 2em;
width:-webkit-fit-content;
}
.nayavn{
color: #02f11e;
font-size: xxx-large;
margin: 0;
}
.flash-text {
color: rgb(77, 235, 15);
animation: flash 2s infinite;
font-size: 1.5em;
}

@keyframes flash {
0% { color: rgb(21, 145, 176); }
100% { color: rgb(163, 237, 3); }
}
.other{
color: rgb(235, 85, 15);
animation: other 2s infinite; 
font-size: 1.5em;
}

@keyframes other {
0% { color: rgb(97, 0, 0); }
100% { color: rgb(237, 77, 3); }
}

.opus{
margin: 1.2em;
font-family: cursive;
color: blanchedalmond;
}

.pospric{
display:block;
margin-top: 4em;
text-align: -webkit-center;
margin-top: -5em;
}

.roz{
border-radius: 12px;
background: #f73636;
border: 3px solid white;
color: white;
font-family: 'GEORGIA';
text-decoration: none;
}
.opus-nuz{
color: white;
list-style: none;
text-align: justify;
}
@media (min-width:960px){
.container {
display: flex;
flex-wrap: wrap;
}

.row {
display: flex;
flex:auto;
justify-content: space-evenly;
}

}

@media (max-width:990px){
.posl{
    font-size: xx-large;
}
.price{
    font-size: x-large;
}
.nayavn{
    font-size: xx-large;
    margin: 0;
}
.opus{
    font-size: x-large;
}
.animated-text{
    font-size: xxx-large;
}
    .heades li {
margin: 4em;
font-size: 16px;
}
}

@media (max-width:720px){
.heades {
    justify-content: flex-end;

}
    .burger-menu {
  display: flex;
    justify-content: flex-end;   
    }
        .heades li {
            margin: 0.6em;
            font-size: 18px;
    }
    .menu-items {
    margin-top: 17em;
    }
}

@media (max-width:690px){
.posl{
    font-size: x-large;
}
.price{
    font-size: large;
}
.nayavn{
    font-size: x-large;
    margin: 0;
}
.opus{
    font-size: medium;
}
.animated-text{
    font-size: x-large;
}
.flash-text {
font-size: 1.2em;
}
.elastic li {
    font-size: x-small;
}
  
    .bukm.visible  {
display: flex;
align-items: baseline;
}
    
    .bukm{
        display:none;
    flex-direction: column;
    margin-top: 14em;
    position: fixed;
    list-style: none;
border-radius: 15px;
border: 2px solid #2b3731ab;
background-color: #3f3d3d;
        align-items: center;
    }
    .heades li a {
    color: white;
}
    .burger-icon{
        display:flex;
    }
.main{
    text-align: center;
}
    .search-input {
    font-size: 1.8em;
} 
    .logo {
    width: 3.5em;
    position: absolute;
    top: 0.5em;
    left: 0.2em;
}
    #tagList{
    width: 100%;
}

}

@media (min-width:660px){
.img {
max-width: 40%;
}
 .animated-text{
    font-size: 35px;
}
}

@media (min-width:560px){


}

@media (max-width:560px){

.wer{
    margin-top: -5.7em;
}
.heades{
    height: 5.1em;
}

.nav-list{
display: flex;
flex-direction: column;
align-items: center;
margin-top: 0.5em;
}
.kool{ 
    width: 28%;
}

.burger-menu{
        font-size: 0.9em;
}

.order-button{
    margin: 0.2em;
    font-size: 0.7em;
}
.nayavn{
    font-size: large;
}
.menu-items.visible{
    flex-direction: column;
    flex-wrap: wrap;
    right: 1em;
}
.menu-items li{
    margin: 1em;
    text-align: start;
}
.menu-items a {
    margin-right: 2em;    
}
.dropdown-content{
width: 15em;
font-size: 0.9em;
top: 6em;
}
.search-input {
    background-size: 34px;
    font-size: 1.4em;
    width: 300px;
  }
 
}


@media (max-width:430px){
#tagList{
    width: 100%;
}
.wer{
    margin-top: -5.2em;
}
.nav-list{
display: flex;
flex-direction: column;
align-items: center;
margin-top: -4.75em;
}
.kool{ 
    width: 28%;
}


.order-button{
    margin: 0.3em
}
.nayavn{
    font-size: large;
}
.dropdown-content{
font-size: 0.6em;
top: 9em;
}
.search-input {
    width: 250px;
  }
  .price{
    font-size: small;
  }
  .elastic li {
    font-size: small;
}
}

@media (max-width:320px){
.heades {
height: 4.1em;
}
.logo {
height: 3.4em;
}
.nav-list {
margin-top: 0.em;
}
.order-button {
font-size: 0.5em;
}
.burger-icon {
font-size: 1.3em; 
}        
.menu-items.visible {
width: 12.5em;
}
.menu-items li {
font-size: 11px;
}
.menu-items a {
font-size: 1.4em;
}
#mode-toggle {
width: 62px;
font-size: 13px;
}
.price {
font-size: small;
}
.animated-text {
font-size: small;
}
.opus {
font-size: xx-small;
}
.flash-text {
font-size: 1em;
}
.img {
max-width: 58%;
}
}

mark{
background: #02f11e;
}

#elastic{
margin: 20px 0;
margin-top: 3em;
  
}
.search-input {
    background-image: url(https://cdn-icons-png.flaticon.com/128/6711/6711440.png);
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 43px;
    font-size: 2em;
    border-radius: 0.2em;
}   


.elastic li{
transition: all ease 500ms;
color: white;
margin: 1.2em;
    border-radius: 2em;
}

.elastic a {
text-decoration: none;
}

.elastic li.hide{
display: none;
}

#myList{
    padding: 0.6em;
}

.row a {
    list-style: none;
    text-decoration: none;
}

.icon{

        /* filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5)); Тінь навколо зображення */
       width: 1.2em;
}

  

