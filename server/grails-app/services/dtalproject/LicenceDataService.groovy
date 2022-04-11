package dtalproject

import grails.gorm.services.Service

@Service(Licence)
interface LicenceDataService {

    Licence save(String licenceClass, String licenceNumber, Driver driver)
}