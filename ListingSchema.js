/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    },
    address: String,
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
var updateTimestamps = function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;

    next();
}

listingSchema.pre('save', updateTimestamps );
listingSchema.pre('findOneAndUpdate', updateTimestamps);

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
