import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NoProfile } from '../assets';
import { LiaEditSolid } from 'react-icons/lia';
import { UpdateProfile } from '../redux/userSlice';
import { BsBriefcase, BsFacebook, BsPersonFillAdd } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import moment from 'moment';

const ProfileCard = ({ user }) => {
  const { user: data, edit } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <div className='w-full bg-primary flex flex-col items-center px-6 py-4 shadow-sm rounded-xl'>
        <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645]'>
          <Link to={"/profile/" + user?._id}
            className='flex gap-2'
          >
            <img src={user?.profileUrl ?? NoProfile} alt={user?.email} className='w-14 h-14 object-cover rounded-full' />
            <div className='flex flex-col justify-center'>
              <p className='text-lg font-medium text-ascent-1'>
                {user?.firstName} {user?.lastName}
              </p>
              <span className='text-ascent-2'>{user?.profession ?? "No Profession"}</span>
            </div>
          </Link>
          <div>
            {user?._id === data._id ? (
              <LiaEditSolid
                size={22}
                className='text-blue cursor-pointer'
                onClick={() => dispatch(UpdateProfile(true))}
              />
            ) : (
              <button
                className='bg-[#0444a430] text-sm text-white p-1 rounded'
                onClick={() => { }}
              >
                <BsPersonFillAdd size={20} className='text-[#0f52b6]' />
              </button>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <div className='flex items-center gap-2 text-ascent-2'>
            <CiLocationOn className='text-xl text-ascent-1' />
            <span>{user?.location ?? 'Add Location'}</span>
          </div>
          <div className='flex items-center gap-2 text-ascent-2'>
            <BsBriefcase className='text-lg text-ascent-1' />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <p className='text-sl test-ascent-1 font-semibold'>
            {user?.friends?.length} Friends
          </p>
          <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Who viewed your profile</span>
            <span className='text-ascent-1 text-lg'></span>
          </div>
          <span className='text-base text-blue'>
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>
          <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Joined</span>
            <span className='text-ascent-2 text-base'>
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 py-4 pb-6'>
          <p className='text-ascent-1 font-semibold text-lg'>Social Profile</p>
          <div className='text-ascent-2 flex gap-2 items-center'>
            <BsInstagram className='text-xl text-ascent-1' />
            <span>Instagram</span>
          </div>
          <div className='text-ascent-2 flex gap-2 items-center'>
            <FaTwitterSquare className='text-xl text-ascent-1' />
            <span>Twitter</span>
          </div>
          <div className='text-ascent-2 flex gap-2 items-center'>
            <BsFacebook className='text-xl text-ascent-1' />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;