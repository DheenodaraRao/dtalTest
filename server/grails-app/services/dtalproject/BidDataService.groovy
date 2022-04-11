package dtalproject

import grails.gorm.services.Service

@Service(Bid)
interface BidDataService {

    Bid save(Date date, Integer amount, Licence licence)
}