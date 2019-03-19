import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

SimpleSchema.defaultValidationErrorTransform((error) => {
    return new Meteor.Error(400, error.message)
})