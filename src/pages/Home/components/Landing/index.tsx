import Imagem from '../../../../assets/Imagem.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { FeaturesContainer, IconCart, IconCoffee, IconPackage, IconTimer, InfoContainer, LandingContainer } from './styles'

export function Landing() {
  return (
    <>
      <LandingContainer>
        <InfoContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>
          <FeaturesContainer>
            <div>
              <IconCart>
                <ShoppingCart weight='fill' size={16} color='#FAFAFA' />
              </IconCart>
              Compra simples e segura
            </div>
            <div>
              <IconPackage>
                <Package weight='fill' size={16} color='#FAFAFA' />
              </IconPackage>
              Embalagem mantém o café intacto
            </div>
            <div>
              <IconTimer>
                <Timer weight='fill' size={16} color='#FAFAFA' />
              </IconTimer>
              Entrega rápida e rastreada
            </div>
            <div>
              <IconCoffee>
                <Coffee weight='fill' size={16} color='#FAFAFA' />
              </IconCoffee>
              O café chega fresquinho até você
            </div>
          </FeaturesContainer>
        </InfoContainer>

        <img src={Imagem} alt="" />
      </LandingContainer>
    </>
  )
}