import React from 'react'

export default function PencilCircleIcon(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    viewBox="0 0 100 100"
    className="icon--pencil"
    {...props}
  >
    <circle
      cx={50.21}
      cy={50}
      r={50}
      style={{
        opacity: 0.25,
      }}
    />
    <path d="M100.21 50c0 27.61-22.39 50-50 50s-50-22.39-50-50 22.39-50 50-50 50 22.39 50 50zm-50-44.97C25.38 5.03 5.25 25.16 5.25 50s20.13 44.97 44.97 44.97S95.18 74.84 95.18 50 75.05 5.03 50.21 5.03z" />
    <path d="m30.343 61.062 28.949-28.949 8.803 8.803-28.949 28.95zM35.9 73.12l-12.76 4.85-.89-.9 4.85-12.76zM77.13 31.89l-5.77 5.77-8.8-8.8 5.77-5.77c1.4-1.4 3.68-1.4 5.08 0l3.73 3.73c1.39 1.39 1.39 3.67-.01 5.07z" />
  </svg>
  )
}
