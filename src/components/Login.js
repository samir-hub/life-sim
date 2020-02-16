import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
//import styled from 'styled-components';
import Form from "antd/es/form";
import "antd/es/form/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Input from "antd/es/input";
import "antd/es/input/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

function Login(props) {
    // componentDidMount() {
    //     // To disable submit button at the beginning.
    //     this.props.form.validateFields();
    //   }
      const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            axios
            .post(
              "http://localhost:2019/login",
              `grant_type=password&username=${values.username}&password=${values.password}`,
              {
                headers: {
                  // btoa is converting our client id/client secret into base64
          
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              console.log(res.data);
              localStorage.setItem("token", res.data.access_token);
              localStorage.setItem("username", values.username);
            //   props.setLoginToken(true);
            //   props.history.push("/");
            //   props.history.push("/");
            })
            .catch(err => console.dir(err));
        }
          }
        );
      };
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

      // Only show error after a field is touched.
      const usernameError = isFieldTouched('username') && getFieldError('username');
      const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
      
     <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
  );
}

const WrappedLogin = Form.create({ name: 'login_form' })(Login);

export default WrappedLogin;