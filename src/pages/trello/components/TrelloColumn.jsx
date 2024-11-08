import React from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Flex, Button, Card, Tooltip, Empty, message, Popconfirm } from "antd";
import TrelloItem from "./TrelloItem";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddCardModal from "../../../components/AddCardModal";
import { useTrelloContext } from "../../../contexts/TrelloContext";

const TrelloColumn = ({ column, indexColumn, lists, cards }) => {
  const { confirmDeleteColumn, showAddCardModal } = useTrelloContext();

  const cardList = lists[column].cards;

  return (
    <>
      <Draggable draggableId={column} index={indexColumn}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              title={lists[column].title}
              className='trello-list'
              extra={
                <>
                  <Flex gap='small' horizontal>
                    <Tooltip title='Add a card'>
                      <Button
                        shape='circle'
                        icon={<PlusOutlined />}
                        onClick={() => showAddCardModal(column)}
                      />
                    </Tooltip>
                    <Tooltip title='Delete this list'>
                      <Popconfirm
                        title='Delete the list'
                        description='Are you sure to delete this list?'
                        onConfirm={() => confirmDeleteColumn(indexColumn)}
                        okText='Yes'
                        cancelText='No'
                      >
                        <Button
                          danger
                          shape='circle'
                          icon={<DeleteOutlined />}
                        />
                      </Popconfirm>
                    </Tooltip>
                  </Flex>
                </>
              }
            >
              <div
                style={{
                  overflowY: "auto",
                  paddingRight: "10px",
                  maxHeight: "calc(100vh - 221px)",
                }}
              >
                <Droppable droppableId={column} type='CARD'>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      style={{
                        width: "100%",
                        height: "100%",
                        overflowY: "auto",
                      }}
                      {...provided.droppableProps}
                    >
                      {cardList.length === 0 ? (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                      ) : (
                        cardList.map((cardItem, indexCard) => (
                          <TrelloItem
                            key={cardItem}
                            card={cardItem}
                            indexCard={indexCard}
                            cards={cards}
                            column={column}
                          />
                        ))
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </Card>
          </div>
        )}
      </Draggable>

      <AddCardModal />
    </>
  );
};

export default TrelloColumn;
