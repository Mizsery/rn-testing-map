import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { FIX_ME } from '@/constant';

interface AddButtonProps {
  addressTitle: string;
  handleAddAddress: () => void;
}

function AddButton({ addressTitle, handleAddAddress }: AddButtonProps) {
  return (
    <TouchableOpacity
      onPress={handleAddAddress}
      className={`p-4 bg-emerald-500 rounded focus:outline-none ${addressTitle === FIX_ME ? 'opacity-50' : 'opacity-100'}`}
      activeOpacity={0.7}
      disabled={addressTitle === FIX_ME}
    >
      <Text className='text-black text-center text-base'>Добавить адрес</Text>
    </TouchableOpacity>
  );
}

export default AddButton;
