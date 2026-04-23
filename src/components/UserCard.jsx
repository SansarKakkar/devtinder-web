import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { removeUserFeed } from '../utils/feedSlice';
import { useDispatch } from 'react-redux';
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
    const { _id,firstName, lastName, about, photoUrl, age, gender } = user;
const handleSendRequest = async (status,userId) => {
  try{
    const res=await axios.post(BASE_URL+"/Request/send/"+status+"/"+userId,{},{withCredentials:true});
    dispatch(removeUserFeed(userId));
  }
  catch(err){

  }
}
  return (
    <div className="card w-full max-w-sm bg-base-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="Photo"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{ firstName + " " + lastName }</h2>
    {age && gender && <p>{ age + " , " + gender }</p>}
    <p>{ about }</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary"
      onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
  );
}

export default UserCard