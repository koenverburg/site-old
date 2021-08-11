import React from 'react'
import {Maybe} from '@graphcms/types'

interface IProps {
  name?: Maybe<string>
}

const Icon: React.FunctionComponent<IProps> = ({name}) => {
  switch (name) {
    case 'camera':
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6.87585V20.3759C22 21.618 21.0762 22.6259 19.9375 22.6259H2.0625C0.923828 22.6259 0 21.618 0 20.3759V6.87585C0 5.63367 0.923828 4.62585 2.0625 4.62585H5.84375L6.37227 3.08367C6.67305 2.2071 7.44219 1.62585 8.30156 1.62585H13.6941C14.5535 1.62585 15.3227 2.2071 15.6234 3.08367L16.1562 4.62585H19.9375C21.0762 4.62585 22 5.63367 22 6.87585ZM16.1562 13.6259C16.1562 10.5227 13.8445 8.00085 11 8.00085C8.15547 8.00085 5.84375 10.5227 5.84375 13.6259C5.84375 16.729 8.15547 19.2509 11 19.2509C13.8445 19.2509 16.1562 16.729 16.1562 13.6259ZM14.7812 13.6259C14.7812 15.8993 13.084 17.7509 11 17.7509C8.91602 17.7509 7.21875 15.8993 7.21875 13.6259C7.21875 11.3524 8.91602 9.50085 11 9.50085C13.084 9.50085 14.7812 11.3524 14.7812 13.6259Z" fill="black" />
        </svg>
      )
    case 'github':
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M7.35847 18.754C7.35847 18.8477 7.25645 18.9227 7.12782 18.9227C6.98145 18.9368 6.87944 18.8618 6.87944 18.754C6.87944 18.6602 6.98145 18.5852 7.11008 18.5852C7.24314 18.5712 7.35847 18.6462 7.35847 18.754ZM5.97903 18.543C5.94798 18.6368 6.03669 18.7446 6.16976 18.7727C6.28508 18.8196 6.41815 18.7727 6.44476 18.679C6.47137 18.5852 6.3871 18.4774 6.25403 18.4352C6.13871 18.4024 6.01008 18.4493 5.97903 18.543ZM7.93952 18.4634C7.81089 18.4962 7.72218 18.5852 7.73548 18.693C7.74879 18.7868 7.86411 18.8477 7.99718 18.8149C8.12581 18.7821 8.21452 18.693 8.20121 18.5993C8.1879 18.5102 8.06814 18.4493 7.93952 18.4634ZM10.8581 0.500854C4.70605 0.500854 0 5.43679 0 11.9384C0 17.1368 3.09597 21.5852 7.51815 23.1509C8.08589 23.2587 8.28548 22.8884 8.28548 22.5837C8.28548 22.293 8.27218 20.6899 8.27218 19.7055C8.27218 19.7055 5.16734 20.4087 4.51532 18.3087C4.51532 18.3087 4.00968 16.9446 3.28226 16.593C3.28226 16.593 2.26653 15.8571 3.35323 15.8712C3.35323 15.8712 4.45766 15.9649 5.06532 17.0805C6.03669 18.8899 7.66452 18.3696 8.29879 18.0602C8.40081 17.3102 8.68911 16.7899 9.00847 16.4805C6.52903 16.1899 4.02742 15.8102 4.02742 11.3009C4.02742 10.0118 4.36452 9.36492 5.07419 8.53992C4.95887 8.23523 4.58185 6.97898 5.18952 5.3571C6.11653 5.05242 8.25 6.62273 8.25 6.62273C9.1371 6.36023 10.0907 6.22429 11.0355 6.22429C11.9802 6.22429 12.9339 6.36023 13.821 6.62273C13.821 6.62273 15.9544 5.04773 16.8815 5.3571C17.4891 6.98367 17.1121 8.23523 16.9968 8.53992C17.7065 9.3696 18.1411 10.0165 18.1411 11.3009C18.1411 15.8243 15.5286 16.1852 13.0492 16.4805C13.4573 16.8509 13.8032 17.554 13.8032 18.6555C13.8032 20.2352 13.7899 22.1899 13.7899 22.5743C13.7899 22.879 13.994 23.2493 14.5573 23.1415C18.9927 21.5852 22 17.1368 22 11.9384C22 5.43679 17.0101 0.500854 10.8581 0.500854ZM4.31129 16.668C4.25363 16.7149 4.26694 16.8227 4.34234 16.9118C4.41331 16.9868 4.51532 17.0196 4.57298 16.9587C4.63064 16.9118 4.61734 16.804 4.54194 16.7149C4.47097 16.6399 4.36895 16.6071 4.31129 16.668ZM3.83226 16.2884C3.80121 16.3493 3.84556 16.4243 3.93427 16.4712C4.00524 16.518 4.09395 16.504 4.125 16.4384C4.15605 16.3774 4.11169 16.3024 4.02298 16.2555C3.93427 16.2274 3.86331 16.2415 3.83226 16.2884ZM5.26935 17.9571C5.19839 18.018 5.225 18.1587 5.32702 18.2477C5.42903 18.3555 5.55766 18.3696 5.61532 18.2946C5.67298 18.2337 5.64637 18.093 5.55766 18.004C5.46008 17.8962 5.32702 17.8821 5.26935 17.9571ZM4.76371 17.268C4.69274 17.3149 4.69274 17.4368 4.76371 17.5446C4.83468 17.6524 4.95444 17.6993 5.0121 17.6524C5.08306 17.5915 5.08306 17.4696 5.0121 17.3618C4.95 17.254 4.83468 17.2071 4.76371 17.268Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="25" height="25" fill="white" transform="translate(0 0.125854)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'instagram':
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M11.6973 6.60937C8.57409 6.60937 6.0549 9.01406 6.0549 11.9953C6.0549 14.9766 8.57409 17.3813 11.6973 17.3813C14.8205 17.3813 17.3397 14.9766 17.3397 11.9953C17.3397 9.01406 14.8205 6.60937 11.6973 6.60937ZM11.6973 15.4969C9.679 15.4969 8.029 13.9266 8.029 11.9953C8.029 10.0641 9.67409 8.49375 11.6973 8.49375C13.7205 8.49375 15.3656 10.0641 15.3656 11.9953C15.3656 13.9266 13.7156 15.4969 11.6973 15.4969ZM18.8866 6.38906C18.8866 7.0875 18.2973 7.64531 17.5705 7.64531C16.8388 7.64531 16.2544 7.08281 16.2544 6.38906C16.2544 5.69531 16.8437 5.13281 17.5705 5.13281C18.2973 5.13281 18.8866 5.69531 18.8866 6.38906ZM22.6236 7.66406C22.5402 5.98125 22.1375 4.49062 20.846 3.2625C19.5594 2.03437 17.9977 1.64999 16.2348 1.56562C14.4178 1.46718 8.97186 1.46718 7.1549 1.56562C5.39686 1.64531 3.83526 2.02968 2.54374 3.25781C1.25222 4.48593 0.854457 5.97656 0.766064 7.65937C0.662939 9.39375 0.662939 14.5922 0.766064 16.3266C0.849546 18.0094 1.25222 19.5 2.54374 20.7281C3.83526 21.9563 5.39195 22.3406 7.1549 22.425C8.97186 22.5234 14.4178 22.5234 16.2348 22.425C17.9977 22.3453 19.5594 21.9609 20.846 20.7281C22.1326 19.5 22.5352 18.0094 22.6236 16.3266C22.7268 14.5922 22.7268 9.39844 22.6236 7.66406ZM20.2763 18.1875C19.8933 19.1063 19.1518 19.8141 18.1844 20.1844C16.7357 20.7328 13.2982 20.6063 11.6973 20.6063C10.0964 20.6063 6.65401 20.7281 5.21026 20.1844C4.24776 19.8188 3.50624 19.1109 3.11829 18.1875C2.54374 16.8047 2.67633 13.5234 2.67633 11.9953C2.67633 10.4672 2.54865 7.18125 3.11829 5.80312C3.50133 4.88437 4.24285 4.17656 5.21026 3.80625C6.65892 3.25781 10.0964 3.38437 11.6973 3.38437C13.2982 3.38437 16.7406 3.26249 18.1844 3.80625C19.1469 4.17187 19.8884 4.87968 20.2763 5.80312C20.8509 7.18594 20.7183 10.4672 20.7183 11.9953C20.7183 13.5234 20.8509 16.8094 20.2763 18.1875Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="25" height="25" fill="white" transform="translate(0.692383)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'medium-m':
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.07228 6.79617C3.09806 6.5196 2.99923 6.24304 2.81017 6.05554L0.872278 3.50554V3.12585H6.8965L11.5543 14.268L15.6492 3.12585H21.3942V3.50554L19.7356 5.23992C19.5938 5.3571 19.5207 5.55398 19.5508 5.74617V18.4962C19.5207 18.6884 19.5938 18.8852 19.7356 19.0024L21.3555 20.7368V21.1165H13.2043V20.7368L14.8844 18.9602C15.0477 18.7821 15.0477 18.7259 15.0477 18.454V8.15085L10.377 21.0837H9.74533L4.31408 8.15085V16.818C4.26681 17.1837 4.37853 17.5493 4.61486 17.8118L6.79767 20.6993V21.079H0.610168V20.704L2.79298 17.8118C3.02501 17.5493 3.13244 17.179 3.07228 16.818V6.79617Z" fill="black" />
        </svg>
      )
    case 'pinterest':
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6875 0C5.80938 0 0 3.20625 0 8.39531C0 11.6953 2.26875 13.5703 3.64375 13.5703C4.21094 13.5703 4.5375 12.2766 4.5375 11.9109C4.5375 11.475 3.17969 10.5469 3.17969 8.73281C3.17969 4.96406 6.68594 2.29219 11.2234 2.29219C15.125 2.29219 18.0125 4.10625 18.0125 7.43906C18.0125 9.92813 16.7922 14.5969 12.8391 14.5969C11.4125 14.5969 10.1922 13.7531 10.1922 12.5438C10.1922 10.7719 11.7047 9.05625 11.7047 7.22813C11.7047 4.125 6.325 4.6875 6.325 8.4375C6.325 9.225 6.44531 10.0969 6.875 10.8141C6.08438 13.5984 4.46875 17.7469 4.46875 20.6156C4.46875 21.5016 4.62344 22.3734 4.72656 23.2594C4.92135 23.4375 4.82396 23.4188 5.12188 23.3297C8.00938 20.0953 7.90625 19.4625 9.2125 15.2297C9.91719 16.3266 11.7391 16.9172 13.1828 16.9172C19.2672 16.9172 22 12.0656 22 7.69219C22 3.0375 17.0844 0 11.6875 0Z" fill="black" />
        </svg>
      )
    case 'twitter':
      return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7386 7.23754C19.7525 7.45073 19.7525 7.66397 19.7525 7.87715C19.7525 14.3797 15.2157 21.8721 6.92386 21.8721C4.36928 21.8721 1.9962 21.0649 0 19.664C0.362957 19.7096 0.711906 19.7249 1.08883 19.7249C3.19666 19.7249 5.13704 18.9482 6.68654 17.6234C4.7043 17.5777 3.04313 16.1614 2.47079 14.2122C2.75 14.2578 3.02917 14.2883 3.32234 14.2883C3.72715 14.2883 4.132 14.2274 4.50888 14.1208C2.4429 13.6639 0.893363 11.6842 0.893363 9.29339V9.2325C1.49359 9.59798 2.19162 9.8264 2.93141 9.85682C1.71695 8.97356 0.921293 7.46597 0.921293 5.76037C0.921293 4.84668 1.1446 4.00912 1.53549 3.27815C3.75504 6.26292 7.09135 8.21212 10.8324 8.42536C10.7626 8.05987 10.7207 7.6792 10.7207 7.29848C10.7207 4.58779 12.7309 2.3797 15.2296 2.3797C16.5278 2.3797 17.7004 2.97361 18.524 3.933C19.543 3.71981 20.5202 3.30862 21.3857 2.74518C21.0506 3.88734 20.3387 4.84673 19.4035 5.45583C20.3109 5.34928 21.1903 5.07511 21.9999 4.69443C21.3858 5.66901 20.618 6.537 19.7386 7.23754Z" fill="black" />
        </svg>
      )
    default:
      return null
  }
}

export {Icon}
