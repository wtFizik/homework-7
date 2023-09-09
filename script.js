const rec = receipt();

console.log(rec)
const pustoimassiv = [];

for (const itemName in rec) {
  const item = rec[itemName];
  pustoimassiv.push(`${itemName} ${item.info}`);
}

const totalCost = pustoimassiv.reduce((total, item) => {
  const itemName = item.split(' ')[0];
  return total + rec[itemName].price;
}, 0);

const plusdostavka = totalCost + 999999999;

const orderString = `Вы заказали ${pustoimassiv.join(', ')}. | Общая стоимость ${totalCost} сум с доставкой (999999999).`;

console.log(orderString); 
