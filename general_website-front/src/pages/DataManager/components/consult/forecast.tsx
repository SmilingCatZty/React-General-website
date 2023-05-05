import React, { useEffect, useState } from 'react'
import { Form, Input, DatePicker, Button } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import './styles/forecast.scss'
import locale from 'antd/es/date-picker/locale/en_US';
import TextArea from 'antd/es/input/TextArea';
import api from '@/service/api/consult.api'
import { ForecastInfoModal } from '@/modules/data-manager/consult'
import dayjs from 'dayjs';


const initialForm: ForecastInfoModal = {
  _id: '' as string,
  title: '',
  content: '',
  img: '',
  startTime: new Date().getTime()
}

const ConsultActivityForecast: React.FC = () => {
  const [form] = Form.useForm()
  let [formList, setFormList] = useState<ForecastInfoModal>(initialForm) // 表单内容

  // 更新操作
  const update = async () => {
    const { _id, title, content, img, startTime } = { ...formList }
    const params = {
      title,
      content,
      img,
      startTime: dayjs(startTime).valueOf()
    }
    try {
      const res = await api.updateActivityForecast(_id as string, params)
      if (res && res.status === 200) {
        formList = { ...res.data.info }
        formList.startTime = dayjs(formList.startTime)
        setFormList(formList)
        form.setFieldsValue(formList)
        getList()
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 监听标题改变
  const handleTitleChange = (event: any) => {
    formList.title = event.target.value
    setFormList(formList)
  }

  // 监听图片改变
  const handleImgChange = (event: any) => {
    formList.img = event.target.value
    setFormList(formList)
  }

  // 监听内容改变
  const contentChange = (v: any) => {
    formList.content = v.target.value
    setFormList(formList)
  }

  // 日期处理
  const dateHandle = (value: any, dateString: any,) => {
    formList.startTime = dateString
    setFormList(formList)
  }

  const dateConfirm = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', formList);
  }

  // 获取预告信息
  const getList = async () => {
    try {
      const res: any = await api.getActivityForecast()
      if (res && res.status === 200) {
        formList = { ...res.data.info }
        formList.startTime = dayjs(formList.startTime)
        setFormList(formList)
        form.setFieldsValue(formList)
      }

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    return () => {
      getList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='manager-consult-forecast'>
      <Form
        form={form}
        labelCol={{ span: 0, offset: 0 }}
        wrapperCol={{ span: 10 }}
        style={{ minWidth: 600 }}
        // initialValues={{ remember: true }}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入咨询标题' }]}
          initialValue={formList.title}
        >
          <Input onChange={handleTitleChange} />
        </Form.Item>

        <Form.Item
          label="内容"
          name="content"
          initialValue={formList.content}
          rules={[{ required: true, message: '请填写咨询内容' }]}
        >
          <TextArea rows={4} maxLength={200} showCount onChange={contentChange} />
        </Form.Item>
        <Form.Item
          label="配图"
          name="img"
          rules={[{ required: true, message: '请输入配图' }]}
          initialValue={formList.img}
        >
          <Input onChange={handleImgChange} />
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
          name="startTime"
          rules={[{ required: true, message: '请选择生效时间' }]}
          initialValue={dayjs(formList.startTime)}
        >
          <DatePicker showTime onChange={dateHandle} onOk={dateConfirm} locale={locale} value={dayjs()} />
        </Form.Item>
      </Form>
      <div className='forecast-update'>
        <Button onClick={update}>更新</Button>
      </div>
    </div>
  )
}

export default ConsultActivityForecast