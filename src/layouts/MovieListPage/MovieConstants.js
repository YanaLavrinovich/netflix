export const moviesFromAPI = [
    {
        id: 1,
        title: 'Pulp Fiction',
        description: 'Action & Adventure',
        movieUrl: 'https://assets.nflxext.com/us/boxshots/hd1080/880640.jpg',
        genre: 'CRIME',
        rating: 8.9,
        runtime: '154',
        year: '1994-10-14',
        overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
        id: 2,
        title: 'Bohemian Rhapsody',
        description: 'Drama, Biography, Music',
        movieUrl: 'https://tvguide1.cbsistatic.com/feed/1/957/thumbs/118587957_1300x1733.jpg',
        genre: 'DOCUMENTARY',
        rating: 8.0,
        runtime: '144',
        year: '2003-02-02',
        overview: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).'
    },
    {
        id: 3,
        title: 'Kill Bill: Vol 2',
        description: 'Oscar winning Movie',
        movieUrl: 'https://occ-0-1009-1001.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABdi5796UaXZuyYxzb4S3pGZ--SpwfZfoVcVOip6R3JSgv-RkAhDQFQDn6fVpCZz9ZIT70U1EYpvHp-9jzHm7sgyeg_OOd1Bh3Q.jpg',
        genre: 'CRIME',
        rating: 8.0,
        runtime: '130',
        year: '1994-03-03',
        overview: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.'
    },
    {
        id: 4,
        title: 'Avengers: War of Infinity',
        description: 'Action & Adventure',
        movieUrl: 'https://assets.nflxext.com/us/boxshots/hd1080/80219127.jpg',
        genre: 'COMEDY',
        rating: 8.4,
        runtime: '180',
        year: '2018-04-27',
        overview: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
    },
    {
        id: 5,
        title: 'Inception',
        description: 'Action & Adventure',
        movieUrl: 'https://assets.nflxext.com/us/boxshots/hd1080/70131314.jpg',
        genre: 'HORROR',
        rating: 8.8,
        runtime: '190',
        year: '2003-05-05',
        overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
    },
    {
        id: 6,
        title: 'Reservoir dogs',
        description: 'Oscar winning Movie',
        movieUrl: 'https://assets.nflxext.com/us/boxshots/hd1080/902003.jpg',
        genre: 'HORROR',
        rating: 8.3,
        runtime: '200',
        year: '1992-09-02',
        overview: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.'
    },
]

export const genres = [
    {
        id: 'all',
        name: 'ALL'
    },
    {
        id: 'documentary',
        name: 'DOCUMENTARY'
    },
    {
        id: 'comedy',
        name: 'COMEDY'
    },
    {
        id: 'horror',
        name: 'HORROR'
    },
    {
        id: 'crime',
        name: 'CRIME'
    }
]

export const sortOptions = [
    {
        id: 'year',
        name: 'RELEASE DATE'
    },
    {
        id: 'genre',
        name: 'GENRE'
    },
    {
        id: 'rating',
        name: 'RATING'
    }
]

export const GENRE_ALL = 'all'
export const YEAR_SORT = 'year'

export const POPUP_TYPE = {
    ADD: 'add',
    EDIT: 'edit',
    DELETE: 'delete'
}

export const NETFLIX = 'netflix'
export const ROULETTE = 'roulette'
