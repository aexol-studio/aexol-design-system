import * as React from 'react'
import { Colors } from '../styles/Colors'

interface IIconFill {
  fill: keyof typeof Colors
}

interface IIconStroke {
  stroke: keyof typeof Colors
}

export const Profile = ({ fill }: IIconFill) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.42222 19.363C4.59259 18.614 4 17.4907 4 16.2425V14.9943V12.9971C4 11.8737 4.82963 11 5.89629 11H18.1037C19.1704 11 20 11.8737 20 12.9971V15.1191V16.3673C20 17.4907 19.5259 18.614 18.6963 19.4878C14.9037 22.8579 9.33333 22.8579 5.42222 19.363Z"
      fill={Colors[fill]}
    />
    <circle cx="12" cy="6" r="4" fill={Colors[fill]} />
  </svg>
)

export const BackArrow = ({ fill }: IIconFill) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.774 2.36679C18.1237 2.79424 18.0607 3.42426 17.6332 3.77399L7.57919 12L17.6332 20.2261C18.0607 20.5758 18.1237 21.2058 17.774 21.6333C17.4242 22.0607 16.7942 22.1237 16.3668 21.774L5.36676 12.774C5.13463 12.5841 5 12.3 5 12C5 11.7001 5.13463 11.416 5.36676 11.2261L16.3668 2.22607C16.7942 1.87635 17.4242 1.93935 17.774 2.36679Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const Close = ({ fill }: IIconFill) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const Check = ({ fill }: IIconFill) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.6937 4.77968C22.0915 5.16277 22.1034 5.79582 21.7203 6.19364L8.72035 19.6936C8.52318 19.8984 8.2482 20.0096 7.96414 19.9994C7.68007 19.9892 7.41377 19.8585 7.2318 19.6402L2.2318 13.6402C1.87824 13.2159 1.93556 12.5853 2.35984 12.2318C2.78412 11.8782 3.41468 11.9355 3.76825 12.3598L8.0538 17.5025L20.2797 4.80636C20.6628 4.40854 21.2958 4.39659 21.6937 4.77968Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const CheckBox = ({ fill }: IIconFill) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.684 0.770466C13.0869 1.1482 13.1073 1.78103 12.7296 2.18394L5.2296 10.1839C5.02747 10.3995 4.74034 10.5147 4.44526 10.4985C4.15018 10.4823 3.87737 10.3364 3.70006 10.1L0.700059 6.1C0.368688 5.65818 0.458231 5.03137 0.900059 4.7C1.34189 4.36863 1.96869 4.45818 2.30006 4.9L4.58529 7.94698L11.2705 0.816062C11.6483 0.41315 12.2811 0.392736 12.684 0.770466Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const Info = ({ fill }: IIconFill) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18.9683C11.4653 18.9683 11.0318 18.5348 11.0318 18L11.0318 9.00001C11.0318 8.46526 11.4653 8.03176 12 8.03176C12.5348 8.03176 12.9683 8.46526 12.9683 9.00001L12.9683 18C12.9683 18.5348 12.5348 18.9683 12 18.9683Z"
      fill={Colors[fill]}
    />
    <path
      d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const Error = ({ stroke }: IIconStroke) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 7.5L16.5 16.5"
      stroke={Colors[stroke]}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 7.5L7.5 16.5"
      stroke={Colors[stroke]}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Warning = ({ stroke }: IIconStroke) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6V15"
      stroke={Colors[stroke]}
      strokeWidth="1.9365"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z"
      fill="black"
      stroke={Colors[stroke]}
    />
  </svg>
)

export const Success = ({ stroke }: IIconStroke) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 8L8.5 17.5L5.5 13.5"
      stroke={Colors[stroke]}
      strokeWidth="1.9365"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Eassy = ({ fill }: IIconFill) => (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.0967 16.8034C33.1316 16.2059 34.573 16.3106 35.3737 17.6975C35.7741 18.391 36.147 19.9947 34.4911 20.9507L26.8989 25.3341C27.4256 25.1841 28.6758 25.2238 29.4766 26.6107C30.2773 27.9977 29.2931 29.4815 28.6032 29.8798C28.9483 29.6806 30.3801 29.7696 31.1808 31.1565C31.9815 32.5434 31.3464 33.8437 30.3074 34.4256C30.8341 34.2756 32.0843 34.3154 32.885 35.7023C33.6858 37.0892 33.0509 38.3714 32.016 38.9689L25.1166 42.9523C21.9933 44.4473 14.7139 45.6716 10.55 38.4596C9.56756 37.0235 7.52698 33.2401 9.90502 27.7988C9.90502 27.7988 13.7808 20.9583 14.4099 19.642C15.0391 18.3257 16.2092 15.7334 18.1139 16.483C20.0185 17.2326 19.6486 19.1412 19.2255 20.0018L16.2221 25.9686L32.0967 16.8034Z"
      fill={Colors[fill]}
    />
    <rect
      x="20"
      y="5.26978"
      width="2.20782"
      height="8.83127"
      transform="rotate(-7.01763 20 5.26978)"
      fill={Colors[fill]}
    />
    <rect
      x="26.9602"
      y="5.52539"
      width="2.20782"
      height="8.83127"
      transform="rotate(16.7903 26.9602 5.52539)"
      fill={Colors[fill]}
    />
    <rect
      x="33.8579"
      y="10.2375"
      width="2.20782"
      height="8.83127"
      transform="rotate(52.7189 33.8579 10.2375)"
      fill={Colors[fill]}
    />
  </svg>
)

export const Mail = ({ fill }: IIconFill) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 11L12.5767 17.4572C12.2389 17.7161 11.7893 17.7226 11.4453 17.4736L3 11.359V19.7002C3 20.9651 4.0125 22 5.1375 22H18.8625C20.1 22 21 20.9651 21 19.7002V11Z"
      fill={Colors[fill]}
    />
    <path
      d="M21 9.5L12.1067 16L3 9.5L11.3926 3.258C11.8182 2.914 12.4324 2.914 12.858 3.258L21 9.5Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const Github = ({ fill }: IIconFill) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9266 0C10.7156 0 0 11.0144 0 24.5938C0 35.4573 6.89908 44.6611 16.2936 47.9805C17.4679 48.1314 17.9083 47.377 17.9083 46.7734C17.9083 46.1699 17.9083 44.6611 17.9083 42.5487C11.3028 44.0575 9.83486 39.2293 9.83486 39.2293C8.80734 36.3626 7.19266 35.6082 7.19266 35.6082C4.99083 34.0993 7.33945 34.0993 7.33945 34.0993C9.68807 34.2502 11.0092 36.6643 11.0092 36.6643C13.211 40.4364 16.5872 39.3802 17.9083 38.7767C18.055 37.117 18.789 36.0608 19.3761 35.4573C14.0917 34.8537 8.51376 32.7414 8.51376 23.2358C8.51376 20.52 9.3945 18.4076 11.0092 16.597C10.8624 16.1444 9.98165 13.5794 11.3028 10.26C11.3028 10.26 13.3578 9.65645 17.9083 12.825C19.8165 12.2214 21.8716 12.0706 23.9266 12.0706C25.9816 12.0706 28.0367 12.3723 29.945 12.825C34.4954 9.65645 36.5505 10.26 36.5505 10.26C37.8716 13.5794 36.9908 16.1444 36.844 16.7479C38.3119 18.4076 39.3394 20.6708 39.3394 23.3867C39.3394 32.8923 33.7615 34.8537 28.4771 35.4573C29.3578 36.2117 30.0917 37.7205 30.0917 39.9837C30.0917 43.3031 30.0917 45.8681 30.0917 46.7734C30.0917 47.377 30.5321 48.1314 31.7064 47.9805C41.2477 44.6611 48 35.4573 48 24.5938C47.8532 11.0144 37.1376 0 23.9266 0Z"
      fill={Colors[fill]}
    />
  </svg>
)

export const Projects = ({ fill }: IIconFill) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 1.71423C11.7429 1.71423 1.71429 11.7428 1.71429 23.9999C1.71429 36.2571 11.7429 46.2857 24 46.2857C36.2572 46.2857 46.2857 36.2571 46.2857 23.9999C46.2857 11.7428 36.2572 1.71423 24 1.71423Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.9366 13.9365C38.9366 15.006 38.0696 15.873 37 15.873H11C9.93054 15.873 9.06354 15.006 9.06354 13.9365C9.06354 12.867 9.93054 12 11 12H37C38.0696 12 38.9366 12.867 38.9366 13.9365Z"
      fill={Colors[fill]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 14C16 11.7909 17.7909 10 20 10C22.2092 10 24 11.7909 24 14C24 16.2091 22.2092 18 20 18C17.7909 18 16 16.2091 16 14Z"
      fill={Colors[fill]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 14C18 12.8954 18.8954 12 20 12C21.1046 12 22 12.8954 22 14C22 15.1046 21.1046 16 20 16C18.8954 16 18 15.1046 18 14Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.9366 23.9364C38.9366 25.006 38.0696 25.873 37 25.873H11C9.93054 25.873 9.06354 25.006 9.06354 23.9366C9.06354 22.867 9.93054 22 11 22H37C38.0696 22 38.9366 22.867 38.9366 23.9364Z"
      fill={Colors[fill]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 24C26 21.7908 27.7908 20 30 20C32.2092 20 34 21.7908 34 24C34 26.2092 32.2092 28 30 28C27.7908 28 26 26.2092 26 24Z"
      fill={Colors[fill]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 24C28 22.8954 28.8954 22 30 22C31.1046 22 32 22.8954 32 24C32 25.1046 31.1046 26 30 26C28.8954 26 28 25.1046 28 24Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.9366 33.9364C38.9366 35.006 38.0696 35.873 37 35.873H11C9.93054 35.873 9.06354 35.006 9.06354 33.9366C9.06354 32.867 9.93054 32 11 32H37C38.0696 32 38.9366 32.867 38.9366 33.9364Z"
      fill={Colors[fill]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 34C16 31.7908 17.7909 30 20 30C22.2092 30 24 31.7908 24 34C24 36.2092 22.2092 38 20 38C17.7909 38 16 36.2092 16 34Z"
      fill={Colors[fill]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 34C18 32.8954 18.8954 32 20 32C21.1046 32 22 32.8954 22 34C22 35.1046 21.1046 36 20 36C18.8954 36 18 35.1046 18 34Z"
      fill="white"
    />
  </svg>
)

export const Users = ({ fill }: IIconFill) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 0C10.8 0 0 10.8 0 24C0 37.2 10.8 48 24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 0 24 0Z"
      fill={Colors[fill]}
    />
    <path
      d="M12.4887 36.5836C11.0369 35.2638 9.99985 33.2842 9.99985 31.0845V28.8849V25.3655C9.99985 23.3858 11.4517 21.8461 13.3184 21.8461H34.6813C36.548 21.8461 37.9998 23.3858 37.9998 25.3655V29.1049V31.3045C37.9998 33.2841 37.1702 35.2638 35.7184 36.8036C29.0813 42.7426 19.3332 42.7426 12.4887 36.5836Z"
      fill="#DFE6F7"
    />
    <circle cx="23.4614" cy="13.7692" r="7" fill="#DFE6F7" />
  </svg>
)
