import React from "react";
import { Modal, Form, Input } from "antd";
import { useTrelloContext } from "../contexts/TrelloContext";

const AddListModal = () => {
  const [formList] = Form.useForm();

  const { isAddListOpen, setIsAddListOpen, handleAddListOk } =
    useTrelloContext();

  return (
    <Modal
      title='Add another list'
      open={isAddListOpen}
      onOk={() => handleAddListOk(formList)}
      onCancel={() => setIsAddListOpen(false)}
    >
      <Form
        form={formList}
        style={{
          maxWidth: "100%",
        }}
        layout='vertical'
      >
        <Form.Item
          label='Title List'
          name='titleList'
          rules={[{ required: true, message: "Please enter your title list!" }]}
        >
          <Input placeholder='Enter your title list' autoComplete='off' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddListModal;
