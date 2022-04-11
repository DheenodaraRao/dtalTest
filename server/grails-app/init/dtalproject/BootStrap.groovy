package dtalproject


import groovy.transform.CompileStatic

@CompileStatic
class BootStrap {

    DriverDataService driverDataService
    LicenceDataService licenceDataService
    BidDataService bidDataService

    def init = { servletContext ->
        Driver susan = driverDataService.save("Susan")
        Driver joe = driverDataService.save("Joe")
        Driver peter = driverDataService.save("Peter")

        Licence l1 = licenceDataService.save("Class A", "1122333", susan)
        Licence l2 = licenceDataService.save("Class A", "2233444", joe)

        Bid b1 = bidDataService.save(new Date(), 2345, l1);
        Bid b2 = bidDataService.save(new Date(), 3453, l2);

    }
    def destroy = {
    }
}
