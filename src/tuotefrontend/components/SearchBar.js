import React, {useState, useEffect, useContext} from 'react'
import CheckBox from './CheckBox'

const SearchBar = (props) => {
    const [isChecked, setChecked] = useState(props.showAll)

    const cbChanged = () => {
        setChecked(!isChecked)

    }

    useEffect(() => {
        props.showAllChanged(isChecked)
    })
    const stChanged = (e) => {
        props.searchTextChanged(e.target.value)

    }

    return (
        <div className='laatikko'>
            <input type='search' placeholder='Search..' onChange={(e) => stChanged(e)} /><br />
            <CheckBox label='Only show products in stock'
                cbChanged={cbChanged} />
        </div>
    )
}

export default SearchBar