function deleteUser (id){
    const Users = [
        {
            id: 1,
            firstName: "Jean",
            lastName: "Dupond",
            telephone: "0470123456",
            email: "Jean-dupond@gmail.com"
        },
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
    ];
    return  Users.filter(User => User.id !== id);
}

function getDaysLeft (date){
    const d = new Date(date);
    const today = new Date();
    return Math.round((d-today) / (1000*3600*24));
}


function getMonthFr(month){
    let monthFr = "";
    switch (month) {
        case 0:
            return monthFr = "Janvier";
            break;
        case 1:
            return monthFr = "Février";
            break;
        case 2:
            return monthFr = "Mars";
            break;
        case 3:
            return monthFr = "Avril";
            break;
        case 4:
            return monthFr = "Mai";
            break;
        case 5:
            return monthFr = "Juin";
            break;
        case 6:
            return monthFr = "Juillet";
            break;
        case 7:
            return monthFr = "Août";
            break;
        case 8:
            return monthFr = "Septembre";
            break;
        case 9:
            return monthFr = "Octobre";
            break;
        case 10:
            return monthFr = "Novembre";
            break;
        case 11:
            return monthFr = "Décembre";
            break;
    }
}

function dateFormatFr (date){
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    let monthFr = getMonthFr(month);

    return day + " " + monthFr + " " + year
}

function getFutureConference(conferences){
    let future = [];
    for (let i = 0; i < conferences.length; i++) {
        if (new Date(conferences[i]["start"]) > new Date('2020-05-26')) {
            future.push(conferences[i]);
        }
    }
    return future
}

function getPastConference(conferences){
    let past = [];
    for (let i = 0; i < conferences.length; i++) {
        if (new Date(conferences[i]["start"]) < new Date('2020-05-26')) {
            past.push(conferences[i]);
        }
    }
    return past
}

function dateFormatFrWH (date){
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    let hours = d.getHours();
    if ( hours < 10 ) {
        hours = "0"+hours
    }
    let minutes = d.getMinutes();
    if ( minutes < 10 ) {
        minutes = "0"+minutes
    }
    let monthFr = getMonthFr(month);

    return day + " " + monthFr + " " + year + " à " + hours + "h" + minutes
}


module.exports = {getDaysLeft, deleteUser, dateFormatFr, dateFormatFrWH, getFutureConference, getPastConference};


