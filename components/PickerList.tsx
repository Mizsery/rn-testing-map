import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

interface PickerListProps {
  data: Address[];

  handleFindAddress: (item: Address) => void;
}

function PickerList({ data, handleFindAddress }: PickerListProps) {
  const [selectedValue, setSelectedValue] = useState<Address>();

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => {
        setSelectedValue(itemValue);
        handleFindAddress(itemValue);
      }}
    >
      {data.map((item) => (
        <Picker.Item key={item.title} label={item.title} value={item} />
      ))}
    </Picker>
  );
}

export default PickerList;
