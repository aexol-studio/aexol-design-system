import * as React from 'react'
import { Colors } from '../styles/Colors'
export const Profile = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d:
        'M5.42222 19.363C4.59259 18.614 4 17.4907 4 16.2425V14.9943V12.9971C4 11.8737 4.82963 11 5.89629 11H18.1037C19.1704 11 20 11.8737 20 12.9971V15.1191V16.3673C20 17.4907 19.5259 18.614 18.6963 19.4878C14.9037 22.8579 9.33333 22.8579 5.42222 19.363Z',
      fill: Colors[fill]
    }),
    React.createElement('circle', {
      cx: '12',
      cy: '6',
      r: '4',
      fill: Colors[fill]
    })
  )
export const BackArrow = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M17.774 2.36679C18.1237 2.79424 18.0607 3.42426 17.6332 3.77399L7.57919 12L17.6332 20.2261C18.0607 20.5758 18.1237 21.2058 17.774 21.6333C17.4242 22.0607 16.7942 22.1237 16.3668 21.774L5.36676 12.774C5.13463 12.5841 5 12.3 5 12C5 11.7001 5.13463 11.416 5.36676 11.2261L16.3668 2.22607C16.7942 1.87635 17.4242 1.93935 17.774 2.36679Z',
      fill: Colors[fill]
    })
  )
export const Close = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z',
      fill: Colors[fill]
    })
  )
export const Check = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M21.6937 4.77968C22.0915 5.16277 22.1034 5.79582 21.7203 6.19364L8.72035 19.6936C8.52318 19.8984 8.2482 20.0096 7.96414 19.9994C7.68007 19.9892 7.41377 19.8585 7.2318 19.6402L2.2318 13.6402C1.87824 13.2159 1.93556 12.5853 2.35984 12.2318C2.78412 11.8782 3.41468 11.9355 3.76825 12.3598L8.0538 17.5025L20.2797 4.80636C20.6628 4.40854 21.2958 4.39659 21.6937 4.77968Z',
      fill: Colors[fill]
    })
  )
export const CheckBox = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '50',
      height: '50',
      viewBox: '0 0 13 13',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M12.684 0.770466C13.0869 1.1482 13.1073 1.78103 12.7296 2.18394L5.2296 10.1839C5.02747 10.3995 4.74034 10.5147 4.44526 10.4985C4.15018 10.4823 3.87737 10.3364 3.70006 10.1L0.700059 6.1C0.368688 5.65818 0.458231 5.03137 0.900059 4.7C1.34189 4.36863 1.96869 4.45818 2.30006 4.9L4.58529 7.94698L11.2705 0.816062C11.6483 0.41315 12.2811 0.392736 12.684 0.770466Z',
      fill: Colors[fill]
    })
  )
export const Info = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M12 18.9683C11.4653 18.9683 11.0318 18.5348 11.0318 18L11.0318 9.00001C11.0318 8.46526 11.4653 8.03176 12 8.03176C12.5348 8.03176 12.9683 8.46526 12.9683 9.00001L12.9683 18C12.9683 18.5348 12.5348 18.9683 12 18.9683Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      d:
        'M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5Z',
      fill: Colors[fill]
    })
  )
export const Error = ({ stroke }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d: 'M7.5 7.5L16.5 16.5',
      stroke: Colors[stroke],
      strokeWidth: '2',
      strokeMiterlimit: '10',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    React.createElement('path', {
      d: 'M16.5 7.5L7.5 16.5',
      stroke: Colors[stroke],
      strokeWidth: '2',
      strokeMiterlimit: '10',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  )
export const Warning = ({ stroke }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d: 'M12 6V15',
      stroke: Colors[stroke],
      strokeWidth: '1.9365',
      strokeMiterlimit: '10',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    React.createElement('path', {
      d:
        'M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z',
      fill: 'black',
      stroke: Colors[stroke]
    })
  )
export const Success = ({ stroke }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d: 'M18 8L8.5 17.5L5.5 13.5',
      stroke: Colors[stroke],
      strokeWidth: '1.9365',
      strokeMiterlimit: '10',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  )
export const Eassy = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '48',
      height: '49',
      viewBox: '0 0 48 49',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d:
        'M32.0967 16.8034C33.1316 16.2059 34.573 16.3106 35.3737 17.6975C35.7741 18.391 36.147 19.9947 34.4911 20.9507L26.8989 25.3341C27.4256 25.1841 28.6758 25.2238 29.4766 26.6107C30.2773 27.9977 29.2931 29.4815 28.6032 29.8798C28.9483 29.6806 30.3801 29.7696 31.1808 31.1565C31.9815 32.5434 31.3464 33.8437 30.3074 34.4256C30.8341 34.2756 32.0843 34.3154 32.885 35.7023C33.6858 37.0892 33.0509 38.3714 32.016 38.9689L25.1166 42.9523C21.9933 44.4473 14.7139 45.6716 10.55 38.4596C9.56756 37.0235 7.52698 33.2401 9.90502 27.7988C9.90502 27.7988 13.7808 20.9583 14.4099 19.642C15.0391 18.3257 16.2092 15.7334 18.1139 16.483C20.0185 17.2326 19.6486 19.1412 19.2255 20.0018L16.2221 25.9686L32.0967 16.8034Z',
      fill: Colors[fill]
    }),
    React.createElement('rect', {
      x: '20',
      y: '5.26978',
      width: '2.20782',
      height: '8.83127',
      transform: 'rotate(-7.01763 20 5.26978)',
      fill: Colors[fill]
    }),
    React.createElement('rect', {
      x: '26.9602',
      y: '5.52539',
      width: '2.20782',
      height: '8.83127',
      transform: 'rotate(16.7903 26.9602 5.52539)',
      fill: Colors[fill]
    }),
    React.createElement('rect', {
      x: '33.8579',
      y: '10.2375',
      width: '2.20782',
      height: '8.83127',
      transform: 'rotate(52.7189 33.8579 10.2375)',
      fill: Colors[fill]
    })
  )
export const Mail = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d:
        'M21 11L12.5767 17.4572C12.2389 17.7161 11.7893 17.7226 11.4453 17.4736L3 11.359V19.7002C3 20.9651 4.0125 22 5.1375 22H18.8625C20.1 22 21 20.9651 21 19.7002V11Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      d:
        'M21 9.5L12.1067 16L3 9.5L11.3926 3.258C11.8182 2.914 12.4324 2.914 12.858 3.258L21 9.5Z',
      fill: Colors[fill]
    })
  )
export const Github = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '48',
      height: '48',
      viewBox: '0 0 48 48',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M23.9266 0C10.7156 0 0 11.0144 0 24.5938C0 35.4573 6.89908 44.6611 16.2936 47.9805C17.4679 48.1314 17.9083 47.377 17.9083 46.7734C17.9083 46.1699 17.9083 44.6611 17.9083 42.5487C11.3028 44.0575 9.83486 39.2293 9.83486 39.2293C8.80734 36.3626 7.19266 35.6082 7.19266 35.6082C4.99083 34.0993 7.33945 34.0993 7.33945 34.0993C9.68807 34.2502 11.0092 36.6643 11.0092 36.6643C13.211 40.4364 16.5872 39.3802 17.9083 38.7767C18.055 37.117 18.789 36.0608 19.3761 35.4573C14.0917 34.8537 8.51376 32.7414 8.51376 23.2358C8.51376 20.52 9.3945 18.4076 11.0092 16.597C10.8624 16.1444 9.98165 13.5794 11.3028 10.26C11.3028 10.26 13.3578 9.65645 17.9083 12.825C19.8165 12.2214 21.8716 12.0706 23.9266 12.0706C25.9816 12.0706 28.0367 12.3723 29.945 12.825C34.4954 9.65645 36.5505 10.26 36.5505 10.26C37.8716 13.5794 36.9908 16.1444 36.844 16.7479C38.3119 18.4076 39.3394 20.6708 39.3394 23.3867C39.3394 32.8923 33.7615 34.8537 28.4771 35.4573C29.3578 36.2117 30.0917 37.7205 30.0917 39.9837C30.0917 43.3031 30.0917 45.8681 30.0917 46.7734C30.0917 47.377 30.5321 48.1314 31.7064 47.9805C41.2477 44.6611 48 35.4573 48 24.5938C47.8532 11.0144 37.1376 0 23.9266 0Z',
      fill: Colors[fill]
    })
  )
export const Projects = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '48',
      height: '48',
      viewBox: '0 0 48 48',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d:
        'M24 1.71423C11.7429 1.71423 1.71429 11.7428 1.71429 23.9999C1.71429 36.2571 11.7429 46.2857 24 46.2857C36.2572 46.2857 46.2857 36.2571 46.2857 23.9999C46.2857 11.7428 36.2572 1.71423 24 1.71423Z',
      fill: 'white'
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M38.9366 13.9365C38.9366 15.006 38.0696 15.873 37 15.873H11C9.93054 15.873 9.06354 15.006 9.06354 13.9365C9.06354 12.867 9.93054 12 11 12H37C38.0696 12 38.9366 12.867 38.9366 13.9365Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M16 14C16 11.7909 17.7909 10 20 10C22.2092 10 24 11.7909 24 14C24 16.2091 22.2092 18 20 18C17.7909 18 16 16.2091 16 14Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M18 14C18 12.8954 18.8954 12 20 12C21.1046 12 22 12.8954 22 14C22 15.1046 21.1046 16 20 16C18.8954 16 18 15.1046 18 14Z',
      fill: 'white'
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M38.9366 23.9364C38.9366 25.006 38.0696 25.873 37 25.873H11C9.93054 25.873 9.06354 25.006 9.06354 23.9366C9.06354 22.867 9.93054 22 11 22H37C38.0696 22 38.9366 22.867 38.9366 23.9364Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M26 24C26 21.7908 27.7908 20 30 20C32.2092 20 34 21.7908 34 24C34 26.2092 32.2092 28 30 28C27.7908 28 26 26.2092 26 24Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M28 24C28 22.8954 28.8954 22 30 22C31.1046 22 32 22.8954 32 24C32 25.1046 31.1046 26 30 26C28.8954 26 28 25.1046 28 24Z',
      fill: 'white'
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M38.9366 33.9364C38.9366 35.006 38.0696 35.873 37 35.873H11C9.93054 35.873 9.06354 35.006 9.06354 33.9366C9.06354 32.867 9.93054 32 11 32H37C38.0696 32 38.9366 32.867 38.9366 33.9364Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M16 34C16 31.7908 17.7909 30 20 30C22.2092 30 24 31.7908 24 34C24 36.2092 22.2092 38 20 38C17.7909 38 16 36.2092 16 34Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d:
        'M18 34C18 32.8954 18.8954 32 20 32C21.1046 32 22 32.8954 22 34C22 35.1046 21.1046 36 20 36C18.8954 36 18 35.1046 18 34Z',
      fill: 'white'
    })
  )
export const Users = ({ fill }) =>
  React.createElement(
    'svg',
    {
      width: '48',
      height: '48',
      viewBox: '0 0 48 48',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d:
        'M24 0C10.8 0 0 10.8 0 24C0 37.2 10.8 48 24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 0 24 0Z',
      fill: Colors[fill]
    }),
    React.createElement('path', {
      d:
        'M12.4887 36.5836C11.0369 35.2638 9.99985 33.2842 9.99985 31.0845V28.8849V25.3655C9.99985 23.3858 11.4517 21.8461 13.3184 21.8461H34.6813C36.548 21.8461 37.9998 23.3858 37.9998 25.3655V29.1049V31.3045C37.9998 33.2841 37.1702 35.2638 35.7184 36.8036C29.0813 42.7426 19.3332 42.7426 12.4887 36.5836Z',
      fill: '#DFE6F7'
    }),
    React.createElement('circle', {
      cx: '23.4614',
      cy: '13.7692',
      r: '7',
      fill: '#DFE6F7'
    })
  )
export const GraphQLlogo = () =>
  React.createElement(
    'svg',
    {
      width: '218',
      height: '40',
      viewBox: '0 0 218 40',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    React.createElement('path', {
      d:
        'M41.7068 22.4204V17.9932C41.7068 15.7175 42.2447 14.0625 43.3411 13.0281C44.4169 11.973 45.8857 11.4558 47.6856 11.4558C48.8648 11.4558 49.8785 11.6627 50.7681 12.0971C51.637 12.5316 52.3197 13.1315 52.7955 13.9177C53.2713 14.7038 53.5196 15.6141 53.5196 16.6278V16.7312H51.699V16.6278C51.699 15.5313 51.3473 14.6624 50.6233 14.0418C49.8992 13.4212 48.9269 13.0902 47.7063 13.0902C46.3409 13.0902 45.2858 13.4832 44.5824 14.2694C43.879 15.0555 43.5066 16.3175 43.5066 18.0759V22.5445C43.5066 25.7304 44.9134 27.3234 47.727 27.3234C49.0303 27.3234 50.0233 26.9717 50.7267 26.2476C51.4094 25.5443 51.7611 24.4064 51.7611 22.8548V21.5308H47.6649V19.9585H53.5609V22.5238C53.5609 24.7788 53.0231 26.4131 51.968 27.4268C50.9129 28.4612 49.4854 28.9578 47.6856 28.9578C45.865 28.9578 44.4169 28.4406 43.3411 27.3855C42.2447 26.3511 41.7068 24.696 41.7068 22.4204Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M58.7536 21.262V28.7717H56.933V11.6628H63.2842C64.8979 11.6628 66.1598 12.0766 67.0701 12.9248C67.9804 13.7523 68.4562 14.9522 68.4562 16.4831C68.4562 17.7037 68.1252 18.7174 67.4839 19.5035C66.8425 20.2897 65.9323 20.8276 64.7737 21.0965L68.8079 28.7924H66.7184L62.8498 21.2827H58.7536V21.262ZM63.1394 19.6897C64.2566 19.6897 65.1048 19.4208 65.7254 18.8622C66.346 18.3036 66.6357 17.5175 66.6357 16.4831C66.6357 15.428 66.3253 14.6212 65.7254 14.0833C65.1254 13.5454 64.2566 13.2765 63.1394 13.2765H58.7536V19.669H63.1394V19.6897Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M73.0903 24.6548L71.6421 28.7716H69.7388L75.9659 11.6421H77.4761L83.7031 28.7716H81.7999L80.3517 24.6548H73.0903ZM76.7106 14.1867L73.6075 23.1239H79.8345L76.7106 14.1867Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M97.1502 16.7727C97.1502 18.3036 96.6744 19.5242 95.7021 20.3931C94.7297 21.262 93.4264 21.7171 91.7714 21.7171H87.4269V28.7924H85.6064V11.6628H91.7507C93.4264 11.6628 94.7297 12.0973 95.7021 12.9869C96.6744 13.8764 97.1502 15.1384 97.1502 16.7727ZM95.3504 16.7727C95.3504 15.5935 95.0194 14.7246 94.378 14.1454C93.7367 13.5661 92.8058 13.2972 91.6266 13.2972H87.4269V20.0621H91.6266C92.8265 20.0621 93.7367 19.7932 94.378 19.2346C95.0194 18.6967 95.3504 17.8692 95.3504 16.7727Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M111.321 28.7717H109.501V20.8276H101.495V28.7717H99.6741V11.6628H101.495V19.2139H109.501V11.6628H111.321V28.7717Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M126.196 31.2335L123.713 32.5989L121.707 28.8958C121.314 28.9372 120.879 28.9786 120.445 28.9786C116.369 28.9786 114.321 26.7029 114.321 22.1516V18.2415C114.321 13.6902 116.39 11.4146 120.548 11.4146C122.452 11.4146 123.962 11.9524 125.058 13.0075C126.175 14.0833 126.713 15.8211 126.713 18.2209V22.1309C126.713 24.8824 125.927 26.7856 124.375 27.8821L126.196 31.2335ZM120.528 26.0823C121.521 26.0823 122.265 25.7719 122.741 25.1306C123.217 24.4893 123.465 23.4963 123.465 22.1102V18.4071C123.465 16.9589 123.217 15.9038 122.741 15.2418C122.265 14.5798 121.521 14.2695 120.528 14.2695C119.493 14.2695 118.728 14.5798 118.273 15.2211C117.817 15.8624 117.569 16.9175 117.569 18.4071V22.1102C117.569 23.517 117.797 24.5307 118.273 25.1513C118.748 25.7719 119.493 26.0823 120.528 26.0823Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d: 'M132.423 11.6628V25.9582H139.912V28.7924H129.175V11.6628H132.423Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M146.367 19.2552H153.711L153.359 20.8896H146.015L144.67 27.1373H153.297L152.925 28.7716H142.519L146.16 11.6421H156.566L156.214 13.2764H147.629L146.367 19.2552Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M165.524 11.6628C167.013 11.6628 168.192 12.0145 169.041 12.7179C169.91 13.4213 170.323 14.5385 170.323 16.0487C170.323 16.7107 170.241 17.4141 170.075 18.1795L169.206 22.255C168.73 24.5307 167.841 26.1857 166.558 27.2201C165.275 28.2545 163.724 28.7924 161.924 28.7924H156.069L159.71 11.6628H165.524ZM167.386 22.3585L168.254 18.2623C168.42 17.4348 168.503 16.7727 168.503 16.2969C168.503 15.2625 168.234 14.4971 167.675 14.0213C167.137 13.5454 166.331 13.2972 165.296 13.2972H161.179L158.242 27.1374H162.255C165.006 27.1374 166.703 25.5444 167.386 22.3585Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d: 'M176.861 11.6628L173.22 28.7924H171.399L175.04 11.6628H176.861Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M185.322 13.2972L182.053 28.7717H180.274L183.543 13.2972H178.66L179.012 11.6628H190.597L190.246 13.2972H185.322Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M188.922 24.4272C188.922 23.8273 189.004 23.1653 189.149 22.4205L190.101 17.9726C191.032 13.6075 193.37 11.4146 197.155 11.4146C198.686 11.4146 199.886 11.7869 200.796 12.511C201.707 13.2558 202.162 14.3936 202.162 15.9452C202.162 16.5451 202.079 17.2072 201.934 17.9519L200.983 22.3998C200.052 26.765 197.714 28.9579 193.99 28.9579C192.439 28.9579 191.197 28.5855 190.287 27.8614C189.377 27.1373 188.922 25.9995 188.922 24.4272ZM199.141 22.5239L200.114 18.0554C200.238 17.4554 200.321 16.8761 200.321 16.2969C200.321 14.1454 199.183 13.0696 196.928 13.0696C195.583 13.0696 194.507 13.4627 193.701 14.2281C192.894 15.0142 192.294 16.2762 191.921 18.0554L190.949 22.5239C190.825 23.1446 190.742 23.7031 190.742 24.1583C190.742 26.2684 191.901 27.3028 194.238 27.3028C195.521 27.3028 196.576 26.9305 197.383 26.165C198.19 25.4202 198.769 24.1997 199.141 22.5239Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M212.423 21.0758L214.885 28.7716H212.816L210.54 21.262H206.424L204.81 28.7716H202.989L206.63 11.6421H212.94C214.306 11.6421 215.361 11.9731 216.126 12.6144C216.892 13.2557 217.285 14.1867 217.285 15.3659C217.285 16.8141 216.85 18.0346 215.981 19.069C215.112 20.1034 213.913 20.7654 212.423 21.0758ZM215.423 15.6969C215.423 14.9108 215.175 14.3108 214.678 13.8971C214.182 13.4833 213.457 13.2971 212.526 13.2971H208.12L206.755 19.6897H211.037C212.32 19.6897 213.375 19.338 214.202 18.6139C215.009 17.9105 215.423 16.9382 215.423 15.6969Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M33.7626 8.60098L19.7362 0.512025C18.557 -0.170675 17.1089 -0.170675 15.9297 0.512025L1.90328 8.60098C0.724076 9.28368 0 10.5456 0 11.8904V28.089C0 29.4544 0.724076 30.6956 1.90328 31.3783L15.9297 39.488C17.1089 40.1707 18.557 40.1707 19.7362 39.488L33.7626 31.399C34.9418 30.7163 35.6659 29.475 35.6659 28.1096V11.8904C35.6659 10.5456 34.9418 9.28368 33.7626 8.60098Z',
      fill: '#514E5A'
    }),
    React.createElement('path', {
      d:
        'M10.675 24.1792C10.2198 24.4688 9.84744 24.8619 9.61987 25.3584L4.53065 20.745C4.32378 20.5588 4.22034 20.2898 4.22034 20.0002C4.22034 19.7106 4.34446 19.4416 4.53065 19.2554L10.2819 14.0421L11.73 12.7388L12.7851 13.918L11.337 15.2213L6.06156 20.0002L10.675 24.1792Z',
      fill: '#25222E'
    }),
    React.createElement('path', {
      d:
        'M11.3369 24.7791L12.7851 26.0824L11.73 27.2616L10.2819 25.9583C10.4681 25.4204 10.8404 25.0066 11.3369 24.7791Z',
      fill: '#25222E'
    }),
    React.createElement('path', {
      d:
        'M24.3289 15.2212L22.8807 13.8972L23.9358 12.718L25.384 14.042C25.1978 14.5592 24.8254 14.9937 24.3289 15.2212Z',
      fill: '#25222E'
    }),
    React.createElement('path', {
      d:
        'M31.4456 20.0002C31.4456 20.2898 31.3215 20.5588 31.1353 20.7449L25.4047 25.9376L23.9566 27.2616L22.9015 26.0824L24.3496 24.7584L29.625 19.9795L25.0117 15.8005C25.4668 15.5109 25.8392 15.1178 26.0667 14.6213L31.156 19.214C31.3421 19.4416 31.4456 19.7106 31.4456 20.0002Z',
      fill: '#25222E'
    }),
    React.createElement('path', {
      d:
        'M12.2472 15.4281C13.4127 15.4281 14.3574 14.4833 14.3574 13.3179C14.3574 12.1525 13.4127 11.2078 12.2472 11.2078C11.0818 11.2078 10.1371 12.1525 10.1371 13.3179C10.1371 14.4833 11.0818 15.4281 12.2472 15.4281Z',
      fill: '#25222E'
    }),
    React.createElement('path', {
      d:
        'M25.5289 13.3179C25.5289 13.5662 25.4875 13.8144 25.4047 14.042C25.2185 14.5592 24.8255 14.973 24.329 15.2005C24.06 15.3247 23.7497 15.4074 23.4187 15.4074C23.3359 15.4074 23.2532 15.4074 23.1704 15.3867L14.2747 26.0617C14.3367 26.2478 14.3574 26.4547 14.3574 26.6616C14.3574 27.8201 13.4058 28.7718 12.2472 28.7718C11.0887 28.7718 10.1371 27.8201 10.1371 26.6616C10.1371 26.4133 10.1785 26.1651 10.2612 25.9375C10.4474 25.4203 10.8405 25.0066 11.3163 24.7583C11.5852 24.6135 11.8956 24.5514 12.2266 24.5514C12.3093 24.5514 12.3921 24.5514 12.4748 24.5721L21.3913 13.9179C21.3292 13.7317 21.3085 13.5248 21.3085 13.3179C21.3085 12.1594 22.2602 11.2078 23.4187 11.2078C24.5772 11.2078 25.5289 12.1594 25.5289 13.3179Z',
      fill: '#25222E'
    }),
    React.createElement('path', {
      d:
        'M23.4186 28.7718C24.584 28.7718 25.5288 27.8271 25.5288 26.6617C25.5288 25.4963 24.584 24.5515 23.4186 24.5515C22.2532 24.5515 21.3085 25.4963 21.3085 26.6617C21.3085 27.8271 22.2532 28.7718 23.4186 28.7718Z',
      fill: '#25222E'
    })
  )
//# sourceMappingURL=index.js.map