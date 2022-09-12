import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <h1
      className={clsx(
        className,
        'flex justify-center',
        'font-accent font-bold',
        'text-5xl md:text-6xl lg:text-7xl',
        '-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10'
      )}
    >
      {t('Hero.title')}
    </h1>
  )
}

export default Title
