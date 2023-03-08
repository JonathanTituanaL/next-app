import React from 'react'

type darkLayoutProps ={
    children:JSX.Element | JSX.Element[]
}

const DarkLayout = ({children}:darkLayoutProps) => {
  return (
    <div style={{
        backgroundColor:'rgba(255, 0, 0, 0.2)',
        borderRadius:'5px',
        padding:'10px'
    }}><h3>DarkLayout</h3>
    <>
        {children}
    </>
    </div>
  )
}

export default DarkLayout