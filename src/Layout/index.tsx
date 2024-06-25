import { Layout as AntLayout } from 'antd';
import Header from './Header';
import { ILayout } from './types';

const {  Content } = AntLayout;

function Layout({ children }: ILayout) {
    return (
        <>
            <Header />
            <Content style={{ padding: '16px' }}>
                {children}
            </Content>
        </>
    );
}

export default Layout;