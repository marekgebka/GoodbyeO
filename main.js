// close open navigation

const closeNav = document.querySelector('.navmain-close');

closeNav.addEventListener('click', function (event) {
    document.querySelector('.navmain-menue').classList.remove('open');
    document.querySelector('body').classList.remove('no-scroll');
});


//open navigation

const openNav = document.querySelector('.navmain-burger');

openNav.addEventListener('click', function (event) {
    document.querySelector('.navmain-menue').classList.add('open');
    document.querySelector('body').classList.add('no-scroll');
})

// Intersection Observer - Tickets

const infoAndTickets = document.querySelector('.eventDetail-infoAndTickets');
const options = {};
const observer1 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            document.querySelector('.eventDetail-infoAndTickets--sticky').classList.remove('hidden');
        } else {
            document.querySelector('.eventDetail-infoAndTickets--sticky').classList.add('hidden');
        }
    });
}, options);

observer1.observe(infoAndTickets);