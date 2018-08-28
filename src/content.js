export const content = {
    1: {
        demoLink: 'https://jonaserixon.github.io/djwannabe-step-sequencer/',
        hasDemo: true,
        shortDescription: 'Drag and drop audio samples in order to create a song. Add cool effects and adjust the volume with a mixer board. Record your song in real-time and save it locally.',
        fullDescription: 'I wrote this application for the final course of the first year in university. In order to implement the drag and drop functionality I used jQuery\'s Draggable and Droppable UI. \n For the audio playback I chose to use the new Web Audio API since I thought it was an interesting workflow with audio nodes. To make it play seamlessly in the playlist I schedule every audio sample ahead. And for the mixer board I mostly used the Web Audio API for volume control and basic filters. \n I used browserify to be able to separate the code into modules and also use NPM.',
        github: 'https://github.com/jonaserixon/djwannabe-step-sequencer',
        keywords: ['JavaScript', 'jQuery', 'Browserify', 'Web Audio API'],
        thumbnail: 'https://camo.githubusercontent.com/cb4cf165ca90eaca4782e786fba4b8e89e032856/68747470733a2f2f692e696d6775722e636f6d2f78576a786a41392e706e67',
        title: 'DJ Wannabe - Step Sequencer',
        video: 'https://i.imgur.com/oRr4MUx.gif'
    },
    2: {
        demoLink: '',
        hasDemo: false,
        shortDescription: 'Pokémon app acting like a database by using the PokéAPI but with a focus on comparing multiple Pokémons stats with each other and displaying it as a chart for clarity.',
        fullDescription: 'This app was made as a learning project for me as I wanted to teach myself how to use TypeScript with React and also get a feel for the Jest testing framework. I also wanted to use a PostgreSQL database instead of MongoDB. I wrote a seed scripts to get all the Pokémon data from the PokéAPI and store it on a Heroku hosted postgres db. I query the DB based on the sorting + filtering made on the client.',
        github: 'https://github.com/jonaserixon/phimon',
        keywords: ['TypeScript', 'JavaScript', 'React', 'Material UI', 'NodeJS', 'Express', 'Recharts', 'Jest', 'Postgres'],
        thumbnail: 'https://i.imgur.com/Jr9inbO.png',
        title: 'PhiMon',
        video: 'https://i.imgur.com/ubwzhJv.gif'
    },
    3: {
        demoLink: '',
        hasDemo: false,
        shortDescription: 'Using the Spotify API together with Reddit\'s API in order to create playlists containing tracks from multiple subreddits. Also possible to replace individual tracks in a playlist.',
        fullDescription: 'In this application I wanted to mix 2 APIs in one app so I made a basic Spotify playlist generator with user submitted tracks from a couple of music subreddits on reddit.com. To use the Reddit API I used the Application Only Oauth authorization flow and for Spotify I used the Authorization Code Flow.',
        github: 'https://github.com/jonaserixon/phibun-playlist-generator',
        keywords: ['JavaScript', 'React', 'Bootstrap', 'NodeJS', 'Express'],
        thumbnail: 'https://camo.githubusercontent.com/8b8f4c6799ffaccb35f3caf256746fd1c6795d7a/68747470733a2f2f692e696d6775722e636f6d2f684d32685359302e6a7067',
        title: 'Phibun Playlist Generator',
        video: 'https://i.imgur.com/1838paq.gif'
    },
    4: {
        demoLink: '',
        hasDemo: false,
        shortDescription: 'Booking system for the Linnaues University. I was a part of the team that wrote the backend. Used the TimeEdit API in order to get any upcoming bookings for a grouproom.',
        fullDescription: 'Booking system for the Linnaues University. I was a part of the team that wrote the backend. Used the TimeEdit API in order to get any upcoming bookings for a grouproom.',
        github: 'https://github.com/kom-1dv611/kom',
        keywords: ['NodeJS', 'MongoDB', 'Express'],
        thumbnail: 'https://i.imgur.com/VEv7019.png',
        title: 'KOM Project',
        video: 'https://i.imgur.com/bNkReOW.gif'
    },
    5: {
        demoLink: 'https://jonaserixon.github.io/ahimitsu/#/tracks/in-love',
        hasDemo: true,
        shortDescription: 'Track landing page for my music project A Himitsu. Averaging 8k track downloads per month.',
        fullDescription: 'Track landing page for my music project A Himitsu. Averaging 8k track downloads per month.',
        github: 'https://github.com/jonaserixon/ahimitsu',
        keywords: ['JavaScript', 'React', 'Bootstrap', 'Google Analytics'],
        thumbnail: 'https://i.imgur.com/U7SVL3B.png',
        title: 'A Himitsu',
        video: 'https://i.imgur.com/ENLFs6G.gif'
    },
    6: {
        demoLink: '',
        hasDemo: false,
        shortDescription: 'View your organizations and subscribe to specific events to them in order to get real-time notifications when using the application or an email sent to you.',
        fullDescription: 'View your organizations and subscribe to specific events to them in order to get real-time notifications when using the application or an email sent to you.',
        github: 'https://github.com/jonaserixon/github-notifications',
        keywords: ['JavaScript', 'React', 'NodeJS', 'Express', 'MongoDB'],
        thumbnail: 'https://camo.githubusercontent.com/0917308abee0132cf051e165693b0b9d5f443d75/68747470733a2f2f692e696d6775722e636f6d2f346b4d526a765a2e706e67',
        title: 'Github Notifications',
        video: 'https://i.imgur.com/tcLRCZ7.gif'
    }
}
