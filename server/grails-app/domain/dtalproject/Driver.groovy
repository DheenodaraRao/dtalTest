package dtalproject

import grails.rest.Resource

@Resource(uri="/driver")
class Driver {

    String name
    static hasMany = [licences: Licence]

    static constraints = {
        licences nullable: true
    }
}
