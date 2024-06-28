import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BannerTagContainer, GroupTag } from './style'

export function BannerTags() {
  return (
    <BannerTagContainer>
      <aside>
        <GroupTag colortag="yellow-700">
          <span>
            <ShoppingCart size={16} weight="fill" color="#fff" />
          </span>
          <p>Compra simples e segura</p>
        </GroupTag>
        <GroupTag colortag="yellow-400">
          <span>
            <Timer size={16} weight="fill" color="#fff" />
          </span>
          <p>Entrega rápida e rastreada</p>
        </GroupTag>
      </aside>
      <aside>
        <GroupTag colortag="gray-400">
          <span>
            <Package size={16} weight="fill" color="#fff" />
          </span>
          <p>Embalagem mantém o café intacto</p>
        </GroupTag>
        <GroupTag colortag="purple-400">
          <span>
            <Coffee size={16} weight="fill" color="#fff" />
          </span>
          <p>O café chega fresquinho até você</p>
        </GroupTag>
      </aside>
    </BannerTagContainer>
  )
}
