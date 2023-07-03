import React, { useEffect, useState } from 'react'
import { Button, Form, FormInstance, Input, Pagination, Select, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.scss'
import { BlogAllInfoModal } from '@/modules/community/community'
import api from '@/service/api/community'

const { Option } = Select

// const defaultCommunitytValue = { // 表单所需的默认值
//   blog_comment_list: [],
//   blog_content: '',
//   blog_create_time: 0,
//   blog_id: '',
//   blog_img: [],
//   blog_like_list: [],
//   blog_status: '',
//   blog_title: '',
//   blog_user_id: NaN
// }

const defaultChangeValue = {
  title: '',
  status: ''
}

// todo - 预计做全屏数据查看
// interface modalHandleType {
//   showModal: () => void
//   handleCancel: () => void
// }

const DataManagerCommunity: React.FC = () => {
  // const consultDetaiRef = useRef<modalHandleType>(null) // 为了调用子组件的方法所定义
  // const formRef = useRef<FormInstance>(null)
  const [form] = Form.useForm<FormInstance>() // 表单渲染用

  const [pageTotal, setPageTotal] = useState<number>(10) // 数据总数
  let [blogList, setBlogList] = useState<BlogAllInfoModal[]>([])
  let [pageInfo, setPageInfo] = useState({ page: 1, size: 10 }) // 分页用 
  let [searchInfo, setSearchInfo] = useState(defaultChangeValue) // 搜索结果

  const columns: ColumnsType<BlogAllInfoModal> = [
    {
      title: '标题',
      dataIndex: 'blog_title',
      key: 'blog_title',
      width: '200px'
    },
    {
      title: '内容',
      dataIndex: 'blog_content',
      key: 'blog_content',
      width: 400,
    },
    {
      title: '驳回原因',
      dataIndex: 'blog_reject_reason',
      key: 'blog_reject_reason',
      width: 200,
      render: () => {
        return (
          <div>
            <Tag color="error">暴力</Tag>
            <Tag color="error">恐怖</Tag>
            <Tag color="error">色情</Tag>
          </div>
        )
      }
    },
    {
      title: '状态',
      dataIndex: 'blog_status',
      key: 'blog_status',
      width: 100,
      render: (text, record) => {
        return (
          <div>
            <Tag color={record.blog_status === 'reject' ? 'error' : 'success'}>{record.blog_status}</Tag>
          </div>
        )
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
    getBlogList()
  }

  // 更新
  const update = () => {
    search()
  }

  // 重置
  const resetHandle = (v: any) => {
    searchInfo.title = ''
    searchInfo.status = ''
    // searchInfo = defaultConsultValue // 这里直接附默认值，默认值不知道为什么会被改变
    setSearchInfo(searchInfo)
    form.resetFields()
    form.setFieldValue([], {})
    search()

  }

  // select改变
  const selectHandler = (value: any) => {
    searchInfo.status = value
    setSearchInfo(searchInfo)
  }

  // title改变
  const changeHandler = (e: any) => {
    const { value: inputValue } = e.target
    searchInfo.title = inputValue
    setSearchInfo(searchInfo)
  }

  // 展示详情弹窗
  const showDetail = (obj: BlogAllInfoModal, status: string) => { }

  const getBlogList = async () => {
    const pageParams = {
      ...pageInfo,
      status: searchInfo.status || ''
    }
    try {
      const res = await api.getBlogList(pageParams)
      const { status, data } = res
      if (status === 200 && data) {
        setBlogList(() => data.blogs)
        setPageTotal(() => data.total)
        console.log('全部列表信息', res);
      }
    } catch (error) {
      console.error('社区帖子管理', error)
    }
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
        style={{ width:'100%' }}
        initialValues={defaultChangeValue}
        autoComplete="off"
        layout="inline"
      >
        <Form.Item label="标题" name="blog_title" >
          <Input onChange={changeHandler} />
        </Form.Item>
        <Form.Item label="状态" name="blog_status">
          <Select onChange={selectHandler} placeholder="请选择要查看的博客类型" allowClear>
            <Option value="pass">通过</Option>
            <Option value="reject">驳回</Option>
          </Select>
        </Form.Item>
      </Form>
      <div className="consult-btn">
        <Button className="btn-search" type="primary" onClick={update}>搜索</Button>
        <Button className="btn-reset" onClick={resetHandle}>重置</Button>
      </div>
      {/* 表单 */}
      <Table className="consult-table" dataSource={blogList} columns={columns} pagination={false} rowKey={item => item.blog_id as any} />
      {/* 分页 */}
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
    </div>
  )
}

export default DataManagerCommunity
