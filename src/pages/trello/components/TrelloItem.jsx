import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  FileTextOutlined,
  AntDesignOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Tooltip, Typography, Avatar, message, Popconfirm } from "antd";
import { Draggable } from "react-beautiful-dnd";
import { useTrelloContext } from "../../../contexts/TrelloContext";

const { Meta } = Card;
const { Paragraph } = Typography;

const TrelloItem = ({ card, indexCard, cards, column }) => {
  const { todos, setTodos, lists } = useTrelloContext();
  const cardInfo = cards[card];

  const confirmDeleteCard = (card) => {
    const columnSelected = lists[column];
    const newCards = lists[column].cards;
    const index = columnSelected.cards.findIndex((item) => item === card);

    newCards.splice(index, 1);

    setTodos((prevState) => ({
      ...prevState,
      lists: {
        ...prevState.lists,
        [columnSelected]: {
          ...prevState.lists[columnSelected],
          cards: newCards,
        },
      },
    }));
  };

  return (
    <>
      <Draggable draggableId={card} index={indexCard}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            className='trello-item'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              cover={<img alt='thumbnail card' src={cardInfo.thumbnail} />}
              actions={[
                <Tooltip title='View'>
                  <FileTextOutlined key='view' />
                </Tooltip>,
                <Tooltip title='Edit'>
                  <EditOutlined key='edit' />
                </Tooltip>,
                <Tooltip title='Delete'>
                  <Popconfirm
                    title='Delete the list'
                    description='Are you sure to delete this list?'
                    onConfirm={() => confirmDeleteCard(card)}
                    okText='Yes'
                    cancelText='No'
                    placement='bottom'
                  >
                    <DeleteOutlined key='delete' style={{ color: "#ff4d4f" }} />
                  </Popconfirm>
                </Tooltip>,
              ]}
            >
              <Meta
                title={cardInfo.title}
                description={
                  <div
                    style={{
                      width: "100%",
                      flexDirection: "row",
                    }}
                  >
                    <Paragraph>{cardInfo.description}</Paragraph>

                    <Avatar.Group
                      max={{
                        count: 2,
                        style: {
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        },
                      }}
                    >
                      <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
                      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                      <Tooltip title='Ant User' placement='top'>
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Avatar
                        style={{ backgroundColor: "#1677ff" }}
                        icon={<AntDesignOutlined />}
                      />
                    </Avatar.Group>
                  </div>
                }
              />
            </Card>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default TrelloItem;
