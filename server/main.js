import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
    Accounts.validateNewUser((user) => {
        const email = user.emails[0].address;
        try {
            new SimpleSchema({
                email: {
                    type: String,
                    regEx: SimpleSchema.RegEx.Email
                }
            }).validate({email});
        } catch(e) {
            throw new Meteor.Error(400, e.messege);
        }
        return true;
    });
});
try {
    throw new Meteor.Error(400, "Please enter a valid email");
} catch(e) {
    console.log("This is the error: ", e);
}