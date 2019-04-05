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
