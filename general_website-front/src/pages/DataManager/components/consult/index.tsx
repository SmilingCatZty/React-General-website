import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormInstance, Input, Pagination, Select, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import ConsultDetail from './detail'
import './styles/index.scss'
import { ConsultInfoModel } from '@/modules/data-manager/consult'
import api from '@/service/api/consult.api'

const { Option } = Select

const defaultConsultValue = { // 表单所需的默认值
  _id: undefined,
  title: '',
  type: '',
  content: '',
  img: ''
}

interface modalHandleType {
  showModal: () => void
  handleCancel: () => void
}

const DataManagerConsult: React.FC = () => {
  const consultDetaiRef = useRef<modalHandleType>(null) // 为了调用子组件的方法所定义
  // const formRef = useRef<FormInstance>(null)
  const [form] = Form.useForm<FormInstance>() // 表单渲染用

  let [detailInfoList, setDetailInfoList] = useState<ConsultInfoModel[]>([]) // 详情页数据列表
  let [detailInfo, setDetailInfo] = useState<ConsultInfoModel>(defaultConsultValue) // 详情数据
  let [pageInfo, setPageInfo] = useState({ // 分页用
    page: 1,
    size: 10
  })
  const [pageTotal, setPageTotal] = useState<number>(10) // 数据总数
  const [detailStatus, setDetailStatus] = useState<string>('add') // 详情页状态 add-新增，edit-编辑
  let [searchInfo, setSearchInfo] = useState<ConsultInfoModel>(defaultConsultValue) // 搜索结果

  const columns: ColumnsType<ConsultInfoModel> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width: 200
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: 200,
      render: (text, record, index) => {
        let context: string = ''
        switch (record.type) {
          case 'notice':
            context = '通知'
            break
          case 'news':
            context = '新闻'
            break
          case 'active':
            context = '活动'
            break
          case 'other':
            context = '其他'
            break
        }
        return <div>{context}</div>
      }
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => <span className='oprate' style={{ color: '#1a68ba' }} onClick={() => showDetail(record, 'edit')}> 详情</span >
    }
  ]

  // 分页
  const changePage = (page: number, size: number) => {
    pageInfo = { page, size }
    setPageInfo(pageInfo)
    search(pageInfo)
  }

  // 搜索
  const search = async (pageParams?: { page: number, size: number }) => {
    if (pageParams) {
      pageInfo = pageParams
    } else {
      pageInfo = { page: 1, size: 10 }
    }
    setPageInfo(pageInfo)
    const params = {
      ...pageInfo,
      info: searchInfo
    }
    const res: any = await api.getConsultInfo(params)
    if (res.status === 200) {
      setDetailInfoList(res.data.notice)
      setPageTotal(res.data.total)
    }
  }

  // 更新
  const update = () => {
    search()
  }

  // 重置
  const resetHandle = (v: any) => {
    searchInfo.title = ''
    searchInfo.type = ''
    // searchInfo = defaultConsultValue // 这里直接附默认值，默认值不知道为什么会被改变
    setSearchInfo(searchInfo)
    form.resetFields()
    form.setFieldValue([], {})
    search()

  }

  // select改变
  const selectHandler = (value: any) => {
    detailInfo.type = value
    setSearchInfo(detailInfo)
  }

  // title改变
  const changeHandler = (e: any) => {
    const { value: inputValue } = e.target
    detailInfo.title = inputValue
    setSearchInfo(detailInfo)
  }

  // 添加
  const addHandle = (status: string) => {
    setDetailStatus(status)
    setDetailInfo(defaultConsultValue)
    consultDetaiRef.current?.showModal()
  }

  // 展示详情弹窗
  const showDetail = (obj: ConsultInfoModel, status: string) => {
    setDetailInfo(obj)
    setDetailStatus(status)
    consultDetaiRef.current?.showModal()
  }

  useEffect(() => {
    return () => {
      search()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="manager-consult">
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 0, offset: 0 }}
        wrapperCol={{ span: 30 }}
        style={{ minWidth: 1000 }}
        initialValues={defaultConsultValue}
        autoComplete="off"
        layout="inline"
      >
        <Form.Item
          label="标题"
          name="title"
        >
          <Input onChange={changeHandler} />
        </Form.Item>

        <Form.Item
          label="类型"
          name="type"
        >
          <Select onChange={selectHandler} placeholder="请选择咨询消息类型" allowClear>
            <Option value="news">新闻</Option>
            <Option value="notice">通知</Option>
            <Option value="active">活动</Option>
            <Option value="other">其他</Option>
          </Select>
        </Form.Item>
      </Form>
      <div className="consult-btn">
        <Button className="btn-add" type="default" style={{ backgroundColor: '#96e956' }} onClick={() => addHandle('add')}>
          新增
        </Button>
        <Button className="btn-search" type="primary" onClick={update}>
          搜索
        </Button>
        <Button className="btn-reset" onClick={resetHandle}>
          重置
        </Button>
      </div>
      <Table className="consult-table" dataSource={detailInfoList} columns={columns} pagination={false} rowKey={item => item._id as any} />
      <Pagination
        className="consult-pagination"
        // hideOnSinglePage={true}
        showSizeChanger={true}
        showTotal={
          (
            (total) => `总数： ${total} `
          )
        }
        defaultCurrent={1}
        defaultPageSize={10}
        current={pageInfo.page}
        pageSize={pageInfo.size}
        pageSizeOptions={[5, 10, 15, 20]}
        total={pageTotal}
        onChange={changePage}
      />
      <ConsultDetail curStatus={detailStatus} ref={consultDetaiRef} detailInfo={detailInfo} updateList={search} />
    </div>
  )
}

export default DataManagerConsult
