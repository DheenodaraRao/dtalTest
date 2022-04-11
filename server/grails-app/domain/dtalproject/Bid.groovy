package dtalproject

import grails.rest.Resource

@Resource(uri = '/bid')
class Bid {
    Date date;
    Integer amount;

    static belongsTo = [licence: Licence]

    static mapping = {
        licence lazy: false
    }
}
