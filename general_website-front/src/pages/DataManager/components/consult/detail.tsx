import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Form, Input, Select, Modal } from 'antd';
// import ImgUpload from '@/components/ImgUpload/index'
import './styles/detail.scss'
import TextArea from 'antd/es/input/TextArea';
import { ConsultInfoModel } from '@/modules/data-manager/consult'
import api from '@/service/api/consult.api'
import dayjs from 'dayjs';


interface ConsultDetailProps {
  curStatus: string,
  ref?: any,
  detailInfo: ConsultInfoModel
  updateList: () => void
}

interface ModalFuncType {
  showModal: () => void
  handleCancel: () => void
}


const ConsultDetail: React.FC<ConsultDetailProps> = forwardRef<ModalFuncType, ConsultDetailProps>((props, ref) => {
  const { curStatus, detailInfo, updateList } = { ...props }
  const [form] = Form.useForm()

  useImperativeHandle(ref, () => ({
    showModal,
    handleCancel
  }))

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formList, setFormList] = useState(detailInfo)
  const [detailStatus, setDetailStatus] = useState(curStatus)

  const selectHandler = (v: any) => {
    formList.type = v
    setFormList(formList)
  }

  const contentChange = (v: any) => {
    formList.content = v.target.value
    setFormList(formList)
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const paramsHandler = (pl: any) => {
    const params: any = {}
    Object.keys(pl).forEach((item: any) => {
      console.log(pl[item]);
      if (pl[item] !== '' && pl[item] !== undefined) {
        console.log(item);
        params[item] = pl[item]
      }
    })
    return params
  }

  const handleOk = async (status: string) => {
    const p = paramsHandler(formList)
    console.log(p);
    try {
      const params = formList
      if (status === 'add') {
        const date = dayjs().unix()
        params.createTime = date
        const res = await api.addConsultInfo(params)
        if (res.status === 200) {
          // 告知父组件刷新数据
          updateList()
        }
      } else {
        const res = await api.updateConsultInfo(params)
        if (res.status === 200) {
          updateList()
        }
      }
    } catch (error) {
      console.log(error);

    }

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // form.resetFields()
    // form.setFieldValue([], {})
    setIsModalOpen(false);
  };

  const handleChange = (event: any) => {
    formList.title = event.target.value
    setFormList(event.target)
  }

  useEffect(() => {
    setFormList(detailInfo)
    setDetailStatus(curStatus)
    form.setFieldsValue(
      detailInfo
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailInfo, formList, curStatus]);

  return (
    <div className='manager-consult-detail'>
      <Modal
        title={(detailStatus === 'add' ? '新增咨询' : '编辑咨询')}
        okText={(detailStatus === 'add' ? '新增' : '更新')}
        cancelText='取消'
        open={isModalOpen}
        onOk={() => handleOk(curStatus)}
        onCancel={handleCancel}
        forceRender>
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
            initialValue={formList.title}
          >
            <Input onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="类型"
            name="type"
            rules={[{ required: true, message: '请选择咨询类型' }]}
            initialValue={formList.type}
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
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            initialValue={formList.content}
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
        </Form>
      </Modal>
    </div>
  )
})

export default ConsultDetail

ConsultDetail.defaultProps = {
  // detailInfo: {
  //   id: '',
  //   title: '',
  //   type: ''
  // }
}