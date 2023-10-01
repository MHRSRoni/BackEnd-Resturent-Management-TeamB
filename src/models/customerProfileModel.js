const { Schema, model } = require('mongoose');

// const { ObjectId } = Schema;

const customerProfileSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'customers',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        unique: true,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

}, { timestamps: true, versionKey: false });

const customerProfileModel = model('customerProfiles', customerProfileSchema);

module.exports = customerProfileModel;