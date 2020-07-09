let CommonItem =  require('./CommonItem')
class AgedBrie extends CommonItem{
    getQualityDecayRate() {
        if(this.isExpire()) {
            return 2;
        }
        return 1;
    }

}
module.exports = AgedBrie;
