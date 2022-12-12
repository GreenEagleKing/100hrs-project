

// Adds new blue colour class for nav bar title if you are on that page/url
function toggleNavBlue() {
    let url = document.documentURI.match(/.*\/(.*)\/(.*)$/)[2]
    if(url === "") {
        url = 'home'
    }
    document.querySelector(`#${url}`).classList.add('md:text-blue-700')
    
}
toggleNavBlue()
