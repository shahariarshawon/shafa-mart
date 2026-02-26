export interface TProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  discount: number;
  stock: number;
  stockUnit: string;
  brand: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isOnSale: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin" | "seller";
  avatar: string;
  address: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
