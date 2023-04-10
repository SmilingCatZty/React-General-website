import React from 'react'
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ConsultActivityForecast = () => {
  const [form] = Form.useForm()
  const handleChange = () => {

  }

  const contentChange = () => {

  }

  return (
    <div className='manager-consult-forecast'>
      <Form
        // ref={formRef }
        form={form}
        labelCol={{ span: 0, offset: 0 }}
        wrapperCol={{ span: 8 }}
        style={{ minWidth: 1000 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入咨询标题' }]}
          initialValue={''}
        >
          <Input onChange={handleChange} />
        </Form.Item>

        {/* <Form.Item
          label="类型"
          name="type"
          rules={[{ required: true, message: '请选择咨询类型' }]}
          initialValue={''}
        >
          <Select
            placeholder="请选择咨询消息类型"
            onChange={selectHandler}
            allowClear
            // defaultValue={formList?.type}
            options={[
              { value: 'news', label: '新闻' },
              { value: 'notice', label: '通知' },
              { value: 'active', label: '活动' },
              { value: 'other', label: '其他' }
            ]}
          >
          </Select>
        </Form.Item> */}
        <Form.Item
          label="内容"
          name="content"
          initialValue={''}
          rules={[{ required: true, message: '请填写咨询内容' }]}
        >
          <TextArea rows={4} maxLength={200} showCount onChange={contentChange} />
        </Form.Item>
        {/* <Form.Item
            label="配图"
            name="imgConfig"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <ImgUpload />
          </Form.Item> */}
        
        <Form.Item
          label="生效时间"
          name="title"
          rules={[{ required: true, message: '请选择生效时间' }]}
          initialValue={''}
        >
          <Input onChange={handleChange} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default ConsultActivityForecast