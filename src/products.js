const products = [
  {
    name: '300 megapixel camara',
    image: 'images/300 megapixel camara.jpg',
    catagory: 'electronics',
    price: 50000,
    discription:
      'a high quality camara for capturing very beautiful photos and stanning 60fps videos',
  },
  {
    name: 'an orange',
    image: 'images/an orange.jpg',
    catagory: 'other',
    price: 500,
    discription: 'a freah and juicy orange fetched from green garden',
  },
  {
    name: 'bed for kid',
    image: 'images/bed for kid.jpg',
    catagory: 'furniture',
    price: 8000,
    discription:
      'a very comfortable bed for your child to make thire childhood great and make them safe',
  },
  {
    name: 'comfortable foam chire',
    image: 'images/comfortable foam chire.jpg',
    catagory: 'furniture',
    price: 9500,
    discription:
      'a very comfortable chire made of foam for a royel sitting experince',
  },
  {
    name: 'comfortable wooden chire',
    image: 'images/comfortable wooden chire.jpg',
    catagory: 'furniture',
    price: 6000,
    discription:
      'a very comfortable and beautiful wooden chire for a royel sitting experince',
  },
  {
    name: 'deep fregrance perfume',
    image: 'images/deep fregrance perfume.jpg',
    catagory: 'other',
    price: 2000,
    discription:
      'perfume with very deep mind blowing fregrance of belly',
  },
  {
    name: 'dining table with 5 chire',
    image: 'images/dining table with 5 chire.jpg',
    catagory: 'furniture',
    price: 35000,
    discription:
      'very beautiful looking dining table to decorate your dining room',
  },
  {
    name: 'drowingroom sofa set',
    image: 'images/drowingroom sofa set.jpg',
    catagory: 'furniture',
    price: 25000,
    discription:
      'beautiful sofa set for empity space of your browingroom',
  },
  {
    name: 'eyekeeper high quality frem',
    image: 'images/eyekeeper high quality frem.jpg',
    catagory: 'other',
    price: 2500,
    discription: 'beautiful looking glesses from eykeeper',
  },
  {
    name: 'eyekeeper high quality glass frem',
    image: 'images/eyekeeper high quality glass frem.jpg',
    catagory: 'other',
    price: 3000,
    discription: 'beautiful looking glesses from eykeeper',
  },
  {
    name: 'fancy glasses for girls',
    image: 'images/fancy glasses for girls.jpg',
    catagory: 'other',
    price: 1500,
    discription: 'a pair of fancy glasses for girls',
  },
  {
    name: 'fedor tea pot',
    image: 'images/fedor tea pot.jpg',
    catagory: 'other',
    price: 1000,
    discription: 'a good looking tea pot from fador',
  },
  {
    name: 'formal set with blue jeans',
    image: 'images/formal set with blue jeans.jpg',
    catagory: 'clothing',
    price: 10000,
    discription: 'comfortable and attractiv looking formal set',
  },
  {
    name: 'hik h43 earpods',
    image: 'images/hik h43 earpods.jpg',
    catagory: 'electronics',
    price: 9000,
    discription:
      'high quality earpods with noice cancalation and many othen interesting features',
  },
  {
    name: 'jonns e33 snikers',
    image: 'images/jonns e33 snikers.jpg',
    catagory: 'shoes',
    price: 5000,
    discription:
      'high quality and very comfortable snikers from jonns',
  },
  {
    name: 'kdi high stario gaming headphone',
    image: 'images/kdi high stario gaming headphone.jpg',
    catagory: 'electronics',
    price: 7000,
    discription: 'high quality gaming headphones',
  },
  {
    name: 'kwame e55 blue shoes',
    image: 'images/kwame e55 blue shoes.jpg',
    catagory: 'shoes',
    price: 4000,
    discription:
      'high quality and very comfortable snikers from kwame',
  },
  {
    name: 'light blue formal set',
    image: 'images/light blue formal set.jpg',
    catagory: 'clothing',
    price: 12000,
    discription: 'comfortable and attractiv looking formal set',
  },
  {
    name: 'little feminist clothing set for girls',
    image: 'images/little feminist clothing set for girls.jpg',
    catagory: 'clothing',
    price: 6000,
    discription: 'comfortable comfortable clothing set for girls',
  },
  {
    name: 'mikas black wardrob',
    image: 'images/mikas black wardrob.jpg',
    catagory: 'furniture',
    price: 25000,
    discription: 'a good looking, solid and larg stroge',
  },
  {
    name: 'mikas comfortable red sofa',
    image: 'images/mikas comfortable red sofa.jpg',
    catagory: 'furniture',
    price: 10000,
    discription: 'a good looking and comfortable sofa from mikas',
  },
  {
    name: 'mobile and watch stand',
    image: 'images/mobile and watch stand.jpg',
    catagory: 'other',
    price: 500,
    discription: 'a mobile stand that makes your life easy',
  },
  {
    name: 'nike e33 black',
    image: 'images/nike e33 black.jpg',
    catagory: 'shoes',
    price: 5000,
    discription: 'comfortable e33 shoe from nike',
  },
  {
    name: 'nike f33 snikers',
    image: 'images/nike f33 snikers.jpg',
    catagory: 'shoes',
    price: 6000,
    discription: 'comfortable f33 shoe from nike',
  },
  {
    name: 'nike r33 red shoes',
    image: 'images/nike r33 red shoes.jpg',
    catagory: 'shoes',
    price: 6600,
    discription: 'comfortable r33 shoe from nike',
  },
  {
    name: 'pink headphone',
    image: 'images/pink headphone.jpg',
    catagory: 'electronics',
    price: 7900,
    discription: 'high quality headphones',
  },
  {
    name: 'plastic water botle',
    image: 'images/plastic water botle.jpg',
    catagory: 'other',
    price: 600,
    discription: 'a high quality and long lasting storage for water',
  },
  {
    name: 'puma j44 white snikers',
    image: 'images/puma j44 white snikers.jpg',
    catagory: 'shoes',
    price: 1000,
    discription: 'comfortable j44 snikers from puma',
  },
  {
    name: 'red and black shirt for men',
    image: 'images/red and black shirt for men.jpg',
    catagory: 'clothing',
    price: 1000,
    discription: 'good looking shirt for men',
  },
  {
    name: 'revolt e393 mouse',
    image: 'images/revolt e393 mouse.jpg',
    catagory: 'electronics',
    price: 5000,
    discription: 'most accurate gaming mouse in the market',
  },
  {
    name: 'rimix r339 headphone',
    image: 'images/rimix r339 headphone.jpg',
    catagory: 'electronics',
    price: 1500,
    discription: 'a very good qulity headphone',
  },
  {
    name: 'sambal goreng teri kacang',
    image: 'images/sambal goreng teri kacang.jpg',
    catagory: 'other',
    price: 500,
    discription: 'testy sambal goreng teri kacang',
  },
  {
    name: 'sper comfty drowingroom sofa',
    image: 'images/sper comfty drowingroom sofa.jpg',
    catagory: 'furniture',
    price: 10500,
    discription:
      'very comfortabel sofa for decorating your drowingroom from sper comfty',
  },
  {
    name: 'spring bed for two persons',
    image: 'images/spring bed for two persons.jpg',
    catagory: 'furniture',
    price: 40000,
    discription:
      'very comfortabel bed for a nice sleep made by sper comfty',
  },
  {
    name: 'stefen tan k33 mecanical keyboard',
    image: 'images/stefen tan k33 mecanical keyboard.jpg',
    catagory: 'electronics',
    price: 28000,
    discription:
      'high qulity stefen ten mecanical keyboard with meny life saving features',
  },
  {
    name: 'super worm winter clothing',
    image: 'images/super worm winter clothing.jpg',
    catagory: 'clothing',
    price: 2800,
    discription: 'winter clothing made of high qulity matarials',
  },
  {
    name: 'tati purpul chire',
    image: 'images/tati purpul chire.jpg',
    catagory: 'furniture',
    price: 5000,
    discription: 'a simple purple chire',
  },
  {
    name: 'ureg t399 gaming mouse',
    image: 'images/ureg t399 gaming mouse.jpg',
    catagory: 'electronics',
    price: 9000,
    discription: 'a very high quality and accurate gaming mouse',
  },
  {
    name: 'vintage gaming console',
    image: 'images/vintage gaming console.jpg',
    catagory: 'electronics',
    price: 100000,
    discription: 'a vintage gaming console just like 90s one',
  },
  {
    name: 'white t-shirt for man',
    image: 'images/white t-shirt for man.jpg',
    catagory: 'clothing',
    price: 599,
    discription: 'a white t-shirt for man',
  },
  {
    name: 'white tranch coat',
    image: 'images/white tranch coat.jpg',
    catagory: 'clothing',
    price: 8500,
    discription: 'beautiful looking white tranch coat',
  },
  {
    name: 'wi waterproof led watch',
    image: 'images/wi waterproof led watch.jpg',
    catagory: 'electronics',
    price: 500,
    discription: 'beautiful looking waterproof led watch',
  },
];

const root = document.getElementById('root');
root.style.display = 'flex';
root.style.flexWrap = 'wrap';

products.forEach((v, index) => {
  const img = document.createElement('img');
  img.src = v.image;
  img.style.width = '100px';
  img.style.aspectRatio = 1;

  const h3 = document.createElement('h3');
  h3.innerText = `${index + 1}.${v.name}`;
  const p = document.createElement('p');
  p.innerText = v.catagory;

  const div = document.createElement('div');
  div.style.padding = '1rem';
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  div.style.border = '1px solid black';
  div.style.margin = '1rem';

  root.appendChild(div);
});
