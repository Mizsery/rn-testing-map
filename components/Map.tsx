import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

import AddButton from '@/components/AddButton';
import PickerList from '@/components/PickerList';
import { MAP_URL } from '@/constant';

function MapPage() {
  const webRef = useRef<WebView>(null);
  const [mapUrl, setMapUrl] = useState(MAP_URL);
  const [address, setAddress] = useState<Address>({
    title: '',
    url: ''
  });
  const [data, setData] = useState<Address[]>([]);

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    setAddress({
      title: navState.title,
      url: navState.url
    });
  };

  const handleFindAddress = (item: Address) => {
    setMapUrl(item.url);
  };

  const handleAddAddress = () => {
    const normalizeString = address.title.replace(' — 2ГИС', '');

    if (data.find((item) => item.title === normalizeString)) {
      showMessage({
        message: 'Адрес уже добавлен',
        type: 'danger'
      });
    } else {
      setData([
        {
          title: normalizeString,
          url: address.url
        },
        ...data
      ]);
      showMessage({
        message: 'Адрес успешно добавлен',
        type: 'success'
      });
    }
  };

  return (
    <>
      <StatusBar style='light' />
      <FlashMessage position='top' />
      <View className='flex-1'>
        <WebView
          className='flex-1 w-full h-full'
          ref={webRef}
          source={{
            uri: mapUrl
          }}
          onNavigationStateChange={handleNavigationStateChange}
        />

        <View className='items-center w-full p-4 gap-2'>
          <View className='w-full text-gray-200 bg-white rounded shadow-xl focus:outline-none'>
            {data.length > 0 && data ? (
              <PickerList data={data} handleFindAddress={handleFindAddress} />
            ) : (
              <Text className='p-4 text-base text-gray-400'>Пока нет адресов</Text>
            )}
          </View>

          <View className='w-full text-gray-200 bg-white rounded shadow-xl focus:outline-none'>
            <AddButton addressTitle={address.title} handleAddAddress={handleAddAddress} />
          </View>
        </View>
      </View>
    </>
  );
}

export default MapPage;
