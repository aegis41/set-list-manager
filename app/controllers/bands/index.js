import Ember from "ember";

export default Ember.Controller.extend({
	actions: {
		delete(id) {
			let band = this.get("model").find((value) => {
				return value.id === id;
			});
			band.deleteRecord();
			band.save();
		}
	}
});
