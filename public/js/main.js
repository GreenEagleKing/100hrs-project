// These functions are run on every page
hideDropdown()
toggleNavBlue()

function toggleNavBlue() {
  let currentUrl = document.location
  document.querySelectorAll('.navMenu').forEach(function(e){
    if (e.href.slice(21) == currentUrl.href.slice(21)) {
      e.classList.remove("text-gray-700")
    }
  })
}

function hideDropdown() {
  if (!user) {
    let dropdown = document.getElementById('dropdownMenu')
    dropdown.disabled = true
    dropdown.classList.toggle('hover:bg-fabBrightBlue')
  }
}

// Run function only on /Library URL
if (document.location.href.includes('/library')) {
  blockOnClick()
}

// if user is not logged in prevent liking and downloading and accessing product
function blockOnClick() {
  if (!user) {
    document.querySelectorAll('.likeDownload').classList.toggle("hidden")
    document.querySelectorAll('.productLink').classList.toggle("pointer-events-none")
  }
}

// Run functions only on /profile URL
if (document.location.href.includes('/profile')) {
  const addProductBtn = document.querySelector('#addProductBtn').addEventListener('click', showAddProduct)
}

// Dropdown to add product form appears on click
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

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}









