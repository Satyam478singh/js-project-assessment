 /*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT () {

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

}

// call your functions below this line

// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: Function to mint a new NFT
function mintNFT(role, player, year, description) {
    // Create an NFT object with the metadata
    const nft = {
        role: role,
        player: player,
        year: year,
        description: description
    };

    // Store the NFT in the nfts array
    nfts.push(nft);
}

// Step 3: Function to list all NFTs
function listNFTs() {
    let i = 0;
    while (i < nfts.length) {
        console.log("Role:\t " + nfts[i].role);
        console.log("Player:\t " +nfts[i].player);
        console.log("Year:\t " +nfts[i].year);
        console.log("Description:\t " +nfts[i].description);
        i++;
    }
}

// Step 4: Function to get the total number of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Example usage:
mintNFT('Midfielder', 'Andres Iniesta', 2023, 'Picasso of football.');
mintNFT('Playmaker', 'Lionel Messi', 2022, 'Playmaking and and dribbling abilities.');
mintNFT('Forward', 'Robert Lewandowski', 2024, 'Very musculur and good in air.');
mintNFT('Forward', 'Harry Kane', 2019 , 'Very musculur, fast and good in air.');
mintNFT('left winger', 'Neymar jr', 2018, 'Good dribbler and excellent presser.');

// List all NFTs
listNFTs();

// Print the total number of NFTs
console.log("Total Supply: \t " +getTotalSupply());
