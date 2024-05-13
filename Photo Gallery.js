const modal = document.createElement('div');
 modal.id = 'de'; 
document.body.appendChild(modal);

const images=document.querySelectorAll('.img');
images.forEach(image => {
image.addEventListener('click',()=> {
  modal.classList.add('active');
  const img=document.createElement('img');
  img.src=image.src;
  img.id='im';
  while (modal.firstChild){
  	modal.removeChild(modal.firstChild);
  }
  modal.appendChild(img);
 });
});

 modal.addEventListener('click',() => {
 	   modal.classList.remove('active');
 });