import { Outlet, Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { Layout, Menu } from 'antd'
import Icon, { HomeOutlined, SubnodeOutlined } from '@ant-design/icons'

const useStyles = createUseStyles({
  container: {
    height: '100%',
  },
  sideBar: {
    background: '#94A1A6',
    height: '100%',
  },
  content: {
    backgroundColor: '#D0D9D6',
    padding: '1rem',
  },
})

const Root = () => {
  const styles = useStyles()
  const { Sider, Content } = Layout
  return (
    <>
      <Layout className={styles.container}>
        <Sider
          breakpoint='md'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
          width={240}
        >
          <Menu
            className={styles.sideBar}
            mode='inline'
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key='1'>
              <Link to={`/`}>
                <Icon component={HomeOutlined} />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to={`/contacts/1`}>
                <Icon component={SubnodeOutlined} />
                <span>Component 1</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to={`/contacts/2`}>
                <Icon component={SubnodeOutlined} />
                <span>Component 2</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </>
  )
}

export default Root
