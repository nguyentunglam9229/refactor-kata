let CommonItem =  require('./CommonItem')
class Backstage extends CommonItem{
    updateQuality() {
        if(this.isExpire()) {
            this.item.quality =  0;
        } else {
            if(this.item.quality > this.MIN_QUALITY && this.item.quality < this.MAX_QUALITY) {
                this.item.quality = Math.max(this.MIN_QUALITY, Math.min(this.MAX_QUALITY, this.item.quality + this.getQualityDecayRate()))
            }
        }
    }

    getQualityDecayRate() {
        if (this.item.sellIn < 5) {
            return 3
        }
        if (this.item.sellIn < 10) {
            return 2;
        }
        return 1;


    }
}
module.exports = Backstage;
