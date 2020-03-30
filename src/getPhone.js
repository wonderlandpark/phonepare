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
        image: { src: `/phones/${el.id}.jpg` }
      };
    });
    return g;
  }
}

export function getData(company, id){
    console.log(company, id)
    if(!phones[company]) return {}
    if(!phones[company].find(r=> r.id === id)) return {}
    console.log(phones)
    const res = phones[company].find(r=> r.id === id)
    res.img = `/phones/${res.id}.jpg`
    return res
}