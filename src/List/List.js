import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

const List = ({list}) => {

    return(
        <div>
            <ul>
                { 
                    list.map(item => 
                        <ListItem 
                            key ={item.id}
                            name={item.name}
                        />
                    ) 
                }
            </ul>
        </div>
    )
}

export default List;