const axios = require('axios')

// An api key is emailed to you when you sign up to a plan
const api_key = '472906afe7881a4b02da7ee4a812ecef'

// Get a list of in season sports

// sportsInfo = () => {

//     //   axios.get('https://api.the-odds-api.com/v3/sports', {
//     //     params: {
//     //         api_key: api_key
//     //     }
//     // }).then(response => {

//     //     console.log(
//     //         `Successfully got ${response.data.data.length} sports.`,
//     //         `Here's the first sport:`
//     //     )

//     //     console.log(response.data.data)
//     // })
//     // .catch(error => {
//     //     console.log('Error status', error.response.status)
//     //     console.log(error.response.data)
//     // })

//     // To get odds for a sepcific sport, use the sport key from the last request
//     //   or set sport to "upcoming" to see live and upcoming across all sports
    let sport_key = 'basketball'

    axios.get('https://api.the-odds-api.com/v3/odds?sport=basketball_nba&region=us&apiKey=472906afe7881a4b02da7ee4a812ecef', {
        params: {
            api_key: api_key,
            sport: sport_key,
            region: 'us', // uk | us | eu | au
            mkt: 'spreads' // h2h | spreads | totals
        }
    }).then(response => {
        // odds_json['data'] contains a list of live and 
        //   upcoming events and odds for different bookmakers.
        // Events are ordered by start time (live events are first)

        console.log(
            `Successfully got ${response.data.data.length} sports.`,
            `Here's the first sport:`
        )

        console.log(JSON.stringify(response.data.data))

        // Check your usage
        console.log()
        console.log('Remaining requests', response.headers['x-requests-remaining'])
        console.log('Used requests', response.headers['x-requests-used'])

    })
        .catch(error => {
            console.log('Error status', error.response.status)
            console.log(error.response.data)
        })
// };

// sportsInfo ();
// export default sportsInfo





// /v3/odds /?sport apiKey = { 472906afe7881a4b02da7ee4a812ecef } & sport={ NBA }& region={ US }& mkt={ h2h, spreads }


// 