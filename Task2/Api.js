@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

:root{
  --orange:#ffa500;
}

*{
  font-family: 'Nunito', sans-serif;
  margin:0; padding:0;
  box-sizing: border-box;
  text-transform: capitalize;
  outline: none; border:none;
  text-decoration: none;
  transition: all .2s linear;
}

*::selection{
  background:var(--orange);
  color:#fff;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 6rem;
  scroll-behavior: smooth;
}


#myBtn{
    display: none;
    position: fixed;
    bottom: 70px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: rgb(59, 57, 57);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
}
  
#myBtn:hover{
    background-color: #555;
}

section{
  padding:2rem 9%;
}

.heading{
  text-align: center;
  padding:2.5rem 0
}

.heading span{
  font-size: 3.5rem;
  background:rgba(255, 165, 0,.2);
  color:var(--orange);
  border-radius: .5rem;
  padding:.2rem 1rem;
}

.heading span.space{
  background:none;
}

.btn{
  display: inline-block;
  margin-top: 1rem;
  background:var(--orange);
  color:#fff;
  padding:.8rem 3rem;
  border:.2rem solid var(--orange);
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 800;
  text-transform: uppercase;
}

.btn:hover{
  background:rgba(255, 166, 0, 0);
  color:var(--orange);
}

header{
  position: fixed;
  top:0; left: 0; right:0;
  background:transparent;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:2rem 9%;
}

header .logo{
  font-size: 3.5rem;
  font-weight: bolder;
  color:indianred;
  text-transform: uppercase;
}

header .logo span{
  color:var(--orange);
}

header .navbar a{
  color:#000;
  font-weight: bold;
  font-size: 2rem;
  margin:0 .8rem;
}

header .navbar a:hover{
  color:blue;
}

.blue{
    position:fixed;
    top:0;
    background:blue;
    width:100%;
    height:50px;
  }
header .icons i{
  font-size: 2.5rem;
  color:#fff;
  cursor: pointer;
  margin-right: 2rem;
  visibility: hidden;
}

header .search-bar-container{
  position: absolute;
  top:100%; left: 0; right:0;
  padding:1.5rem 2rem;
  background:#333;
  border-top: .1rem solid rgba(255,255,255,.2);
  display: flex;
  align-items: center;
  z-index: 1001;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

header .search-bar-container.active{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

header .search-bar-container #search-bar{
  width:100%;
  padding:1rem;
  text-transform: none;
  color:#333;
  font-size: 1.7rem;
  border-radius: .5rem;
}

header .search-bar-container label{
  color:#fff;
  cursor: pointer;
  font-size: 3rem;
  margin-left: 1.5rem;
}

header .search-bar-container label:hover{
  color:var(--orange);
}

.login-form-container{
  position: fixed;
  top:-120%; left: 0;
  z-index: 10000;
  min-height: 100vh;
  width:100%;
  background:rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
}


#menu-bar{
  color:#fff;
  border:.1rem solid #fff;
  border-radius: .5rem;
  font-size: 3rem;
  padding:.5rem 1.2rem;
  cursor: pointer;
  display: none;
}

.home{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  z-index: 0;
}

.home .content{
  text-align: center;
}

.home .content h3{
  font-size: 4.5rem;
  color:#fff;
  text-transform: uppercase;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.1);
}

.home .content p{
  font-size: 2.5rem;
  color:#fff;
  padding:.5rem 0;
}

.home .video-container video{
  position: absolute;
  top:0; left: 0;
  z-index: -1;
  height: 100%;
  width:100%;
  object-fit: cover;
}

.home .controls{
  padding:1rem;
  border-radius: 5rem;
  position: relative;
  top:22rem;
}

.home .controls .vid-btn{
  height:1rem;
  width:1rem;
  display: inline-block;
  border-radius: 50%;
  background:rgb(219, 219, 219);
  cursor: pointer;
  margin:0 .5rem;
}

.home .controls .vid-btn.active{
  background:orange;
}

.book .row{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  align-items: center;
}

.book .row .image{
  flex:1 1 40rem;
}

.book .row .image img{
  width:100%;
}

.book .row form{
  flex:1 1 40rem;
  padding:2rem;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

.book .row form .inputBox{
  padding:.5rem 0;
}

.book .row form .inputBox input{
  width:100%;
  padding:1rem;
  border:.1rem solid rgba(0,0,0,.1);
  font-size: 1.7rem;
  color:#333;
  text-transform:none;
}

.book .row form .inputBox h3{
  font-size: 2rem;
  padding:1rem 0;
  color:#666;
}

.packages .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:2rem;
}

.packages .box-container .box{
  flex:1 1 30rem;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
}

.packages .box-container .box img{
  height: 25rem;
  width:100%;
  object-fit: cover;
}

.packages .box-container .box .content{
  padding:2rem;
}

.packages .box-container .box .content h3{
  font-size:2rem;
  color:#333;
}

.packages .box-container .box .content h3 i{
  color:var(--orange);
}

.packages .box-container .box .content p{
  font-size:1.7rem;
  color:#666;
  padding:1rem 0;
}

.packages .box-container .box .content .stars i{
  font-size:1.7rem;
  color:var(--orange);
}

.packages .box-container .box .content .price{
  font-size: 2rem;
  color:#333;
  padding-top: 1rem;
}

.packages .box-container .box .content .price span{
  color:#666;
  font-size: 1.5rem;
  text-decoration: line-through;
}

.services .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.services .box-container .box{
  flex: 1 1 30rem;
  border-radius: .5rem;
  padding:1rem;
  text-align: center;
}

.services .box-container .box i{
  padding:1rem;
  font-size: 5rem;
  color:var(--orange);
}

.services .box-container .box h3{
  font-size: 2.5rem;
  color:#333;
}

.services .box-container .box p{
  font-size: 1.5rem;
  color:#666;
  padding:1rem 0;
}

.services .box-container .box:hover{
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  cursor: pointer;
}

.gallery .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.gallery .box-container .box{
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border:1rem solid #fff;
  border-radius: .5rem;
  flex:1 1 30rem;
  height: 25rem;
  position: relative;
}

.gallery .box-container .box img{
  height: 100%;
  width:100%;
  object-fit: cover;
}

.gallery .box-container .box .content{
  position: absolute;
  top:-100%; left:0;
  height: 100%;
  width:100%;
  text-align: center;
  background:rgba(0,0,0,.7);
  padding:2rem;
  padding-top: 5rem;
}

.gallery .box-container .box:hover .content{
  top:0;
}

.gallery .box-container .box .content h3{
  font-size: 2.5rem;
  color:var(--orange);
}

.gallery .box-container .box .content p{
  font-size: 1.5rem;
  color:#eee;
  padding:.5rem 0;
}

.review .review-slider{
  padding-bottom: 2rem;
}

.review .box{
  padding:2rem;
  text-align: center;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}
.review .box:hover{
  cursor: context-menu;
}

.review .box img{
  height:13rem;
  width:13rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.review .box h3{
  color:#333;
  font-size: 2.5rem;
}

.review .box p{
  color:#666;
  font-size: 1.5rem;
  padding:1rem 0;
}

.review .box .stars i{
  color:var(--orange);
  font-size: 1.7rem;
}

.contact .row{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  align-items: center;
}

.contact .row .image{
  flex:1 1 35rem;
}

.contact .row .image img{
  width:100%;
}

.contact .row form{
  flex:1 1 50rem;
  padding:2rem;
  box-shadow: 0 1rem 2rem rgba(0,0,0,.1);
  border-radius: .5rem;
}

.contact .row form .inputBox{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact .row form .inputBox input, .contact .row form textarea{
  width:49%;
  margin:1rem 0;
  padding:1rem;
  font-size: 1.7rem;
  color:#333;
  background:#f7f7f7;
  text-transform: capitalize;
}

.contact .row form textarea{
  height: 15rem;
  resize: none;
  width:100%;
}

.footer{
  background:#333;
}

.footer .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.footer .box-container .box{
  padding:1rem 0;
  flex:1 1 25rem;
}

.footer .box-container .box h3{
  font-size: 2.5rem;
  padding:.7rem 0;
  color:#fff;
}

.footer .box-container .box p{
  font-size: 1.5rem;
  padding:.7rem 0;
  color:#eee;
}

.footer .box-container .box a{
  display: block;
  font-size: 1.5rem;
  padding:.7rem 0;
  color:#eee;
}

.footer .box-container .box a:hover{
  color:var(--orange);
  text-decoration: underline;
}

.footer .credit{
  text-align: center;
  padding:2rem 1rem;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: normal;
  color:#fff;
  border-top: .1rem solid rgba(255,255,255,.2);
}

.footer .credit a{
  color:var(--orange);
}
.footer .credit a:hover{
  text-decoration: underline;
}