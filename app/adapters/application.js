import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
	host: 'http://127.0.0.1:3000'

});

