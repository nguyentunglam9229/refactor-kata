let Sulfuras = require('./Sulfuras')
let AgedBrie = require('./AgedBrie')
let Backstage = require('./Backstage')
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            if (item.name === 'Sulfuras, Hand of Ragnaros') {

            } else if (item.name === 'Aged Brie') {
                item = this.itemClassify(item);
                item.updateSellIn()
                item.updateQuality()
            } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                item = this.itemClassify(item);
                item.updateSellIn();
                item.updateQuality();
                // if (item.quality < 50) {
                //     item.quality = item.quality + 1;
                //     if (item.sellIn < 11) {
                //         if (item.quality < 50) {
                //             item.quality = item.quality + 1;
                //         }
                //     }
                //     if (item.sellIn < 6) {
                //         if (item.quality < 50) {
                //             item.quality = item.quality + 1;
                //         }
                //     }
                // }
                // item.sellIn = item.sellIn - 1;
                //
                // if (item.sellIn < 0) {
                //     item.quality = item.quality - item.quality;
                // }
            } else {
                if (item.quality > 0) {
                    item.quality = item.quality - 1;
                }
                item.sellIn = item.sellIn - 1;

                if (item.sellIn < 0) {
                    if (item.quality > 0) {
                        if (!this.isLengendaryItem(item)) {
                            item.quality = item.quality - 1;
                        }
                    }
                }
            }
        })

        return this.items;
    }

    isLengendaryItem(item) {
        return item.name === 'Sulfuras, Hand of Ragnaros';
    }

    itemClassify(item) {
        switch (item.name) {
            case 'Sulfuras, Hand of Ragnaros':
                return new Sulfuras(item);
            case 'Aged Brie':
                return new AgedBrie(item);
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new Backstage(item);
            default:
                return item;
        }
    }
}

module.exports = {
    Item,
    Shop
}
