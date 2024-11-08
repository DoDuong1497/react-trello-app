import { createContext, useContext, useState } from "react";
import { dataTrello } from "../mock/dataTrello";

// Create your Context
const TrelloContext = createContext();

// Put data on value prop
export const TrelloProvider = ({ children }) => {
  const [todos, setTodos] = useState(dataTrello);
  const [column, setColumn] = useState("");

  const { lists } = todos;

  const handleDragColumn = (columns, sourceIndex, destiIndex) => {
    const newColumns = columns;

    // swap item

    // [newColumns[sourceIndex], newColumns[destiIndex]] = [
    //   newColumns[destiIndex],
    //   newColumns[sourceIndex],
    // ];

    // splice

    const [column] = newColumns.splice(sourceIndex, 1);
    newColumns.splice(destiIndex, 0, column);

    return setTodos((prevState) => ({
      ...prevState,
      columns: newColumns,
    }));
  };

  const handleDragCardSameColumn = (
    lists,
    sourceDropId,
    destiDropId,
    sourceIndex,
    destiIndex
  ) => {
    const newCards = lists[sourceDropId].cards;
    const [card] = newCards.splice(sourceIndex, 1);
    newCards.splice(destiIndex, 0, card);

    return setTodos((prevState) => ({
      ...prevState,
      lists: {
        ...prevState.lists,
        [destiDropId]: {
          ...prevState.lists[destiDropId],
          cards: newCards,
        },
      },
    }));
  };

  const handleDragCardOtherColumn = (
    lists,
    sourceDropId,
    destiDropId,
    sourceIndex,
    destiIndex
  ) => {
    const newCardsSource = lists[sourceDropId].cards;
    const newCardsDesti = lists[destiDropId].cards;

    const [cardSource] = newCardsSource.splice(sourceIndex, 1);
    newCardsDesti.splice(destiIndex, 0, cardSource);

    return setTodos((prevState) => ({
      ...prevState,
      lists: {
        ...prevState.lists,
        [destiDropId]: {
          ...prevState.lists[destiDropId],
          cards: newCardsDesti,
        },
      },
    }));
  };

  // Add and delete column
  const [isAddListOpen, setIsAddListOpen] = useState(false);

  const showAddListModal = () => {
    setIsAddListOpen(true);
  };

  const handleAddListOk = (formList) => {
    const newColumns = todos.columns;

    formList
      .validateFields()
      .then((values) => {
        const title = values.titleList;

        const newListItem = {
          id: title.toLowerCase(),
          title,
          cards: [],
        };

        newColumns.push(title.toLowerCase());

        setTodos((prevState) => ({
          ...prevState,
          columns: newColumns,
          lists: {
            ...prevState.lists,
            [title.toLowerCase()]: newListItem,
          },
        }));

        setIsAddListOpen(false);
        formList.resetFields();
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  const confirmDeleteColumn = (index) => {
    const newColumns = todos.columns;

    newColumns.splice(index, 1);

    return setTodos((prevState) => ({
      ...prevState,
      columns: newColumns,
    }));
  };

  // Add card

  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  const handleAddCardOk = (formCard) => {
    const newCards = lists[column].cards;

    formCard
      .validateFields()
      .then((values) => {
        const id = values.title.toLowerCase();
        const title = values.title;
        const description = values.description;
        const member = values.member;
        const status = "new";

        const newCardItem = {
          id,
          title,
          description,
          thumbnail:
            "https://plus.unsplash.com/premium_photo-1668708034541-4ba9a33fae3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          member,
          status,
        };

        newCards.push(id);

        setTodos((prevState) => ({
          ...prevState,
          lists: {
            ...prevState.lists,
            cards: newCards,
          },
          cards: {
            ...prevState.cards,
            [id]: newCardItem,
          },
        }));

        setIsAddCardOpen(false);
        formCard.resetFields();
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });

    setIsAddCardOpen(false);
  };

  const handleChangeColumn = (column) => {
    setColumn(column);
  };

  const showAddCardModal = (column) => {
    setIsAddCardOpen(true);
    handleChangeColumn(column);
  };

  const handleAddCardCancel = () => {
    setIsAddCardOpen(false);
  };

  return (
    <TrelloContext.Provider
      value={{
        todos,
        setTodos,
        lists,
        handleDragColumn,
        handleDragCardSameColumn,
        handleDragCardOtherColumn,
        isAddListOpen,
        setIsAddListOpen,
        showAddListModal,
        handleAddListOk,
        confirmDeleteColumn,
        isAddCardOpen,
        setIsAddCardOpen,
        showAddCardModal,
        handleAddCardOk,
        handleAddCardCancel,
      }}
    >
      {children}
    </TrelloContext.Provider>
  );
};

// create your hook context
export const useTrelloContext = () => useContext(TrelloContext);
