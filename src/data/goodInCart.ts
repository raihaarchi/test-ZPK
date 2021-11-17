import { GoodInCart } from 'types/goodInCart';

const goodInCart: GoodInCart[] = [
  {
    id: 1,
    quantity: 5,
    discount: 10,
    price: 1000,
    oldPrice: 900,
    priceWithoutVat: 700,
    shipmentQuantity: 10,
    good: {
      barCode: 'dasdas',
      brand: {
        id: 1,
        name: 'Persil',
      },
      category: {
        id: 1,
        name: 'Бытовая химия',
      },
      id: 1,
      minQuantity: 20,
      name:
        'Стиральный порошок Ariel "Color", автомат, для цветных вещей, 9 кг',
      photo: {
        previewHeight: 190,
        previewUrl: '/images/temp-product-image.png',
        previewWidth: 95,
      },
      pickingQuantum: 20,
      uniqueCode: 'fdsgf',
      unitKindName: 'Стиральный порошок',
      vatKindValue: '',
      vendorCode: 'fdsf',
    },
  },
  {
    id: 2,
    quantity: 5,
    discount: 20,
    price: 999,
    oldPrice: 900,
    priceWithoutVat: 700,
    shipmentQuantity: 10,
    good: {
      barCode: 'dasdas',
      brand: {
        id: 1,
        name: 'Persil',
      },
      category: {
        id: 1,
        name: 'Бытовая химия',
      },
      id: 1,
      minQuantity: 20,
      name:
        'Meine Liebe Стиральный порошок для детского белья 1 кг автомат  "Color" без отдушек',
      photo: {
        previewHeight: 190,
        previewUrl: '/images/temp-product-image-2.png',
        previewWidth: 95,
      },
      pickingQuantum: 20,
      uniqueCode: 'fdsgf',
      unitKindName: 'Стиральный порошок',
      vatKindValue: '',
      vendorCode: 'fdsf',
    },
  },
  {
    id: 3,
    quantity: 5,
    discount: 30,
    price: 999,
    oldPrice: 900,
    priceWithoutVat: 700,
    shipmentQuantity: 10,
    good: {
      barCode: 'dasdas',
      brand: {
        id: 1,
        name: 'Persil',
      },
      category: {
        id: 1,
        name: 'Бытовая химия',
      },
      id: 1,
      minQuantity: 20,
      name:
        'Стиральный порошок Ariel "Super White", автомат, для белых вещей, 9 кг',
      photo: {
        previewHeight: 190,
        previewUrl: '/images/temp-product-image-3.png',
        previewWidth: 95,
      },
      pickingQuantum: 20,
      uniqueCode: 'fdsgf',
      unitKindName: 'Стиральный порошок',
      vatKindValue: '',
      vendorCode: 'fdsf',
    },
  },
  {
    id: 4,
    quantity: 5,
    discount: 10,
    price: 1000,
    oldPrice: 900,
    priceWithoutVat: 700,
    shipmentQuantity: 10,
    good: {
      barCode: 'dasdas',
      brand: {
        id: 1,
        name: 'Persil',
      },
      category: {
        id: 1,
        name: 'Бытовая химия',
      },
      id: 1,
      minQuantity: 20,
      name:
        'Meine Liebe Стиральный порошок для детского белья “Весенняя сирень” 1 кг автомат, без отдушек',
      photo: {
        previewHeight: 190,
        previewUrl: '/images/temp-product-image.png',
        previewWidth: 95,
      },
      pickingQuantum: 20,
      uniqueCode: 'fdsgf',
      unitKindName: 'Стиральный порошок',
      vatKindValue: '',
      vendorCode: 'fdsf',
    },
  },
];

export default goodInCart;
