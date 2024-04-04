import React, { useState, useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Posts() {
  const [users, setUsers] = useState([]);
  const [postImages, setPostImages] = useState([]);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.results); // Log data to inspect its structure
      setUsers(data.results);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const fetchPostImages = async () => {
    try {
      const response = await fetch('https://random.imagecdn.app/300/400');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.blob();
      return URL.createObjectURL(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await Promise.all(users.map(async () => await fetchPostImages()));
      setPostImages(images);
    };

    if (users.length > 0) {
      fetchImages();
    }
  }, [users]);

  return (
    <div className='flex px-3 py-4 overflow-y-auto h-full sm:w-[580px] sm:relative'>
      <menu>
        {users.map((user, index) => (
          <div key={index}>
            <div className="flex text-white gap-2 sm:w-full">
              <div className="left flex flex-col gap-3">
                <div className="profile rounded-full h-10 w-10">
                  <img src={user.picture.large} alt="" className="rounded-full" />
                </div>
                <div className="line h-[380px] w-[2px] rounded bg-neutral-700 ml-5"></div>
                <div className="smallProfile h-6 w-6 ml-2">
                  <img src={user.picture.thumbnail} alt="" className="rounded-full" />
                </div>
              </div>
              <div className="right flex flex-col gap-3">
                <div className="upper flex">
                  <div className="username">
                    <b>{user.login.username}</b>
                    <p className='text-sm'>Lorem ipsum dolor, elit. Laborum, dolores!</p>
                  </div>
                  <MoreHorizIcon className='text-white sm:absolute sm:right-0 cursor-pointer' />
                </div>
                <div className="postImage rounded-md flex flex-col gap-2 h-full">
                  <img src={postImages[index]} alt="" className='rounded-md' />
                  <div className="react flex gap-3 ">
                    <FavoriteBorderOutlinedIcon className='text-white' />
                    <ModeCommentOutlinedIcon className='text-white' />
                    <RepeatOutlinedIcon className='text-white' />
                    <SendOutlinedIcon className='text-white transform -rotate-45 -z-10' />
                  </div>
                  <div className="reply flex text-neutral-700 gap-3">
                    <p>46 Replies</p>
                    <p>.</p>
                    <p>2,1024 Likes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="line w-full sm:w-[556px] h-[0.5px] my-3 bg-neutral-700"></div>
          </div>
        ))}
      </menu>
    </div>
  );
}
