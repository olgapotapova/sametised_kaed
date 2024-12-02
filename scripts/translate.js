const select = document.querySelector('select');
const allLang = ['ru', 'ee'];


select.addEventListener('change', changeURLLanguage);

// to url with language
function changeURLLanguage() {
//     if(select.value = undefined){
//         var lang = "ee"
//     }else{
//     var lang = select.value;
// };
var lang = select.value;
if (((navigator.userAgent.toLowerCase().indexOf('mozilla/5.0') > -1 && navigator.userAgent.toLowerCase().indexOf('android ') > -1 && navigator.userAgent.toLowerCase().indexOf('applewebkit') > -1) && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1))) {
    // window.history.replaceState({}, document.title, base + fragment);
    window.location.replaceState({}, "Sametised kaed", "https://sametised-kaed.eu/" + '#' + lang)
} else {
    // location.replace(base + fragment);
    location.href = window.location.hash + '#' + lang;
}
    // location.href = window.location.pathname + '#' + lang;
    // location.href = window.location.hash + '#' + lang;
    const selectedLang = select.value;
    localStorage.setItem('selectedLang', selectedLang);
    const selectedLangLocalStorage = localStorage.getItem('selectedLang');
    alert("selectedLangLocalStorage-1" + selectedLangLocalStorage);
    location.reload();
}

function changeLanguage() {
    if (((navigator.userAgent.toLowerCase().indexOf('mozilla/5.0') > -1 && navigator.userAgent.toLowerCase().indexOf('android ') > -1 && navigator.userAgent.toLowerCase().indexOf('applewebkit') > -1) && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1))) {
        window.history.replaceState({}, document.title, base + fragment);
        window.location.replaceState({}, "Sametised kaed", "https://sametised-kaed.eu/")
    } else {
        // location.replace(base + fragment);
        var hash = window.location.hash; 
        hash = hash.substring(1);
    }
    // let hash = window.location.hash; 
    // hash = hash.substring(1);
    alert("hash" + hash);
    // console.log(hash);
    //Seach language from local storage
    const selectedLangLocalStorage = localStorage.getItem('selectedLang');
    if (selectedLangLocalStorage) {
    // Set language by local storage
        select.value = selectedLangLocalStorage;
        location.href = window.location.pathname + '#' + selectedLangLocalStorage;

    // }else if (!allLang.includes(hash)) {
    }else{
        location.href = window.location.pathname + '#ee';
        location.reload();
        select.value = hash;
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