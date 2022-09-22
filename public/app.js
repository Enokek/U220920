


var Customers = [];
var Person = {
    FullName: ' ',
    Phone: ' ',
    Address: ' ',
    Email: ' '
};

add  = () => {

NamePerson = document.getElementById("personName");
PhoneNumber = document.getElementById("phoneNumber");
Address = document.getElementById("Address");
EmailPerson = document.getElementById("Email");

Person = {FullName: NamePerson.value, Phone: PhoneNumber.value,  Address: Address.value, Email: EmailPerson.value};
Customers.push(Person);


CustomerList = document.getElementById("customers");
CustomerList.innerHTML='';

Customers.forEach(person => {
    ListDetail = document.createElement('li');
    ListDetail.innerHTML = (`Full name: ${person.FullName} |  Phone number: ${person.Phone} | Email: ${person.Email}`)
    CustomerList.appendChild(ListDetail)

});

//aaaaa
NamePerson.value = '';
PhoneNumber.value = '';
Address.value = '';
EmailPerson.value = '';
NamePerson.focus();



}

addID = () => {
    var inputID = document.getElementById("IDinput").value;
    var outputID = document.getElementById("OutputID");

    function findEmail(pointer) {
    return pointer.Email === inputID;
    }
    
    outputID.innerHTML = (`${Customers.find(findEmail).FullName} 
    ${Customers.find(findEmail).Phone} ${Customers.find(findEmail).Address} ${Customers.find(findEmail).Email}`);
    
    

};


    
    



