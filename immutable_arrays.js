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