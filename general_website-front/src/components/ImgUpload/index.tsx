import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';

interface ImgUploadProps {
  type?: 'normal' | 'crop' // 上传类型
  getImgList: (v: string[]) => void // 获取裁剪后的图片列表
}

const ImgUpload: React.FC<ImgUploadProps> = (props) => {
  const { type, getImgList } = props
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  let [imgList, setImgList] = useState<string[]>([])

  // 监听图片上传的改变
  const onChange: UploadProps['onChange'] = ({ file, fileList: newFileList }) => {
    setFileList(newFileList);
    if (file.status === 'done') {
      const { response } = file
      imgList.push(response.filename)
      setImgList(() => imgList)
    }
    if (file.status === 'removed') {
      const { response } = file
      imgList = imgList.filter((item) => {
        return item !== response.filename
      })
      setImgList(() => imgList)
    }
    if (['done', 'removed'].includes(file.status as any)) {
      getImgList(imgList)
    }
  };

  // 点击文件链接或预览图标时的回调
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* 图片裁剪上传 */}
      <div style={{ width: '100%', height: '100%', display: type === 'crop' ? 'block' : 'none' }}>
        <ImgCrop
          rotationSlider
        >
          <Upload
            action="http://127.0.0.1:5000/smilling-cat/common/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={(info) => onChange(info)}
            onPreview={onPreview}
          >
            {fileList.length < 5 && '+ Upload'}
          </Upload>
        </ImgCrop>
      </div>
      {/* 正常上传 */}
      <div style={{ width: '100%', height: '100%', display: type === 'normal' ? 'block' : 'none' }}>
        <Upload
          action="http://127.0.0.1:5000/smilling-cat/common/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={(info) => onChange(info)}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload>
      </div>

    </div>
  );
};
ImgUpload.defaultProps = {
  type: 'normal'
}

export default ImgUpload;