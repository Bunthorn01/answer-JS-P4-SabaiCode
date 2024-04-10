const items = [
    { name: "Bread", category: "Grocery" },
    { name: "Butter", category: "Grocery" },
    { name: "Shampoo", category: "Personal Care" }
];
const groupedItems = items.reduce((grouped, item) => {
    // If the category doesn't exist in grouped object, create a new array
    if (!grouped[item.category]) {
        grouped[item.category] = [];
    }
    // Push the item's name into the category array
    grouped[item.category].push(item.name);
    return grouped;
}, {});
console.log(groupedItems);
// Output: { "Grocery": ["Bread", "Butter"], "Personal Care": ["Shampoo"] }