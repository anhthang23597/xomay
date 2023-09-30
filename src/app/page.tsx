"use client"
import React, { useEffect, useState } from "react"
import { Image } from "antd"
import { products } from "@/types/common"

export default function Home() {
  return (
    <main>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Danh sách sản phẩm:
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Image.PreviewGroup items={product.srcDir}>
                <Image
                  className="max-w-[400px] max-h-[400px] w-auto h-auto"
                  src={product.srcDir[0]}
                />
              </Image.PreviewGroup>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
