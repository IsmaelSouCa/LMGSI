//import React from 'react'

interface IHeaderProps {
    username: string;
    favColor?: string;
}

export default function Header(props: IHeaderProps) {

    
    
    return (
        <>
        <header>
          <h1>Hola,
            <span 
                style={{
                    color: props.favColor || 'green'
                }}
            >{props.username?props.username: "Iniciar sesión"}</span>
            </h1>
        </header>
        </>
    )
}
