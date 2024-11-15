import React, { useEffect, useState } from 'react'
React
import "./List.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

const List = ({url}) => {


const [list,setList]=useState([])

const fetchList=async ()=>{
  const response=await axios.get(`${url}/api/food/list`)
  console.log(response.data)
  if(response.data.success){
    setList(response.data.data)
  }
  else{
    toast.error("Error")
  }
}
useEffect(()=>{
  fetchList()
},[])

const removeFood=async(foodID)=>{
const response=await axios.post(`${url}/api/food/remove`,{id:foodID})
await fetchList()
if(response.data.success){
  toast.success(response.data.message)
}else{
  toast.error("Error")
}
}

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
            return (
              <div key={index} className='list-table-format'>
                  <img src={`${url}/images/${item.image}`}/>
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                  <p className='cursor' onClick={()=>removeFood(item._id)} >X</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

List.propTypes = {
  url: PropTypes.string.isRequired
}
export default List
