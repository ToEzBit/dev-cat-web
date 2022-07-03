import axios from '../config/axios';

export const userEditProfile = async (input) => {
  await axios.patch('/user/profile', input);
};

export const userUpdateProfileImage = async (input) => {
  const formData = new FormData();
  formData.append('image', input);
  await axios.patch('/user/profile/image', formData);
};

export const devEditProfile = async (input) => {
  await axios.patch('/dev/profile', input);
};

export const devUpdateProfileImage = async (input) => {
  const formData = new FormData();
  formData.append('image', input);
  await axios.patch('/dev/profile/image', formData);
};
