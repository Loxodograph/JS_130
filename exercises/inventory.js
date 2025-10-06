/*
Create inventory management system containing an
item creator, an items manager and a reports manager

The item creator
  makes sure all necessary information is present and valid

The item manager
  responsible for creating items

Report Manager
  generators reports for a specific item or ALL items.
    Generated from report objects created from the report manager

Required information for items

SKU CODE - 3 letters of the item, 2 letters of the category.
Item Name - name of the item. Minimum 5 characters, no spaces
Category - Category item belongs to. minimum 5 characters, only 1 word
Quantity - quantity in stock of an item. Can not be blank. Valid number always
  provided

Methods performed by item manager
  create - returns false if creation not successful
  update - accepts SKU and object as argument. updates the info
    of an item. Valid values will always be provided
  delete - accepts SKU and deletes item from list. Valid SKU
    always provided
  items - list of all items
  inStock - returns list of all items with quantity greater than 0
  itemsInCategory - returns all items for given category

Methods performed by reports manager
  init - accepts ItemManager object as an argument, assigns it to items
    property
  createReporter - accepts a SKU and returns an object
    returned object has one method, itemInfo. ItemInfo logs to the console
      all properties of an object as key:value pairs. There are no other
      properties or methods on the returned object.
  reportInStock - logs to the console all items at are in stock
    as comma seperated values.

*/

class ItemManager {
  static items = [];

  static create(itemName, category, quantity = null) {
    if (quantity === null) return false;
    if (itemName.replace(/\s/g, '').length < 5) return false;
    if (category.replace(/\s/g, '').length < 5 || /\s/.test(category)) return false;

    let skuNamePart = itemName.replace(/\s/g, '').slice(0, 3);
    let skuCategoryPart = category.slice(0, 2);
    let SKU = (skuNamePart + skuCategoryPart).toUpperCase();
    this.items.push({
      SKU,
      itemName,
      category,
      quantity,
    });
  }

  static update(SKUCode, object) {
    this.items.forEach(item => {
      if (item.SKU === SKUCode) {
        for (let key in object) {
          item[key] = object[key];
        }
      }
    });
  }

  static inStock() {
    return this.items.filter(item => item.quantity > 0);
  }

  static itemsInCategory(category) {
    let categories = [];
    this.items.forEach(item => {
      if (item.category === category) {
        categories.push(item);
      }
    });
    return categories;
  }

  static delete(SKUCode) {
    const index = this.items.findIndex(item => item.SKU === SKUCode);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

class ReportManager {

  static init(itemObject) {
    this.items = itemObject;
  }

  static reportInStock() {
    const names = this.items.inStock().map(item => item.itemName);
    console.log(names.join(","));
  }

  static createReporter(SKUCode) {
    const manager = this.items; // ItemManager (class with static items)
    return {
      itemInfo() {
        const item = manager.items.find(it => it.SKU === SKUCode);
        Object.keys(item).forEach(k => console.log(`${k}: ${item[k]}`));
      },
    };
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// ItemManager.items;

ReportManager.init(ItemManager);
ReportManager.reportInStock();
ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
ReportManager.reportInStock();
ItemManager.itemsInCategory('sports');
ItemManager.delete('SOCSP');
// ItemManager.items;

const kp = ReportManager.createReporter('KITCO');
kp.itemInfo();         // logs current values
ItemManager.update('KITCO', { quantity: 10 });
kp.itemInfo();         // reflects updated quantity