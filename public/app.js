


var Customers = [];
var Person = {
    Name: ' ',
    Phone: ' '
};

add  = () => {

NamePerson = document.getElementById("personName");
PhoneNumber = document.getElementById("phoneNumber");
Address = document.getElementById("Address");

Person = {Name:NamePerson.value + PhoneNumber.value + Address.value, Phone: '123'};
Customers.push(Person);


CustomerList = document.getElementById("customers");
CustomerList.innerHTML='';

Customers.forEach(person => {
    ListDetail = document.createElement('li');
    ListDetail.innerHTML = person.Name
    CustomerList.appendChild(ListDetail)

});


NamePerson.value = '';
PhoneNumber.value = '';
Address.value = '';
NamePerson.focus();
PhoneNumber.focus();
Address.focus();


}