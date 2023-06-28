import { Input, Modal, message } from 'antd'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { blogStyle, blogTitleStyle, blogContentTextStyle, blogContentStyle, blogContentImgStyle } from '../styles/blogStyle'
import TextArea from 'antd/es/input/TextArea'
import ImgUpload from '@/components/imgUpload/index'
import { store } from '@/redux'
import dayjs from 'dayjs'
import api from '@/service/api/community'

interface BlogProps {
  ref: any
}

interface BLogEmits {
  showModal: () => void,
  handleCancel: () => void
}

const defaultBlogValue = {
  blog_title: '',
  blog_user_id: null,
  blog_content: '',
  blog_img: [] as string[],
  blog_create_time: 0
}

const Blog: React.FC<BlogProps> = forwardRef<BLogEmits, BlogProps>((props: BlogProps, ref) => {
  useImperativeHandle(ref, () => ({
    showModal,
    handleCancel
  }))

  const { global, user } = store.getState()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false) // 打开发博客弹窗
  // 创建博客所需参数
  let [createBlogInfo] = useState(defaultBlogValue)

  // 打开弹窗
  const showModal = () => {
    setIsModalOpen(() => true)
  }

  // 关闭弹窗
  const handleCancel = () => {
    setIsModalOpen(() => false)
    createBlogInfo = defaultBlogValue
  }

  // 发日志
  const sendBlog = async () => {
    createBlogInfo.blog_create_time = dayjs().valueOf()
    if (global.loginStatus) {
      try {
        const res = await api.sendBlog(createBlogInfo)
        const { status } = res
        if (status === 201) {
          message.info('发布成功')
        }
      } catch (error) {
        console.error('blog', error);
      }
    }
  }

  // title改变
  const changeTitleHandler = (e: any) => {
    const { value: inputValue } = e.target
    createBlogInfo.blog_title = inputValue
  }

  // 内容改变
  const changeContentHandler = (e: any) => {
    const { value: inputValue } = e.target
    createBlogInfo.blog_content = inputValue
  }

  // 获取上传成功后的图片
  const getImgList = (imgList: string[]) => {
    createBlogInfo.blog_img = imgList
  }

  useEffect(() => {
    createBlogInfo.blog_user_id = user.userInfo.account_id
  }, [createBlogInfo, user.userInfo.account_id])



  return (
    <div className='blog'>
      <Modal title={'放飞心情,分享新鲜事'}
        className='blog-maodal'
        open={isModalOpen}
        width={800}
        bodyStyle={blogStyle}
        okText="发布"
        onCancel={() => handleCancel()}
        onOk={() => sendBlog()}
      >
        <div className='blog-title' style={blogTitleStyle}>
          <Input placeholder='请输入标题' bordered={false} size='large' style={{ fontSize: 18 }} onChange={(e) => changeTitleHandler(e)}></Input>
          {/* <input type="text" style={{ height: '100%', width: '100%', fontSize: 20 }} onChange={(e) => changeHandler(e)} /> */}
        </div>
        <div className='blog-content' style={blogContentStyle}>
          <div className='content-text' style={blogContentTextStyle}>
            <TextArea
              showCount={false}
              maxLength={400}
              bordered={false}
              style={{ fontSize: 18, height: '100%' }}
              onChange={(e) => changeContentHandler(e)}
              placeholder="分享开心的事叭～～～"
            />
          </div>
          <div className='content-img' style={blogContentImgStyle}>
            {/* <div> */}
            <ImgUpload getImgList={(imgList) => getImgList(imgList)} type='crop' />
            {/* </div> */}
          </div>
        </div>
      </Modal>
    </div>
  )
})

export default Blog