/**
 * 文件上传
 */
import service from '@/libs/service';

export function upload({ name = 'image', headers, file, data, onProgress, withCredentials }) {
  if (!['image', 'file', 'video', 'audio'].includes(name)) {
    return Promise.reject({ msg: '类型错误!' });
  }

  const onUploadProgress = ({ total, loaded }) =>
    onProgress && onProgress({ percent: +Math.round((loaded / total) * 100).toFixed(2) }, file);

  return service.request({
    url: `upload/${name}`,
    headers: headers || { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: getFormData(file, data),
    withCredentials,
    onUploadProgress,
  });
}

const getFormData = (file, data) => {
  const formData = new FormData();
  if (data) Object.keys(data).map(key => formData.append(key, data[key]));
  formData.append('file', file);
  return formData;
};
