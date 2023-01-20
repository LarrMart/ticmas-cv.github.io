//devuelve un número entero en el rango [n, m) 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

function getFillerParagraph() {
    let rand = 0;
    
    let ret = "";

    let par = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis tortor sit amet justo elementum, id mattis lectus posuere. Quisque venenatis justo porta ex sollicitudin rhoncus. Donec at massa metus. Nam vel laoreet nibh. Praesent id bibendum enim. Integer vulputate auctor scelerisque. Donec leo velit, aliquam vehicula pulvinar iaculis, iaculis vel enim. Phasellus id dolor at massa mollis posuere. Aliquam erat volutpat. Donec aliquet laoreet mauris. Fusce ac diam enim. In aliquam placerat magna ac aliquet. Nam id tortor aliquet tellus ultrices suscipit in ac libero.",
        "Quisque et leo ac felis faucibus euismod. Etiam vehicula erat augue, et porttitor erat porta non. Nulla blandit tempor aliquet. Curabitur porta commodo nisl at blandit. Proin sit amet sapien ante. Phasellus laoreet consectetur sem id vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque tellus massa, sodales et mi pulvinar, elementum dictum justo. Aliquam id imperdiet orci. Suspendisse faucibus mattis diam, vitae suscipit augue sagittis eu.",
        "Nulla elit orci, accumsan posuere tempor sed, interdum quis enim. Nulla vitae erat eget metus cursus bibendum. Curabitur lobortis ullamcorper mauris, sit amet fermentum felis vehicula eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id neque eu arcu accumsan pretium quis non nisl. Fusce ullamcorper felis id dui lobortis, ac placerat elit laoreet. Etiam aliquet, enim bibendum malesuada luctus, ex massa consectetur tortor, vitae bibendum nunc eros et arcu. Curabitur pharetra feugiat nibh, eu pretium lorem. Ut egestas odio lacus, ac egestas magna sollicitudin eget. Proin tempor dui cursus finibus laoreet. Sed quis eleifend est, ut vehicula magna. Vivamus porttitor sem orci, sit amet ultrices metus tincidunt sit amet. Curabitur sollicitudin quis purus quis faucibus.",
        "Quisque sit amet facilisis risus. Etiam eros tortor, interdum viverra placerat at, venenatis a felis. Sed mattis sapien vulputate tellus euismod, quis auctor quam tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus felis urna, ullamcorper sit amet nisl at, efficitur sagittis erat. Quisque non risus ac diam sagittis porttitor. Morbi cursus nibh erat, sollicitudin elementum risus feugiat eget. Nulla facilisi. Pellentesque finibus, tellus sit amet vehicula tincidunt, ligula leo mollis lorem, sit amet aliquam ante tortor in ligula. Suspendisse potenti. Sed auctor condimentum quam, sit amet porttitor ligula imperdiet id. Maecenas tincidunt mauris aliquam enim elementum viverra. Phasellus sit amet lacus velit. Cras feugiat magna eget dignissim lobortis.",
        "Sed semper leo eget velit bibendum, non condimentum orci semper. Aenean blandit nisl dui, at auctor tellus gravida non. Ut leo diam, auctor ut tellus sit amet, auctor tincidunt neque. Nulla porttitor scelerisque orci, elementum tincidunt lacus ornare eu. Vestibulum consectetur eros a tellus rhoncus egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mattis justo ac diam gravida pulvinar. Sed accumsan ex eu elit ullamcorper, condimentum iaculis purus iaculis. Sed vulputate rutrum magna, in elementum libero bibendum ac. In rutrum quis est vitae convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam fringilla at lorem ut fermentum. Ut quis blandit diam. Mauris et sodales orci, id tincidunt nisi.",
        "Aenean eget rutrum dui. Quisque ultricies consequat elit non egestas. Proin sed nisi eros. Morbi accumsan, nisi eget congue pretium, lacus ex finibus tortor, ut consequat nibh augue ac purus. Morbi finibus arcu quis semper elementum. Nunc sed rhoncus arcu, vitae fermentum lectus. Vestibulum eget metus tincidunt, volutpat ligula eget, tempus tellus. Mauris aliquam nulla imperdiet sapien sagittis, quis accumsan metus tincidunt. Ut gravida nibh id purus ornare pretium. Quisque leo sem, viverra vitae tincidunt in, venenatis vitae eros. Morbi neque dolor, consequat ac neque eu, semper tristique ex. Etiam non ornare metus, in porta tellus.",
        "Ut maximus malesuada aliquam. Cras et tempus nunc, et volutpat erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit massa, vulputate ac nisl non, pellentesque faucibus nunc. Nam nec interdum felis. Aenean pretium elit quis metus porttitor tempor. Cras faucibus a tellus at cursus.",
        "Maecenas sit amet tellus eget lacus imperdiet elementum. Aliquam suscipit lobortis tellus, et fermentum metus hendrerit nec. Donec suscipit nulla gravida porttitor ultrices. Cras euismod odio non mi fermentum, ut posuere lacus fermentum. Mauris finibus eu urna a efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer auctor velit nisl, id sollicitudin odio vehicula sed. Sed vel justo finibus sapien faucibus tempor id ut elit. Aliquam ullamcorper condimentum ex et laoreet. Quisque lobortis, nulla nec rhoncus iaculis, arcu eros aliquet quam, ut consectetur quam tortor eget nisl. Morbi aliquam leo nisi, sed rutrum risus pretium a. Cras turpis sem, pretium sit amet pretium quis, pellentesque mattis purus.",
        "Integer dignissim malesuada diam sed finibus. Nullam consectetur libero non dolor tempor, sed vestibulum velit fermentum. Praesent id turpis vitae urna tempus aliquam. Sed diam tellus, porttitor vel ante eget, sollicitudin lobortis justo. Quisque eget diam malesuada, rutrum nunc at, auctor est. Cras vehicula, turpis sed dictum semper, purus arcu suscipit metus, elementum molestie eros nisi ut lorem. Sed dapibus, sapien ut commodo euismod, enim nisi maximus metus, et luctus nisi urna ut ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "Cras lobortis hendrerit mauris, ac venenatis tortor gravida rhoncus. Pellentesque lectus sapien, porttitor nec lorem ac, tincidunt placerat nulla. Phasellus elit elit, pharetra sed arcu vitae, consectetur condimentum dui. Vivamus dapibus nec justo in mollis. Donec lobortis ligula est, eu fermentum sem pellentesque et. In finibus lacus a dapibus euismod. Mauris a ipsum nisi. Duis mauris orci, volutpat sollicitudin dolor sit amet, bibendum fringilla quam. Pellentesque finibus risus eu sodales tincidunt. Sed condimentum, elit vitae dignissim sollicitudin, erat nulla venenatis lacus, ut elementum elit nisi vel felis."
    ]; 
    rand = getRandomInteger(0, par.length);
    ret +=  par[rand];

    return ret;
}

function getFillerSentence() {
    let sentences = getFillerParagraph().split(".");
    return sentences[getRandomInteger(0, sentences.length-1)];
}

function getFillerWords(n) {
    let words = getFillerParagraph().split(" ");
    let ret = "";
    for(let i = 0; i < n; i++)
        ret += words[i] + " ";
    return ret;
}

function setSkills() {

    function setSkillProgression() {
        let skills = document.getElementsByClassName("skill-progress");
    
        for(let i = 0; i < skills.length; i++) {
            let rand = getRandomInteger(35,101);
            skills[i].style.backgroundImage = `linear-gradient(to right, #333 0%, #333 ${rand}%, #fff ${rand}%, #fff 100%)`;
        }
    }

    let cantSkills = getRandomInteger(3, 11);
    let unOrd = document.createElement("ol");
 
        
    for(let i = 0; i <= cantSkills; i++) {
        let listItem =  `<li class="skill-item">
            <span class="skill-name">${getFillerWords(getRandomInteger(1,5))}</span><span class="skill-progress"></span>
            </li>`;
        unOrd.innerHTML += listItem;
    }
    
    document.getElementById("skills").appendChild(unOrd);
    setSkillProgression();
}


function setExperience(section, currentYear = 2023, addDescription = false) {
    let numExp = getRandomInteger(1, 6);
    let previousYear;
    let item = "";
    let list = document.createElement("ol");
    list.innerHTML = "";


    for(let i = 0; i < numExp; i++) {
        previousYear = currentYear - getRandomInteger(1, 3);
        item = `<li class="experience-item">
        <p class="experience-date">${previousYear + " - " + currentYear}</p>
        <h3 class="experience-name">${getFillerSentence()}</h3>
        <p class="experience-institution">${getFillerSentence()}</p>`;
        
        if(addDescription)
            item += "<p class=experience-description>" + getFillerParagraph() + "</p>";

        item += `</li>`;
        currentYear = previousYear;

        //Asigno la experiencia a la lista
        list.innerHTML += item;

    }
    section.appendChild(list);

}

function setProfilePicture(str) {
    let image = `<img
    src="${str}"
    alt="Personal photograph"
    />`
    document.getElementById("profile-picture").innerHTML += image;
}

function setProfileName(str) {
    let name = `<h1 class="name">${str}</h1>`;
    document.getElementById("person").innerHTML += name;
}

function setProfession() {
    let prof = `<h2 class="profession" id="profession">${getProfession()}</h2>`;
    document.getElementById("person").innerHTML += prof;
}

function setContacts(person) {
    let contacts = `<ol>
    <li class="contacts-item">
      <span class="material-symbols-outlined"> phone_iphone </span
      >${person["cell"]}
    </li>
    <li class="contacts-item">
      <span class="material-symbols-outlined"> mail </span>
      ${person["email"]}
    </li>
    <li class="contacts-item">
      <span class="material-symbols-outlined"> home </span>
      ${person["location"]["street"]["name"] + " " + person["location"]["street"]["number"] }
    </li>
    </ol>`
    document.getElementById("contacts").innerHTML += contacts;


}

function getProfession() {
    let prof = [
        "FRONT-END DEVELOPER",
        "BACK-END DEVELOPER",
        "FULL-STACK DEVELOPER",
        "UX-UI DESIGNER",
        "DEV OPS",
        "JAVA DEVELOPER",
        "PLATFORM ENGINEER",
        "SOFTWARE ENGINEER",
    ]
    return prof[getRandomInteger(0, prof.length)];
}

function setPersonalData(url) {
    let xhr = new XMLHttpRequest();
    var data = 8;
    xhr.open("GET", url );
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let person = JSON.parse(xhr.responseText);
            person = person["results"][0];

            console.log(person);
            setProfilePicture(person["picture"]["large"]);
            setProfileName(person["name"]["first"] + " " + person["name"]["last"]);
            setProfession();
            setContacts(person);
        }
          
    }
    
    xhr.send();
}

function setResume() {
    setPersonalData("https://randomuser.me/api/");
    document.getElementById("presentation").children[1].innerText = getFillerParagraph();
    setSkills();
    setExperience(document.getElementById("education"));
    setExperience(document.getElementById("jobs"), 2023, true);
}

setResume(true);












