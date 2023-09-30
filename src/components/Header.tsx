import React from "react"
import { Layout, Menu } from "antd"
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons"

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  return (
    <Header className="aspect-[577/310] w-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a className="text-2xl font-bold text-red-500 font-serif">Xo May Shop</a>
            </div>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
