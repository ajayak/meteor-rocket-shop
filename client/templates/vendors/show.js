Template.vendorsShow.helpers({
    products: function () {
        Products.find({"vendor.id": this.id});
    }
});