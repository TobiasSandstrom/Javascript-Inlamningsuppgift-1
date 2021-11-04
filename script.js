const button = document.getElementById("submitBtn")
button.disabled = true
let customerList = []

let firstnameBool = false
let lastnameBool = false
let emailBool = false
let passwordBool = false
let adressBool = false
let zipCodeBool = false
let cityBool = false
let birthdayBool = false

//Förnamn
document.getElementById("firstname").addEventListener("blur", function() {
    let name = document.getElementById("firstname")
    checkMinlength(name, 2)
})
//Efternamn
document.getElementById("lastname").addEventListener("blur", function() {
    let name = document.getElementById("lastname")
    checkMinlength(name, 2)
})
//Adress
document.getElementById("adress").addEventListener("blur", function() {
    let adress = document.getElementById("adress")
    checkMinlength(adress, 2, "en")
    
})
//Stad
document.getElementById("city").addEventListener("blur", function() {
    let stad = document.getElementById("city")
    checkMinlength(stad, 2, "en")

})
//Postnummer
document.getElementById("zipCode").addEventListener("blur", function() {
    let zip = document.getElementById("zipCode")
    checkMinlength(zip, 5, "")
})


//Validera längden på en sträng (Förnamn, Efternamn, adress, stad och postnummer)
function checkMinlength(input, minlength = 2, x = "et") {

    const validatelengthRegex = new RegExp(`\\b\\w{${minlength},}\\b`);

    //Om det godkänns
    if(validatelengthRegex.test(input.value)) {

        document.getElementById(`error-${input.id}`).innerHTML = `<i class="far fa-check"></i>`
        document.getElementById(`error-${input.id}`).setAttribute("class", "approved")

        switch (input.id) {
            case "firstname":
            firstnameBool = true
            checkBtn()
            break;

            case "lastname":
            lastnameBool = true
            checkBtn()
            break;

            case "adress":
            adressBool = true
            checkBtn()
            break;

            case "city":
            cityBool = true
            checkBtn()
            break;

            case "zipCode":
            zipCodeBool = true
            checkBtn()
            break;
        }
    }
    //Om det inte godkänns
    if(!validatelengthRegex.test(input.value)) {

        document.getElementById(`error-${input.id}`).innerHTML = `${input.placeholder}${x} måste innehålla minst ${minlength} bokstäver`
        document.getElementById(`error-${input.id}`).setAttribute("class", "error-msg")

        switch (input.id) {
            case "firstname":
            firstnameBool = false
            checkBtn()
            break;

            case "lastname":
            lastnameBool = false
            checkBtn()
            break;

            case "adress":
            adressBool = false
            checkBtn()
            break;

            case "city":
            cityBool = false
            checkBtn()
            break;

            case "zipCode":
            zipCodeBool = false
            checkBtn()
            break;
        }
    }
    //Om input är tom
    if(input.value == "") {
        document.getElementById(`error-${input.id}`).innerHTML = ``
        
        switch (input.id) {
            case "firstname":
            firstnameBool = false
            checkBtn()
            break;

            case "lastname":
            lastnameBool = false
            checkBtn()
            break;

            case "adress":
            adressBool = false
            checkBtn()
            break;

            case "city":
            cityBool = false
            checkBtn()
            break;

            case "zipCode":
            zipCodeBool = false
            checkBtn()
            break;

        }
    }

}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------- Epost ---------------
document.getElementById("email").addEventListener("blur", function(){

    let email = document.getElementById("email")
    validateEmail(email)
})


// Validera emailen
function validateEmail(input) {

    const validEmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(!input.value == "") {
        if(validEmailRegex.test(input.value)) {

            document.getElementById(`error-email`).innerHTML = `<i class="far fa-check"></i>`
            document.getElementById(`error-email`).setAttribute("class", "approved")
            emailBool = true
            checkBtn()
        }
        if(!validEmailRegex.test(input.value)) {

            document.getElementById(`error-email`).innerHTML = "Ogiltig epostadress"
            document.getElementById(`error-email`).setAttribute("class", "error-msg")
            emailBool = false
            checkBtn()
        }
    }
    else {
            document.getElementById(`error-email`).innerHTML = ""
            document.getElementById(`error-email`).setAttribute("class", "error-msg")
            emailBool = false
            checkBtn()
    }
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------- Lösenord ---------------
document.getElementById("password").addEventListener("keyup", function() {

    const firstPw = document.getElementById("password")
    const secondPw = document.getElementById("repeatPassword")
    samePassword(firstPw, secondPw)
    
})
// Repetera Lösenord
document.getElementById("repeatPassword").addEventListener("keyup", function() {

    const firstPw = document.getElementById("password")
    const secondPw = document.getElementById("repeatPassword")
    samePassword(firstPw, secondPw)
})

// Kontrollerar så det är samma lösenord
function samePassword(pw1, pw2) {
    
    if(pw1.value === pw2.value && pw1.value != "") {

        document.getElementById(`error-${pw2.id}`).innerHTML = ""
        strongPassword(pw2, pw1)
    }
    else if(pw1.value == "" && pw2.value == "") {
        document.getElementById(`error-${pw2.id}`).innerHTML = ""
        passwordBool = false
        checkBtn()
    }
    else{

        document.getElementById(`error-${pw1.id}`).innerHTML = ""
        document.getElementById(`error-${pw2.id}`).innerHTML = "Lösenorden är inte identiska"
        document.getElementById(`error-${pw1.id}`).setAttribute("class", "error-msg")
        document.getElementById(`error-${pw2.id}`).setAttribute("class", "error-msg")
        passwordBool = false
        checkBtn()
    }
    
}
// Kontrollerar lösenordens styrka
function strongPassword(input, input2) {

    
    const strongPasswordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$");
    
    if(strongPasswordRegex.test(input.value)) {

        document.getElementById(`error-${input.id}`).innerHTML = `<i class="far fa-check"></i>`
        document.getElementById(`error-${input2.id}`).innerHTML = `<i class="far fa-check"></i>`
        document.getElementById(`error-${input.id}`).setAttribute("class", "approved")
        document.getElementById(`error-${input2.id}`).setAttribute("class", "approved") 
        passwordBool = true 
        checkBtn()
    }
    if(!strongPasswordRegex.test(input.value)){
        document.getElementById(`error-${input.id}`).innerHTML = "Lösenordet måste innehålla minst: åtta tecken, en stor bokstav, en liten bokstav, en siffra och ett specialtecken"
        passwordBool = false
        checkBtn()
    }
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------- Födelsedag/Ålder ---------------
document.getElementById("birthday").addEventListener("blur", function() {

    let birthdate = new Date((document.getElementById("birthday").value))
    
    if(birthdate != "") {

        validateAge(birthdate)

    }
    else{

        birthdayBool = false
        checkBtn()

    }
    
})

// Funktion för att validera ålder
function validateAge(birthdate) {

    const dn = Date.now();
    const datenow = new Date(dn)
    const difference = dn - birthdate.getTime()
    const agediff = new Date(difference)
    const age = Math.abs(agediff.getUTCFullYear() - 1970)
    const birthRegex = new RegExp("^[1][8-9]|^[2-9][0-9]|^[1-9][0-9][0-9]")

    if (birthRegex.test(age)) {
        
        document.getElementById(`error-birthday`).setAttribute("class", "approved")
        document.getElementById(`error-birthday`).innerHTML = `<i class="far fa-check"></i>`
        birthdayBool = true
        checkBtn()
    }
    else{
        console.log("false")
        document.getElementById("error-birthday").innerText = "Du måste vara 18 eller äldre för att kunna registrera"
        document.getElementById(`error-birthday`).setAttribute("class", "error-msg")
        birthdayBool = false
        checkBtn()
    }



    
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------- Knappen ---------------

//Funktion som kollar ifall knappen ska vara aktiv eller ej
function checkBtn(){

    if(firstnameBool && lastnameBool && emailBool && passwordBool && adressBool && zipCodeBool && cityBool && birthdayBool) {
        button.disabled = false
    }
    else{
        button.disabled = true
    }
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------- Kund/registrera ---------------

//Kundklass
class Customer {

    constructor(firstname, lastname, email, password, adress, zipcode, city, birthday){

        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.adress = adress;
        this.zipcode = zipcode;
        this.city = city;
        this.birthday = birthday;

    }


}
// Funktion som registrerar kunden i en kundklass med formulärets värden 
// och sedan lägger denne i en lista med kunder

function registerCustomer() {

    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const adress = document.getElementById("adress").value
    const zipCode = document.getElementById("zipCode").value
    const city = document.getElementById("city").value
    const birthday = document.getElementById("birthday").value


    let customer = new Customer(firstname, lastname, email, password, adress, zipCode, city, birthday)
    customerList.push(customer)    
}



//Funktion till den andra knappen, så den kan logga ut kundlistan
function consoleCustomers() {

    if(customerList.length > 0) {
        console.log(customerList)
    }
    else{
        console.log("Det finns inga kunder finns registrerade")
    }
}

//Bytmig123!