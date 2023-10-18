import { ExpenseModel, IconeCardModel, ProductModel } from "./Model/PropsModel";

export const iconCardData: IconeCardModel[] = [
  {
    footerData: "37% ",
    icone: "fa-solid fa-hand-holding-dollar",
    subTitle: "profit",
    title: "Earning",
    value: "$198k",
    cardStyle: { background: "linear-gradient(45deg, #4099ff, #73b4ff)" },
  },
  {
    footerData: "2%",
    icone: "fa-solid fa-receipt",
    subTitle: "loss",
    title: "Orders",
    value: "$2.4K",
    cardStyle: { background: "linear-gradient(45deg,#2ed8b6,#59e0c5)" },
  },
  {
    footerData: "2%",
    icone: "fa-solid fa-wallet",
    subTitle: "loss",
    title: "Balance",
    value: "$2.4k",
    cardStyle: { background: "linear-gradient(45deg,#FFB64D,#ffcb80)" },
  },
  {
    footerData: "11%",
    icone: "fa fa-cart-plus",
    subTitle: "profit",
    title: "Total Sales",
    value: "$86k",
    cardStyle: { background: "linear-gradient(45deg,#FF5370,#ff869a)" },
  },
];

export const dummeyExpenses: ExpenseModel[] = [
  {
    expenseDate: new Date(2021, 1, 28),
    expenseTitle: "Car Insurence",
    expenseAmout: 183,
  },
  {
    expenseDate: new Date(2022, 2, 28),
    expenseTitle: "Petrol",
    expenseAmout: 432,
  },
  {
    expenseDate: new Date(2021, 3, 28),
    expenseTitle: "Sanetry",
    expenseAmout: 564,
  },
  {
    expenseDate: new Date(2021, 4, 28),
    expenseTitle: "Car Insurence",
    expenseAmout: 444,
  },
  {
    expenseDate: new Date(2022, 5, 28),
    expenseTitle: "Petrol",
    expenseAmout: 654,
  },
  {
    expenseDate: new Date(2021, 6, 28),
    expenseTitle: "Sanetry",
    expenseAmout: 543,
  },
];

export const ProductData: ProductModel[] = [
  {
    image:
      "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg",
    name: "Petrol",
    price: "$49.99",
    stock: "32 in Stock",
    sales: "20",
  },
  {
    image:
      "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg",
    name: "Gold",
    price: "$56.99",
    stock: "21 in Stock",
    sales: "78",
  },
];

export const CirculaGraphData = [
  
    {
      country: "Gold",
      sales: 501.9,
    },
    {
      country: "Bronze",
      sales: 301.9,
    },
    {
      country: "Petrol",
      sales: 201.1,
    },
    {
      country: "Disel",
      sales: 165.8,
    },
  ];

