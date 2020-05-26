const functions = require('./functions');

const conferences = [
    {
        "id": 76,
        "name": "Conférence exemple 1",
        "description": "Ceci est un exemple de conférence dans le passé",
        "start": "2020-05-20T23:00:00+02:00",
        "end": "2020-05-20T23:00:00+02:00"
    },
    {
        "id": 77,
        "name": "Conférence exemple 2",
        "description": "Ceci est un  exemple de conférence dans le futur",
        "start": "2020-06-27T23:00:00+02:00",
        "end": "2020-06-27T23:00:00+02:00"
    },
    {
        "id": 78,
        "name": "Conférence exemple 3",
        "description": "Ceci est encore un exemple de conférence dans le passé",
        "start": "2020-04-27T23:00:00+02:00",
        "end": "2020-04-27T23:00:00+02:00"
    }
];


test('create today date in french format', () => {
    expect(functions.dateFormatFr(new Date('2020-05-13'))).toBe("13 Mai 2020");
});

test('get number of days until date', () => {
    expect(functions.getDaysLeft('2020-05-30')).toBe(3);
});

test('date in french format with hour', () => {
    expect(functions.dateFormatFrWH('2020-05-30 20:00')).toBe("30 Mai 2020 à 20h00");
});

test('Get Users array without the one deleted', () => {
    expect(functions.deleteUser(1)).toEqual([
        {
            id: 2,
            firstName: "Thierry",
            lastName: "Marshall",
            telephone: "0470112356",
            email: "ThierryM@gmail.com"
        },
        {
            id: 3,
            firstName: "Thierry",
            lastName: "Dupond",
            telephone: "0470443456",
            email: "thierry_dupond@gmail.com"
        }
    ]
    );
});

test('Get future conferences', () => {
    expect(functions.getFutureConference(conferences)).toEqual([
            {
                "id": 77,
                "name": "Conférence exemple 2",
                "description": "Ceci est un  exemple de conférence dans le futur",
                "start": "2020-06-27T23:00:00+02:00",
                "end": "2020-06-27T23:00:00+02:00"
            }
        ]
    );
});

test('Get past conferences', () => {
    expect(functions.getPastConference(conferences)).toEqual([
            {
                "id": 76,
                "name": "Conférence exemple 1",
                "description": "Ceci est un exemple de conférence dans le passé",
                "start": "2020-05-20T23:00:00+02:00",
                "end": "2020-05-20T23:00:00+02:00"
            },
            {
                "id": 78,
                "name": "Conférence exemple 3",
                "description": "Ceci est encore un exemple de conférence dans le passé",
                "start": "2020-04-27T23:00:00+02:00",
                "end": "2020-04-27T23:00:00+02:00"
            }
        ]
    );
});
