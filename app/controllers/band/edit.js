import Ember from "ember";

export default Ember.Controller.extend({
	bandName: "",

	actions: {
		updateBand() {
			let bandName = this.get("bandName");

			if(!bandName.trim()) {
				return;
			}

			let band = this.store.findRecord("band", model._id).then((band) => {
				band.set("bandName", bandName);
			});

			band.save();
		}
	}
});