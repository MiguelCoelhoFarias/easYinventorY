import React from 'react';
import { TopBar, TitleBar, PageContainer, RegisterContainer, Input, Button, Title } from './styles';

const RegisterPage = () => {
  return (
    <PageContainer>
      <TopBar>
        <TitleBar>VLR EMPREENDIMENTOS</TitleBar>
      </TopBar>
      <RegisterContainer>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Title>Bem-vindo à VLR</Title>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Matricula" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirmar Senha" />
          <Button>Registrar</Button>
        </div>

      </RegisterContainer>
    </PageContainer>
  );
};

export default RegisterPage;
