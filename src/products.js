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
  {
    name: 'R15',
    img: 'https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?size=626&ext=jpg&uid=R73666718&ga=GA1.2.679012492.1669006221&semt=ais',
    description: 'R15 is powered by 155 cc engine. This R15S engine generates a power of 18.6 PS @ 10000 rpm and a torque of 14.1 Nm @ 8500 rpm. Yamaha R15S gets Disc brakes in the front and rear.',
    price: 1921,
    category: 'bike'
  },
  {
    name: 'Repsol',
    img: 'https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVwc29sZSUyMG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'This bike is powered by the 149.16 cc Engine.Repsol Generates Maximum Power 12.6 KW @ 9000 rpm. It is Maximum Torque is 13.7 Nm @ 7000 rpm.',
    price: 2289,
    category: 'bike'
  },
  {
    name: 'Yamaha',
    img: 'https://images.unsplash.com/photo-1654948263825-1c312cf43b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWFtYWhhJTIwbW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Yamaha Motor Co., Ltd is a Japanese multinational manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products.',
    price: 1499,
    category: 'bike'
  },
  {
    name: 'Gixer',
    img: 'https://images.unsplash.com/photo-1525290323000-41fd1fc78fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3V6dWtpJTIwbW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Gixxer is a street bike available at a starting price of Rs. 1,30,718 in India. It is available in only 1 variant and 3 colours. The Suzuki Gixxer is powered by 155cc BS6 engine which develops a power of 13.41 bhp and a torque of 13.8 Nm.',
    price: 1000,
    category: 'bike'
  },
  {
    name: 'Suzuki',
    img: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVybyUyMG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The New Suzuki is featured with muscular street bike styling right, the overall ethos of the appearance is premium & stylish.',
    price: 1130,
    category: 'bike'
  },
  {
    name: 'Fazer',
    img: 'https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Our sources have confirmed that the Yamaha Fazer is all set to receive single-channel ABS from February 2019 onwards. Yamaha is likely to price the Fazer ABS at a premium of Rs 5,000 to Rs 7,000 over its non-ABS variant.',
    price: 1776,
    category: 'bike'
  },
  {
    name: 'CBR',
    img: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Honda CBR motorcycle with a price tag of estimate Rs. 1.70 Lakh. It is available in 1 variant and 4 colours. Powered by a bs6 engine',
    price: 1550,
    category: 'bike'
  },
  {
    name: 'Gixer Double Disk',
    img: 'https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Gixxer is a street bike available at a starting price of Rs. 1,30,718 in India. It is available in only 1 variant and 3 colours. The Suzuki Gixxer is powered by 155cc BS6 engine which develops a power of 13.41 bhp and a torque of 13.8 Nm.',
    price: 1410,
    category: 'bike'
  },
  {
    name: 'R15 Yellow',
    img: 'https://images.unsplash.com/photo-1609630875289-22852fa678ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'R15 is powered by 155 cc engine. This R15S engine generates a power of 18.6 PS @ 10000 rpm and a torque of 14.1 Nm @ 8500 rpm. Yamaha R15S gets Disc brakes in the front and rear.',
    price: 1840,
    category: 'bike'
  },
  {
    name: 'HONDA',
    img: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Honda is the largest manufacturer of two Wheelers, Recognized the world over as the symbol of Honda two wheelers, arrived in Bangladesh.',
    price: 890,
    category: 'bike'
  }
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
