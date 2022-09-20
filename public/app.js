


var Customers = [];
var Person = {
    Name: ' ',
    Phone: ' ',
    Address: ' '
};

add  = () => {

NamePerson = document.getElementById("personName");
PhoneNumber = document.getElementById("phoneNumber");
Address = document.getElementById("Address");

Person = {Name:NamePerson.value, Phone: PhoneNumber.value,  Address: Address.value};
Customers.push(Person);


CustomerList = document.getElementById("customers");
CustomerList.innerHTML='';

Customers.forEach(person => {
    ListDetail = document.createElement('li');
    ListDetail.innerHTML = (`Name: ${person.Name} |  Phone number: ${person.Phone}`)
    CustomerList.appendChild(ListDetail)

});

//aaaaa
NamePerson.value = '';
PhoneNumber.value = '';
Address.value = '';
NamePerson.focus();



}

addID = () => {
    var inputID = document.getElementById("IDinput").value;
    var outputID = document.getElementById("OutputID");

    inputID -=1;
    outputID.innerHTML =(JSON.stringify(Customers[inputID]))

    

};

    
    


 
