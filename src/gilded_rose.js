let Sulfuras = require('./Sulfuras')
let AgedBrie = require('./AgedBrie')

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
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                }
                item.sellIn = item.sellIn - 1;
                if (item.sellIn < 0) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    }
                }
            } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1;
                        }
                    }
                }
                item.sellIn = item.sellIn - 1;

                if (item.sellIn < 0) {
                    item.quality = item.quality - item.quality;
                }
            } else {
                if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.quality > 0) {
                        item.quality = item.quality - 1;
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                            if (item.sellIn < 11) {
                                if (item.quality < 50) {
                                    item.quality = item.quality + 1;
                                }
                            }
                            if (item.sellIn < 6) {
                                if (item.quality < 50) {
                                    item.quality = item.quality + 1;
                                }
                            }
                        }
                    }
                }
                item.sellIn = item.sellIn - 1;

                if (item.sellIn < 0) {
                    if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.quality > 0) {
                            if (!this.isLengendaryItem(item)) {
                                item.quality = item.quality - 1;
                            }
                        }
                    } else {
                        item.quality = item.quality - item.quality;
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
            default:
                return item;
        }
    }
}

module.exports = {
    Item,
    Shop
}
