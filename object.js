const albums = [
  {
    album_title: "Paradise",
    artist: "Lana Del Ray",
    genre: ["Alternative Pop", "Indie Pop"],
    year_released: 2012,
    number_of_songs: 8,
    first_three_songs: ["Ride", "American", "Cola"],
    collaborators: false,
    explicit: true,
  },
  {
    album_title: "Fearless (Taylor's Version)",
    artist: "Taylor Swift",
    genre: ["Pop", "Country"],
    year_released: 2021,
    number_of_songs: 26,
    first_three_songs: ["Fearless (Taylor's Version)", "Fiteen (Taylor's Version)", "Love Story(Taylor's Version",
    ],
    collaborators: true,
    explicit: false,
  },
  {
    album_title: "THE WORLD EP.2: OUTLAW",
    artist: "ATEEZ",
    genre: ["K-Pop", "Hip-Hop"],
    year_released: 2023,
    number_of_songs: 6,
    first_three_songs: ["This World", "Dune", "BOUNCY (K-HOT CHILLI PEPPERS"],
    collaborators: false,
    explicit: false,
  },
  {
    album_title: "PHASES",
    artist: "Chase Atlantic",
    genre: ["Alternative", "Indie", "R&B"],
    year_released: 2019,
    number_of_songs: 12,
    first_three_songs: ["INTRO", "ANGELS", "PHASES"],
    collaborators: false,
    explicit: true,
  },
];

albums.forEach((albums)=> console.log(albums.album_title))
albums.forEach((albums)=> console.log(albums.first_three_songs) )