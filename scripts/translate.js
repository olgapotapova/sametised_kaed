const select = document.querySelector('select');
const allLang = ['ru', 'ee'];

select.addEventListener('change', changeURLLanguage);

// to url with language
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    const selectedLang = select.value;
    localStorage.setItem('selectedLang', selectedLang);
    const selectedLangLocalStorage = localStorage.getItem('selectedLang');
    // alert("selectedLangLocalStorage-1" + selectedLangLocalStorage);
    location.reload();
}

function changeLanguage() {
    window.history.replaceState({}, "Sametised kaed", "https://sametised-kaed.eu/" + "#ee");
    let hash = window.location.hash; 
    hash = hash.substring(1);
    //Seach language from local storage
    const selectedLangLocalStorage = localStorage.getItem('selectedLang');
    if (selectedLangLocalStorage) {
    // Set language by local storage
        select.value = selectedLangLocalStorage;
        location.href = window.location.pathname + '#' + selectedLangLocalStorage;
    }
           
    language = select.value;
    document.querySelector('title').innerHTML = langArr['sametised'][language];
    for (let key in langArr) {
        elemArr = document.querySelectorAll('.lng-' + key); 
        elemArr.forEach(function(item){
            item.innerHTML = langArr[key][language];
        })
    }   
}


changeLanguage();