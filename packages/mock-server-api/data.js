const faker = require('faker')

function generateCompaniesAndEmployees(numCompanies, numMaxEmployees) {
  const companies = []
  const employees = []
  var employeeId = 0
  for (let id = 0; id < numCompanies; id++) {
    companies.push({
      id: id,
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      address: {
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        country: faker.address.country(),
        zipCode: faker.address.zipCode()
      }
    })
    const employeeCount = Math.floor(Math.random() * numMaxEmployees)
    for (let i = 0; i < employeeCount; i++) {
      employees.push({
        id: employeeId,
        companyId: id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle()
      })
      employeeId++
    }
  }
  return { companies, employees }
}

function provideMockData() {
  const vendors = []
  const contracts = []

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const phoneNumber = faker.phone.phoneNumberFormat()

    vendors.push({
      id: id,
      name: firstName + lastName,
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber
    })
    contracts.push({
      id: 'contract-' + id,
      Id: id,
      vendorId: id,
      items: [
        {
          itemNumber: '001',
          materialId: faker.random.number(),
          materialName: 'OHRA'
        }
      ]
    })
  }

  return {
    ...generateCompaniesAndEmployees(50, 6),
    vendors,
    contracts
  }
}

module.exports = provideMockData
