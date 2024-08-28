import React from 'react';
import { TopBar, TitleBar, PageContainer, LoginContainer, Input, Button } from './styles';

const LoginPage = () => {
  return (
    <PageContainer>
      <TopBar>
        <TitleBar>VLR EMPREENDIMENTOS</TitleBar>
      </TopBar>
      <LoginContainer>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '7rem' }}>
          <Input type="email" placeholder="Email ID" />
          <Input type="password" placeholder="Senha" />
          <Button>Login</Button>
        </div>
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
