import DS from "ember-data";

export default DS.Model.extend({
	bandName: DS.attr("string"),
	members: DS.hasMany("member")
});
