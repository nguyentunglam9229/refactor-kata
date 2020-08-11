let CommonItem = require('./CommonItem')
class Conjured extends CommonItem {
    getQualityDecayRate() {
        if(this.isExpire()) {
            return -4;
        }
        return -2;
    }
}
module.exports = Conjured;
