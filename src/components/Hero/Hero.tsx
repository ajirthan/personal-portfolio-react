import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Typed from 'react-typed'
import Avatar from './Avatar'
import Title from './Title'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(className, 'container mx-auto px-4')}>
      <Avatar />
      <Title />
      <Typed
        className="flex justify-center text-2xl mx-2 text-center h-6"
        strings={[
          t('Hero.subtitle.fullStackDev'),
          t('Hero.subtitle.uiuxDesigner'),
        ]}
        typeSpeed={120}
        backSpeed={40}
        loop
      />
    </div>
  )
}

export default Hero
