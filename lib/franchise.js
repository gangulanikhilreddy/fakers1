/**
 *
 * @namespace faker.franchise
 */
var franchise = function(faker) {
    var self = this;
    var fake = faker.fake;
    /**
     * team
     *
     * @method faker.franchise.owner
     */
    self.owner = function() {
        return faker.random.arrayElement(faker.definitions.franchise.owner);
    };

    self.owner.schema = {
        "description": "Generates a team.",
        "sampleResults": ["SRH", "JP", "Te"]
    };

};
module["exports"] = franchise;