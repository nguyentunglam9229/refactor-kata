class CommonItem {
    constructor(item) {
        this.item = item;
        this.MAX_QUALITY = 50;
        this.MIN_QUALITY = 0;
    }
    updateSellIn() {
        this.item.sellIn -= 1;
    }

    updateQuality() {
        if(this.item.quality > this.MIN_QUALITY && this.item.quality < this.MAX_QUALITY) {
            this.item.quality = this.item.quality + this.getQualityDecayRate();
        }
    }

    isExpire() {
        return this.item.sellIn < 0;
    }

    getQualityDecayRate() {
        if(this.isExpire()) {
            return -2;
        }
        return -1;
    }
}
module.exports = CommonItem;
