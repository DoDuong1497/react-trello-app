import React from "react";
import { Modal, Form, Input, Select } from "antd";
import { useTrelloContext } from "../contexts/TrelloContext";

const AddCardModal = () => {
  const { isAddCardOpen, handleAddCardCancel, handleAddCardOk } =
    useTrelloContext();

  const [formCard] = Form.useForm();

  return (
    <Modal
      title='Add Card'
      open={isAddCardOpen}
      onOk={() => handleAddCardOk(formCard)}
      onCancel={handleAddCardCancel}
    >
      <Form
        form={formCard}
        style={{
          maxWidth: "100%",
        }}
        layout='horizontal'
        labelCol={{
          span: 8,
        }}
        labelAlign='left'
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: "Please enter your title!" }]}
        >
          <Input placeholder='Enter your title' autoComplete='off' />
        </Form.Item>

        <Form.Item
          label='Description'
          name='description'
          rules={[
            { required: true, message: "Please enter your description!" },
          ]}
        >
          <Input.TextArea
            placeholder='Enter your description'
            autoComplete='off'
          />
        </Form.Item>

        <Form.Item
          label='Member'
          name='member'
          rules={[{ required: true, message: "Please select member!" }]}
        >
          <Select mode='multiple' allowClear>
            <Select.Option value='user-1'>User 1</Select.Option>
            <Select.Option value='user-2'>User 2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='Status' name='status'>
          <Select defaultValue='0'>
            <Select.Option value='new'>New</Select.Option>
            <Select.Option value='process'>In process</Select.Option>
            <Select.Option value='done'>Done</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCardModal;
