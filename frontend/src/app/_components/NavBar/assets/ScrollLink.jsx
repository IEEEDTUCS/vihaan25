import React from 'react'

const ScrollLink = ({name}) => {
  return (
    <div
    className="hidden md:block cursor-pointer text-lg md:text-sm"
    style={{
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      color: "#a69188",
      //fontSize: 12,
      fontFamily: "Orbitron",
      fontWeight: "400",
      letterSpacing: 2.4,
      wordWrap: "break-word",
    }}
  >
    {name}
  </div>
  )
}

export default ScrollLink
