import React, { useEffect, useState } from 'react'

const DataSort = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)    

    const styling = {
        listStyle : "none"
    }    

    async function fetchUsers(){       
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/users`);        
            const data = await response.json();
            if(data && data.users && data.users.length > 0){
                setLoading(false)
                setUsers(data.users)
            }                
        }
        catch(error){
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    
    function ascend(){        
        let cpy = [...users]        
        setUsers(cpy.sort((a,b) => a.firstName > b.firstName ? 1 : -1))
    }

    function descend(){        
        let cpy = [...users]        
        setUsers(cpy.sort((a,b) => a.firstName > b.firstName ? -1 : 1))
    }

  return (
    <div>
        <h1>Sort the data</h1>
        <button onClick={ascend}>Sort Ascendingly</button>
        <button onClick={descend}>Sort descendingly</button>
        {loading ? <h1>Loading</h1> : <ul style={styling}>{users.map((user, index) => <li key={index}>{user.firstName}</li>)}</ul>}
    </div>
  )
}

export default DataSort