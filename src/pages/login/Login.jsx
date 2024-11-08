import React from "react";
import { Typography, Button, Divider, Form, Input } from "antd";

const { Title } = Typography;

const Login = () => {
  return (
    <div className='login'>
      <div className='login-wrap'>
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          Sign In
        </Title>

        <Button type='primary' block size='large'>
          Sign In using Open ID Connect
        </Button>

        <Divider
          style={{
            margin: "30px 0",
            borderColor: "#b3b3b3",
          }}
        >
          or sign in with your mail
        </Divider>

        <Form
          layout='vertical'
          style={{
            maxWidth: "100%",
          }}
        >
          <Form.Item label='Email address'>
            <Input size='large' placeholder='Enter your email' />
          </Form.Item>
          <Form.Item label='Password'>
            <Input.Password size='large' placeholder='Enter your password' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              block
              size='large'
              style={{
                backgroundColor: "#0fae51",
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
