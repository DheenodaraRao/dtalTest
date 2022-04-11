package dtalproject

import grails.rest.Resource

@Resource(uri="/licence")
class Licence {

    String licenceClass
    String licenceNumber

    static belongsTo = [driver: Driver]

    static hasOne = [bid: Bid]

    static constraints = {
        bid nullable: true
    }
}
