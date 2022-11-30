var goodPlayers = [
    {name: 'Lionel Messi', id: '1'},
    {name: 'Cristiano Ronaldo', id: '2'},
    {name: 'Neymar Jr.', id: '3'},
    {name: 'Kylian Mbappe', id: '4'}
];

var goodPlayersDetails = [
    {name: 'Lionel Messi', id: '1', age: 33},
    {name: 'Cristiano Ronaldo', id: '2', age: 35},
    {name: 'Neymar Jr.', id: '3', age: 28},
    {name: 'Kylian Mbappe', id: '4', age: 22}
];

var goodPlayersWithClub = goodPlayers.map(player => {
    return {
        name: player.name,
        club: 'player.club',
        id: player.id
    }
});

var goodPlayersWithoutSmallestId = goodPlayersDetails.filter(player => {
    return player.id !== '1';
});


const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

/**
 * sum = Wert der Summe im aktuellen Element
 * cur = aktuelle Wert des Arrays
 * Der Gesamtwert wird durch die Division des Gesamtwertes durch die Anzahl der Elemente im Array ausgegeben.
*/
const avgReviews = reviews.reduce((sum, cur) => sum + cur) / reviews.length;
console.log(avgReviews);

const countReviews = reviews.reduce((sum, cur) => {
    if (cur >= 4) {
        sum.good++;
    } else if (cur >= 2.5) {
        sum.ok++;
    } else {
        sum.bad++;
    }
    return sum;
}, {
    good: 0,
    ok: 0,
    bad: 0
});

console.log(countReviews); // { good: 5, ok: 4, bad: 5 }