function introduction(string) {
    return(`Hi, my name is ${string}.`)
}


console.log(introduction("Saba"))
function introductionWithLanguage(name, language){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)

}


console.log(introduction("Saba"))
function introductionWithLanguageOptional(name, language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)

}