import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	// host: 'http://127.0.0.1:3000'
	host: 'http://kevin-backend.herokuapp.com'
});