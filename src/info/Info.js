import self from "../img/self.png"
import mock1 from "../img/projects/HearthHue-mockup.png"
import mock2 from "../img/projects/ethscansimply-mockup.png"
import mock3 from "../img/projects/spendbitcoin-mockup.png"

import articleImg01 from "../img/articles/article01.png";
import articleImg02 from "../img/articles/article02.png";
import articleImg03 from "../img/articles/article03.png";
import articleImg04 from "../img/articles/article04.png";
import articleImg05 from "../img/articles/article05.png";


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
    position: "a Junior Web3 Developer",
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
    "Hello! I'm Emre. I study electric-electronic at Bursa-Turkey, I coding smart contracts and some web2 stuff, and I enjoy writing about new web3 tech I am enthusiastic of learning new technologies and using them. You should hire me!",
    skills:
        {
            proficientWith: ['javascript','solidity','hardhat', 'react', 'nextjs', 'tailwind','ethers', 'chakra-ui',"redux"],
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
            title: "HearthHue",
            descriptionProject: 
            
            `HearthHue is a charity organization aimed at collecting donations from people to help those in need.

            The project allows users to donate Ether (ETH), which are automatically stored and managed through a smart contract.`,
            descriptionYou: `This project is developed for improving Hardhat skills, learning smart contract testing.`,
            live: "https://hearth-hue.vercel.app/", 
            source: "https://github.com/emreaslan7/ether-donation-dapp",
            image: mock1
        },
        {
            title: "ETHscanSimply",
            descriptionProject: 
            
            `An easy-to-use interface for exploring Ethereum. Ideal for beginners and kids!
            Many people can use this interface to explore ethereum blockchain without having to worry about confusing things.`,
            descriptionYou: `This project is developed for improving Ethers.js skills, learning deep dive Next.js and ChakraUI.`,

            live: "https://ethscansimply.vercel.app/",
            source: "https://github.com/emreaslan7/EthScanSimply",
            image: mock2
        },
        {
            title: "Spend Bitcoin",
            descriptionProject: 
            
            `Experience the Rise of Bitcoin! If you had 1 bitcoin in any year, what would you buy?

            Explore the historical price increases of Bitcoin and use your strategy to decide which year's investment is the best while having fun!`,
            descriptionYou: `This project is developed for improving React-Redux skills, learning deep dive TailwindCSS.`,

            live: "https://spend-bitcoin.vercel.app/",
            source: "https://github.com/emreaslan7/spend-bitcoin",
            image: mock3
        },
        // {
        //     title: "Project 4",
        //     descriptionProject: 
            
        //     `HearthHue is a charity organization aimed at collecting donations from people to help those in need.

        //     The project allows users to donate Ether (ETH), which are automatically stored and managed through a smart contract.`,
        //     descriptionYou: `This project is developed for improving hardhat skills, learning smart contract testing...`,

        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     descriptionProject: 
            
        //     `HearthHue is a charity organization aimed at collecting donations from people to help those in need.

        //     The project allows users to donate Ether (ETH), which are automatically stored and managed through a smart contract.`,
        //     descriptionYou: `This project is developed for improving hardhat skills, learning smart contract testing...`,

        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ],
    articles: [
        {
            title: "A Deep Dive into the Digital Signatures, Encryption, and Hash Function",
            description : "Digital signatures, Symmetric and Asymmetric Encryption, Hash Function, RSA and Elliptic Curve Algorithm, and more...",
            image : articleImg05,
            link: "https://emreaslan.hashnode.dev/a-deep-dive-into-the-digital-signatures-encryption-and-hash-function",
            readTime: "12 minute",
        },
        {
            title: "What are Rentables NFTs? Sample Smart Contract With EIP-4907",
            description : "Using the EIP-4907, we learn about the structure of a rentable NFT by creating a simple smart contract.",
            image : articleImg04,
            link: "https://emreaslan.hashnode.dev/what-are-rentables-nfts-eip-4907",
            readTime: "7 minute",
        },
        {
            title: "The Philosophy of Ownership and Decentralization in Web3",
            description : "From the perspective of the ownership and decentralization of the web.",
            image : articleImg03,
            link: "https://emreaslan.hashnode.dev/the-philosophy-of-web3",
            readTime: "8 minute",
        },        
        {
            title: "What are Soulbound Tokens SBT?",
            description : "Soulbound tokens are opening the door to a whole new era in the ownership and transfer of digital assets; Let's delve deeper into the workings, benefits and potential future implications of Soulbound technology.",
            image : articleImg02,
            link: "https://emreaslan.hashnode.dev/what-are-soulbound-tokens-sbt",
            readTime: "4 minute",
        },
        {
            title: "What are the Ethereum Protocols ERC || EIP",
            description : "So what, if I wanted to, I could set a standard and revolutionize the whole ethereum? Did anyone that?",
            image : articleImg01,
            link: "https://emreaslan.hashnode.dev/what-are-the-ethereum-protocols-erc-eip",
            readTime: "3 minute",
        },
    ]
}