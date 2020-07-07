const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function () {
    describe('Sulfuras', () => {
        let sulfuras = null;
        const day = 10;
        const quality = 80;
        const name = 'Sulfuras, Hand of Ragnaros';

        beforeEach(() => {
            sulfuras = new Item(name, day, quality)
        });


        it('Sulfuras nerver decreases in quality', () => {
            const gildedRose = new Shop([sulfuras])
            for(let i = 100; i < -100; i ++) {}
            gildedRose.updateQuality();
            expect(gildedRose.items[0].quality).toEqual(quality);
        })
    })

    describe('Aged Brie', () => {

        it('aged brie quality increase by one when sell days have not passed yet', () => {
            let gildedRose = new Shop([new Item('Aged Brie', 10, 20)])
            let qualityPassed = 20;
            for(let day = 10; day > 0; day--) {
                gildedRose.updateQuality();
                qualityPassed++;
                expect(gildedRose.items[0].quality).toEqual(qualityPassed);
            }
        })

        it('aged brie quality increase by two when sell days has passed', () => {
            let gildedRose = new Shop([new Item('Aged Brie', 0, 20)])
            let qualityPassed = 20;
            for(let day = 0; day > -10; day--) {
                gildedRose.updateQuality();
                qualityPassed += 2;
                expect(gildedRose.items[0].quality).toEqual(qualityPassed);
            }
        })

    })

    describe('Backstage', () => {
        it('Quality increases by 1 when there are  more than 10 days', () => {
            let gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)])
            let qualityPassed = 10;
            for(let day = 15; day > 10; day--) {
                gildedRose.updateQuality();
                qualityPassed++;
                expect(gildedRose.items[0].quality).toEqual(qualityPassed);
            }
        })

        it('Quality increases by 2 when there are at most 10 days and more than 5 days', () => {
            let gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)])
            let qualityPassed = 10;
            for(let day = 10; day > 5; day--) {
                gildedRose.updateQuality();
                qualityPassed += 2;
                expect(gildedRose.items[0].quality).toEqual(qualityPassed);
            }
        })

        it('Quality increases by 3 when there are at most 5 days', () => {
            let gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)])
            let qualityPassed = 10;
            for(let day = 5; day > 0; day--) {
                gildedRose.updateQuality();
                qualityPassed += 3;
                expect(gildedRose.items[0].quality).toEqual(qualityPassed);
            }
        })

        it('Quality drops to 0 after the concert', () => {
            let gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)])
            let qualityPassed = 10;
            for(let day = 0; day > -100; day--) {
                gildedRose.updateQuality();
                qualityPassed = 0;
                expect(gildedRose.items[0].quality).toEqual(qualityPassed);
            }

        })
    })

    describe('general item', () => {
        const items = [
            new Item("+5 Dexterity Vest", 10, 20),
            new Item("Aged Brie", 2, 40),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 15),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        ];
        let gildedRose;
        beforeEach(() => {
            gildedRose = new Shop(items);
        });
        it('quality of an item never negative', () => {
            for(let day = 100; day > 0; day--) {
                gildedRose.updateQuality();
                expect(gildedRose.items.filter(item => item.quality < 0)).toEqual([]);
            }
        })

        it('The Quality of an item is never more than 50', () => {
            for(let day = 100; day > 0; day--) {
                gildedRose.updateQuality();
                expect(gildedRose.items.filter(item => item.quality > 50)).toEqual([]);
            }
        })

        it('At the end of each day our system lowers both values for every item', () => {
            let normalItem = new Shop([new Item('Elixir of the Mongoose', 10, 20)])
            let qualityPassed = 20;
            for(let day = 10; day > 0; day--) {
                normalItem.updateQuality();
                qualityPassed -= 1;
                expect(normalItem.items[0].quality).toEqual(qualityPassed);
            }
        })

        it('Once the sell by date has passed, Quality degrades twice as fast', () => {
            let normalItem = new Shop([new Item('Elixir of the Mongoose', 0, 20)])
            let qualityPassed = 20;
            for(let day = 0; day > -5; day--) {
                normalItem.updateQuality();
                qualityPassed -= 2;
                expect(normalItem.items[0].quality).toEqual(qualityPassed);
            }
        })
    })
});
