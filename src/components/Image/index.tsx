import NextImage from 'next/image'
import styles from './image.module.scss'

export const Image = (image: HTMLImageElement): React.ReactNode => {
  return (
    <div className={styles.wrapperImage}>
      <NextImage className={styles.image} src={image.src} alt={image.alt} height="400" width="555" />
    </div>
  )
}
