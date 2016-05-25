import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	externalUrl: DS.attr('string'),
	repoUrl: DS.attr('string'),
	imageUrl: DS.attr('string'),
	order: DS.attr('number'),
	hidden: DS.attr('boolean')
});
