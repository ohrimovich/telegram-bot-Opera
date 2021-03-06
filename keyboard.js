const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.rooms, kb.home.reception],
        [kb.home.fnb, kb.home.events],
        [kb.home.offers, kb.home.spa]
    ],
    rooms: [
        [kb.rooms.reserv],
        [kb.rooms.standart, kb.rooms.superior],
        [kb.rooms.suites],
        [kb.back]
    ],
    reception: [
        [kb.reception.contacts],
        [kb.reception.services, kb.reception.info],
        [kb.back]
    ],
    fnb: [
        [kb.FnB.teatro],
        [kb.FnB.bar],
        [kb.FnB.rs],
        [kb.back]

    ],
    events: [
        [kb.events.symph],
        [kb.events.maestro, kb.events.bussiness],
        [kb.back]

    ],
    offers: [
        [kb.offers.romantic, kb.offers.wedding],
        [kb.offers.group, kb.offers.coravin],
        [kb.back]

    ],
    spa: [
        [kb.spa.price, kb.spa.site],
        [kb.spa.call, kb.spa.gym],
        [kb.back]

    ],
    standartRooms: [
        [kb.rooms.reserv],
        [kb.rooms.stadartKing, kb.rooms.stadartTwin],
        [kb.rooms.backToRooms]
    ],
    suites: [
        [kb.rooms.reserv],
        [kb.rooms.suiteFr, kb.rooms.suiteMr],
        [kb.rooms.suiteJp, kb.rooms.suiteEg],
        [kb.rooms.suiteKr, kb.rooms.suiteAm],
        [kb.rooms.backToRooms]
    ],
    info: [
        [kb.reception.lhw],
        [kb.reception.covid],
        [kb.reception.location],
        [kb.reception.backToRec]
    ],
    services: [
        [kb.reception.gd, kb.reception.trans],
        [kb.reception.cons, kb.reception.pillow],
        [kb.reception.backToRec]
    ]

}