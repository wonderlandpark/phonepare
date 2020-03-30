import phones from "./phone.json";

export function getDropdown(company) {
  if (!phones[company]) {
    console.log([]);
    return [];
  } else {
    var g = phones[company].map(el => {
      return {
        key: el.id,
        value: el.id,
        text: `${el.name} (${el.date} 출시)`,
        image: { src: `/phones/${el.id}.jpg`, id: 'product' }
      };
    });
    return g;
  }
}
