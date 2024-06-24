//Side Menu toggle in mobile view
togglebtn = document.querySelector(".togglemenubtn");
togglecross = document.querySelector(".togglecross");
sidebar = document.querySelector(".sidebar");
togglestate = 'inactive';

togglebtn.addEventListener('click', () => {
    togglestate = 'active';
    sidebar.classList.add('activesidebar');
});

togglecross.addEventListener('click', () => {
    togglestate = 'inactive';
    sidebar.classList.remove('activesidebar');
})

//Dynamic Text for hero section
const text = document.querySelector(".sec-text");
    const textLoad = () =>{
    setTimeout(() => {
        text.textContent = 'Innovate';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Design';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Deploy';
    }, 8000);
}
if(text != null){
    textLoad();
    setInterval(textLoad, 12000);
}

//Contact Form Validation
const form = document.getElementById("contactform");
const name = document.getElementById("name");
const phno = document.getElementById("phno");
const email = document.getElementById("email");
const city = document.getElementById("city");
const message = document.querySelector('.textareacontactform');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateInputs()) {
        clearForm();
    }
});

const setError = (el, msg) => {
    const inputgroup = el.parentElement;
    const errordisplay = inputgroup.querySelector('.error');
    errordisplay.innerText = msg;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

const setSuccess = (el) => {
    const inputgroup = el.parentElement;
    const errordisplay = inputgroup.querySelector('.error');
    errordisplay.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}

const validateInputs = () => {
    const nameval = name.value.trim();
    const phnoval = phno.value.trim();
    const emailval = email.value.trim();
    const cityval = city.value.trim();
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phnopattern = /^\d{10}$/;

    let isValid = true;

    if (nameval === '') {
        setError(name, 'Name is required');
        isValid = false;
    } else {
        setSuccess(name);
    }

    if (phnoval === '') {
        setError(phno, 'Phone number is required');
        isValid = false;
    } else if (!(phnopattern.test(phnoval))){
        setError(phno, 'Invalid phone number');
        isValid = false;
    } else {
        setSuccess(phno);
    }

    if (emailval === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!(emailpattern.test(emailval))){
        setError(email, 'Invalid Email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (cityval === '') {
        setError(city, 'City is required');
        isValid = false;
    } else {
        setSuccess(city);
    }

    return isValid;
}

const clearForm = () => {
    name.value = '';
    phno.value = '';
    email.value = '';
    city.value = '';
    message.value = '';

    const inputgroups = document.querySelectorAll('.inputgroup');
    inputgroups.forEach(inputgroup => {
        inputgroup.classList.remove('error', 'success');
        inputgroup.querySelector('.error').innerText = '';
    });
}


//Skillbar filling Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
});

const SkillBars = document.querySelectorAll(".hidden");
SkillBars.forEach((skillbar) => observer.observe(skillbar));


//Download Resume permission
const downloadbtns = document.querySelectorAll(".downloadresumebtn");

if(downloadbtns != null){
    downloadbtns.forEach(downloadbtn => {
        downloadbtn.addEventListener('click', (e) => {
            if(confirm("This window wants to open a pdf. Proceed?") != true){
                e.preventDefault();
            }
        });
    });
}

//Redirect permission
const redirs = document.querySelectorAll(".redirectpermission");
console.log(redirs);

if(redirs != null){
    redirs.forEach(el => {
        el.addEventListener('click', (evt) => {
            if(confirm("This link will redirect you to an external page. Proceed?") != true){
                evt.preventDefault();
            }
        });
    });
}