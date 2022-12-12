import React, { useEffect, useState } from 'react'

export default function LIst() {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
         (async function() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json()
                setList(data)
                setLoading(false)
            } catch (error) {
                setLoading(true)
                console.log(error)
            }
        })()
    }, [])


    return (
        <div>
           { loading ? <div style={{fontSize:'40px'}}>Loading Data</div> :
           
           <div> {list.map((ele) => {
                return <ul key={ele.id}><li >{ele.name}</li></ul>
            })} </div>
            
            }
        </div>
    )
}
