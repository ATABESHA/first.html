function changelang(){
    var currentlanguage = getComputedStyle(document.body).getPropertyValue("--language")
    if (currentlanguage == 'data-en'){
    document.documentElement.style.setProperty('--language', 'data-du')
    } else {
    document.documentElement.style.setProperty('--language', 'data-en')
    }
    }

    