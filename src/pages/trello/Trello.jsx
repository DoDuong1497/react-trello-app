import React, { useCallback } from "react";
import Header from "../../components/Header";
import { PlusOutlined } from "@ant-design/icons";
import { Flex, Button } from "antd";
import TrelloColumn from "./components/TrelloColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddListModal from "../../components/AddListModal";
import { useTrelloContext } from "../../contexts/TrelloContext";

const Trello = () => {
  const {
    todos,
    setTodos,
    handleDragColumn,
    handleDragCardSameColumn,
    handleDragCardOtherColumn,
    showAddListModal,
  } = useTrelloContext();

  const { columns, lists, cards } = todos;

  const onDragEnd = useCallback(
    (result) => {
      const { source, destination, type } = result;

      if (!destination) return;

      const { droppableId: sourceDropId, index: sourceIndex } = source;
      const { droppableId: destiDropId, index: destiIndex } = destination;

      if (sourceIndex === destiIndex && sourceDropId === destiDropId) return;

      if (type === "COLUMN") {
        handleDragColumn(columns, sourceIndex, destiIndex);
      } else {
        if (sourceDropId === destiDropId) {
          handleDragCardSameColumn(
            lists,
            sourceDropId,
            destiDropId,
            sourceIndex,
            destiIndex
          );
        } else {
          handleDragCardOtherColumn(
            lists,
            sourceDropId,
            destiDropId,
            sourceIndex,
            destiIndex
          );
        }
      }
    },
    [todos]
  );

  return (
    <>
      <Header />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className='trello'>
          <Flex gap='middle' vertical={false}>
            <div className='trello-column'>
              <Droppable
                droppableId='COLUMN'
                type='COLUMN'
                direction='horizontal'
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      display: "flex",
                      gap: "16px",
                      height: "100%",
                    }}
                    {...provided.droppableProps}
                  >
                    {columns &&
                      columns.map((columnItem, indexColumn) => (
                        <TrelloColumn
                          key={columnItem}
                          column={columnItem}
                          indexColumn={indexColumn}
                          lists={lists}
                          cards={cards}
                          todos={todos}
                          setTodos={setTodos}
                        />
                      ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

            <Button
              className='add-column'
              icon={<PlusOutlined />}
              type='text'
              iconPosition='start'
              onClick={showAddListModal}
            >
              Add another list
            </Button>
          </Flex>
        </div>
      </DragDropContext>

      <AddListModal />
    </>
  );
};

export default Trello;
