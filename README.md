# Starbuero.js
With Starbuero.js you easily interact with Starbuero's API and it's super easy!
## Install
```bash
npm i starbuero.js
```

## Here we go
```js
const {Client} = require('starbuero.js')
const client = new Client("TOKEN");
```

# Use the Client (example)
```js
const employee = await client.getEmployee('id');
console.log(employee)
```
```js
client: 
.getContacts()
.getContact()
.createContact()
.editContact()
.deleteContact()
    
.getAppointments()
.getAppointments()
.createAppointment()
.editAppointment()
.deleteAppointment()
    
.createRecurringAppointment() // SOON
.deleteRecurringAppointment()
    
.getCallData()
    
.getInfo()
.editInfo()
    
.getEmployees()
.getEmployee()
.createEmployee()
.editEmployee()
.deleteEmployee()
    
.getFAQ()
.getFAQEntry()
.editFAQEntry()
.deleteFAQEntry()
```

## Error Handling
This library includes basic error handling. If there are any errors in the API requests, they will be logged to the console. Besides, the request will give you `null`.
