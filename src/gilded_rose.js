let Sulfuras = require('./Sulfuras')
let AgedBrie = require('./AgedBrie')
let Backstage = require('./Backstage')
let CommonItem = require('./CommonItem')
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
        this.items.map(this.itemClassify)
            .forEach(item => {
                item.updateSellIn();
                item.updateQuality()
            })

        return this.items;
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
                return new CommonItem(item);
        }
    }
}

module.exports = {
    Item,
    Shop
}
