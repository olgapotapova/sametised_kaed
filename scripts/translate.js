const select = document.querySelector('select');
const allLang = ['ru', 'ee'];


select.addEventListener('change', changeURLLanguage);

// to url with language
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    const selectedLang = select.value;
    localStorage.setItem('selectedLang', selectedLang);
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash; 
    hash = hash.substring(1);
    alert("hash" + hash);
    // console.log(hash);
    //Seach language from local storage
    const selectedLangLocalStorage = localStorage.getItem('selectedLang');
    alert("selectedLangLocalStorage" + selectedLangLocalStorage);
    if (selectedLangLocalStorage) {
    // Set language by local storage
        select.value = selectedLangLocalStorage;
        location.href = window.location.pathname + '#' + selectedLangLocalStorage;

    // }else if (!allLang.includes(hash)) {
    }else{
        location.href = window.location.pathname + '#ee';
        location.reload();
        select.value = hash;
        alert("hash" + hash);
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