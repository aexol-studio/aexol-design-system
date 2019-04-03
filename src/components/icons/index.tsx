import * as React from 'react'

export const Profile = ({fill}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.42222 19.363C4.59259 18.614 4 17.4907 4 16.2425V14.9943V12.9971C4 11.8737 4.82963 11 5.89629 11H18.1037C19.1704 11 20 11.8737 20 12.9971V15.1191V16.3673C20 17.4907 19.5259 18.614 18.6963 19.4878C14.9037 22.8579 9.33333 22.8579 5.42222 19.363Z" fill={fill}/>
    <circle cx="12" cy="6" r="4" fill={fill}/>
  </svg>
)

export const BackArrow = ({fill}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.774 2.36679C18.1237 2.79424 18.0607 3.42426 17.6332 3.77399L7.57919 12L17.6332 20.2261C18.0607 20.5758 18.1237 21.2058 17.774 21.6333C17.4242 22.0607 16.7942 22.1237 16.3668 21.774L5.36676 12.774C5.13463 12.5841 5 12.3 5 12C5 11.7001 5.13463 11.416 5.36676 11.2261L16.3668 2.22607C16.7942 1.87635 17.4242 1.93935 17.774 2.36679Z" fill={fill}/>
  </svg>
)

export const Close = ({fill}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z" fill={fill}/>
  </svg>
)

export const Check = ({fill}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.6937 4.77968C22.0915 5.16277 22.1034 5.79582 21.7203 6.19364L8.72035 19.6936C8.52318 19.8984 8.2482 20.0096 7.96414 19.9994C7.68007 19.9892 7.41377 19.8585 7.2318 19.6402L2.2318 13.6402C1.87824 13.2159 1.93556 12.5853 2.35984 12.2318C2.78412 11.8782 3.41468 11.9355 3.76825 12.3598L8.0538 17.5025L20.2797 4.80636C20.6628 4.40854 21.2958 4.39659 21.6937 4.77968Z" fill={fill}/>
  </svg>
)

export const Info = ({fill}: any)  => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 18.9683C11.4653 18.9683 11.0318 18.5348 11.0318 18L11.0318 9.00001C11.0318 8.46526 11.4653 8.03176 12 8.03176C12.5348 8.03176 12.9683 8.46526 12.9683 9.00001L12.9683 18C12.9683 18.5348 12.5348 18.9683 12 18.9683Z" fill={fill}/>
    <path d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5Z" fill={fill}/>
  </svg>
)

export const Error = ({stroke}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 7.5L16.5 16.5" stroke={stroke} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 7.5L7.5 16.5" stroke={stroke} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const Warning = ({stroke}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6V15" stroke={stroke} strokeWidth="1.9365" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z" fill="black" stroke={stroke}/>
  </svg>
)

export const Success = ({stroke}: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8L8.5 17.5L5.5 13.5" stroke={stroke} strokeWidth="1.9365" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ArrowDown1 = () => (
  <svg width="51" height="23" viewBox="0 0 51 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5 21L0.818277 -2.74195e-06L50.1817 1.57354e-06L25.5 21Z" fill="#C4C4C4"/>
  </svg>
)

export const ArrowDown2 = () => (
  <svg width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M21.5 21L0.282381 -2.08941e-06L42.7176 1.62039e-06L21.5 21Z" fill="#C4C4C4"/>
  </svg>
)

export const ArrowDown3 = () => (
  <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 21L0.612505 -1.27375e-06L34.3875 1.67896e-06L17.5 21Z" fill="#C4C4C4" fillOpacity="0.4"/>
  </svg>
)
