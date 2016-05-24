import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	external_url: DS.attr('string'),
	repo_url: DS.attr('string'),
	image_url: DS.attr('string'),
	order: DS.attr('number'),
	hidden: DS.attr('boolean')
});
