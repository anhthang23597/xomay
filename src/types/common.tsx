export interface Product {
  id: number
  name: string
  srcDir: string[]
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sản phẩm 1",
    srcDir: ["/images/DC01/1.png"],
    description: "Mô tả sản phẩm 1",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    srcDir: ["/images/DC02/2.png"],
    description: "Mô tả sản phẩm 2",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    srcDir: ["/images/DC03/3.png"],
    description: "Mô tả sản phẩm 3",
  },
  {
    id: 3,
    name: "Sản phẩm 4",
    srcDir: ["/images/DC04/4.png"],
    description: "Mô tả sản phẩm 3",
  },
  {
    id: 3,
    name: "Sản phẩm 5",
    srcDir: ["/images/DC05/5.png"],
    description: "Mô tả sản phẩm 3",
  },
]
