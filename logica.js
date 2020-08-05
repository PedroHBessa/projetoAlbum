let images = document.querySelector('.images');
let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector('.prevBtn');

nextBtn.addEventListener('click',nextImage);
prevBtn.addEventListener('click',prevImage);

let imgNumber = 0;

let photos = ["url('imagens/img1.jpg')center/cover no-repeat", 
"url('imagens/img2.jpg')center/cover no-repeat",
"url('imagens/img3.jpg')center/cover no-repeat",
"url('imagens/img4.jpg')center/cover no-repeat"];


function nextImage(){
	if(imgNumber < photos.length -1){

	imgNumber++;

	images.style.background = photos[imgNumber] ; 
	} else {};

	
	

}

function prevImage(){
	if(imgNumber !== 0){

	imgNumber--;

	images.style.background = photos[imgNumber] ;
	} else {};

	
}