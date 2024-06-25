import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const { Header: Navbar } = Layout;

function Header() {
    return (
        <Navbar
            style={{
              padding: 0,
              backgroundColor: '#d9d9d9',
              position: 'sticky',
              color: 'black !important',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
      >
         {routes.map(Route => <NavLink key={Route.path} style={({ isActive }) => {
            return {
              padding: '8px 16px',
              fontWeight: isActive ? "bold" : "",
              color: 'black',
            };
          }}to={Route.path}><Route.Icon style={{ marginRight: 8 }}/>{Route.name}</NavLink>)}

      </Navbar>
    );
}

export default Header;