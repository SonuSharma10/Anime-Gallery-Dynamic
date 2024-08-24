// console.log('hello');
const addButton = document.getElementById('addButton');
const addImgDiv = document.querySelector('.add_img');

// Function to create and append the image input

addButton.addEventListener('click', function addImageInput() {
  const imageInput = document.createElement('input');
  imageInput.type = 'url';
  imageInput.name = 'image';
  imageInput.id = 'image';
  imageInput.size = '90';
  imageInput.placeholder = `🔗 Image Url`;
  const br = document.createElement('br');
  addImgDiv.appendChild(imageInput);
  addImgDiv.appendChild(br);
});
