import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["#92000a","#E9967A"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Emre",
    lastName: "Aslan",
    initials: "EA", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Web3 Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🍵',
            text: 'fueled by tea'
        },
        {
            emoji: '🌎',
            text: 'based in the Istanbul, Turkey'
        },
        {
            emoji: "✍️",
            text: "Writing About the Web3 Stuff"
        },
        {
            emoji: "📧",
            text: "emreaslan.eth@gmail.com"
        }
    ],
    bio: 
    "Hello! I'm Emre. I study electric-electronic at Bursa, I coding smart contracts and some web2 stuff, and I enjoy writing about new web3 technologies",
    skills:
        {
            proficientWith: ['javascript','solidity','hardhat', 'react', 'nextjs', 'tailwind', 'chakra-ui',"redux"],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'music',
            emoji: '🎧'
        },
        {
            label: 'swimming',
            emoji: '🏊‍♂️'
        },
        // {
        //     label: 'fitness',
        //     emoji: '💪'
        // },
        // {
        //     label: 'camping',
        //     emoji: '🏕️'
        // },
        // {
        //     label: 'travel',
        //     emoji: '🗺️'
        // },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}