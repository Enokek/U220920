


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
    ListDetail.innerHTML = (`Name: ${person.Name} | Phone number: ${person.Phone} | Address: ${person.Address}`)
    CustomerList.appendChild(ListDetail)

});


NamePerson.value = '';
PhoneNumber.value = '';
Address.value = '';
Name.focus();



}