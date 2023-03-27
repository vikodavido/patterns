
function СaseBuilder() {
    this.construct = function (builder) {
        builder.create();
        return builder.get();
    }
}
function TrubbleBuilderFood() {
    this.foodTruble = null;

    this.create = function () {
        this.foodTruble = new FoodTruble();
    };
    this.get = function () {
        return this.foodTruble;
    };
}
function FoodTruble() {

    this.existenceInBackpack = function (backpack) {
        return backpack.includes('food') 
    }

}
function TrubbleBuilderShoes() {
    this.shoesTruble = null;

    this.create = function () {
        this.shoesTruble = new ShoesTruble();
    };
    this.get = function () {
        return this.shoesTruble;
    };
}
function ShoesTruble() {

    this.existenceInBackpack = function (backpack) {
        return backpack.includes('shoes') 
    }

}
function TrubbleBuilderRain() {
    this.rainTruble = null;

    this.create = function () {
        this.rainTruble = new RainTruble();
    };
    this.get = function () {
        return this.rainTruble;
    };
}
function RainTruble() {

    this.existenceInBackpack = function (backpack) {
        return backpack.includes('raincoat') 
    }

}
function TrubbleBuilderMap() {
    this.mapTruble = null;

    this.create = function () {
        this.mapTruble = new MapTruble();
    };
    this.get = function () {
        return this.mapTruble;
    };
}
function MapTruble() {

    this.existenceInBackpack = function (backpack) {
        return backpack.includes('map') 
    }

}

export { TrubbleBuilderMap, TrubbleBuilderRain, TrubbleBuilderShoes, TrubbleBuilderFood, СaseBuilder } 