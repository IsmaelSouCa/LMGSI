//import React from 'react'

interface IHeaderProps {
    navidad?: boolean;
}

export default function Header(props: IHeaderProps) {

    let navidad = 'red';
    
    return (
        <>
        <header
            style={{
                backgroundColor: props.navidad? navidad: 'black'
            }}
        >
          <h1>MMStore
            </h1>
        </header>
        </>
    )
}
