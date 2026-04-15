
const homeID=document.getElementById('home_b')
const projectsID=document.getElementById('projects_b')
const contactID=document.getElementById('contact_b')
const homeIDPOS=document.getElementById('home_h')
const projectsIDPOS=document.getElementById('projects_h')
const contactIDPOS=document.getElementById('contact_h')
const habsID=document.getElementById('habs_b')
const habsIDPOS=document.getElementById('habs_h')

homeID.addEventListener('click', function() {
    homeIDPOS.scrollIntoView({
        behavior:"smooth",
        block:"end"
    })
})
projectsID.addEventListener('click', function() {
    projectsIDPOS.scrollIntoView({
        behavior:"smooth",
        block:"center"
    })
})
contactID.addEventListener('click', function() {
    contactIDPOS.scrollIntoView({
        behavior:"smooth",
        block:"center"
    })
})
habsID.addEventListener('click', function() {
    habsIDPOS.scrollIntoView({
        behavior:"smooth",
        block:"center"
    })
})