const {connectDb} = require('../../connectDb.js');
const updateTime = require('../updateTime.js');
const displacementToPast = require('../displacementToPast.js');
const pageGeneration = require('../../../pageGeneration/pageGeneration.js');
var db;

var everyYear = async () => {
    db = await connectDb();
    const collectionsObj = await require('../../collections.js');
    for(collection in collectionsObj) {
        await displacementToPast(collectionsObj[collection], 'year');
        await updateTime(collectionsObj[collection], 'next year');
    }
    
    await pageGeneration('year');
}

module.exports = everyYear;