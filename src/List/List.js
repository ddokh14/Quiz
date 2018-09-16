import React from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

const List = ({list}) => {

    return(
        <div>
            <ul>
                { 
                    list.map((item,i) => 
                        <ListItem 
                            key ={i}
                            name={item}
                        />
                    ) 
                }
            </ul>
        </div>
    )
}

export default List;