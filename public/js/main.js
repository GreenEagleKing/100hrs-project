

// Adds new blue colour class for nav bar title if you are on that page/url
function toggleNavBlue() {
    let url = document.documentURI.match(/.*\/(.*)\/(.*)$/)[2]
    if(url === "") {
        url = 'home'
        document.querySelector(`#${url}`).classList.add('md:text-blue-700')
    }
    

}
toggleNavBlue()

// Dropdown to add product form appears on click

const addProductBtn = document.querySelector('#addProductBtn').addEventListener('click', showAddProduct)

function showAddProduct() {
    document.getElementById('addProduct').classList.toggle('hidden')
}


function showImgPreview(event){
    if(event.target.files.length > 0){
      const src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "flex";
    }
  }