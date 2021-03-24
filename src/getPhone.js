import phones from "./phone.json";

export function getDropdown(company) {
  if (!phones[company]) {
    console.log([]);
    return [];
  } else {
    return phones[company].map(el => {
      return {
        key: el.id,
        value: el.id,
        text: `${el.name} (${el.date} 출시)`,
        image: {src: `/phones/${el.id}.jpg`}
      };
    });
  }
}

export function getData(company, id) {
  const r = {
    "id": "notselected",
    "img": "/phones/NotSelected.jpg",
    "name": "제품을 선택해주세요!!",
    "date": "-",
    "display": {
      "size": "-",
      "resolution": "-",
      "type": "-",
      "ppi": "-"
    },
    "cpu": "-",
    "ram": "-",
    "size": "-",
    "weight": "-",
    "battery": "-",
    "charge": "-",
    "os": "-",
    "color": ['-'],
    "memory": ['-'],
    "waterproof": "-",
    "camera": {
      "front": ["-"],
      "back": [
        "-" 
      ]
    }
  };
  if (!phones[company]) return r
  
  if (!phones[company].find(r => r.id === id)) return r;
  console.log(phones);
  const res = phones[company].find(r => r.id === id);
  res.img = `/phones/${res.id}.jpg`;
  return res;
}
