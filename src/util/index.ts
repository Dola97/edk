import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
export const pickImage = (setImage: any, dispatch: any) => {
  ImagePicker.openPicker({
    width: 200,
    height: 200,
    cropping: true,
    compressImageMaxHeight: 400,
    compressImageMaxWidth: 400,
    cropperCircleOverlay: true,
    multiple: false,
  })
    .then(response => {
      setImage({
        uri: response?.path,
        type: response?.mime,
        name: response?.filename,
      });
      let file = {
        uri: response?.path,
        type: response?.mime,
        name: 'image.jpg',
      };
      const formData: any = new FormData();
      formData.append('file', file);
      formData.append('path', 'passngers/avatars');
      //   dispatch(uploadImage(formData));
    })
    .catch(Error => {
      Toast.show({
        type: 'info',
        text1: Error?.message,
      });
    });
};
