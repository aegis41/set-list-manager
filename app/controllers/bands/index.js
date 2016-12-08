import Ember from "ember";

export default Ember.Controller.extend({
	actions: {
		delete(id) {
			let user = this.get("model").find((value) => {
				return value.id === id;
			});
			user.deleteRecord();
			user.save();
		},
		edit(id) {
			this.transitionToRoute("band.edit", id);
		}
	}
});