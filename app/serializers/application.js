import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr, method) {
  	// Seems like it runs camelize on the model attribute names to be able to map the json
  	// From rails to the attribute name... Confusing...
    return Ember.String.camelize(attr);
  }
});