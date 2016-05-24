import DS from 'ember-data';

export default DS.Model.extend({
  fromEmail: DS.attr('string'),
  message: DS.attr('string')
});
