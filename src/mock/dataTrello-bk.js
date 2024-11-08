export const dataTrello = {
  columns: ["todo", "doing", "task"],
  lists: {
    todo: {
      id: "todo",
      title: "Todo",
      cards: ["card-1", "card-2"],
    },
    doing: {
      id: "doing",
      title: "Doing",
      cards: ["card-3", "card-4"],
    },
    task: {
      id: "task",
      title: "Task",
      cards: ["card-5"],
    },
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "Card 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1668708034541-4ba9a33fae3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: ["user-1", "user-2"],
      status: "new",
    },
    "card-2": {
      id: "card-2",
      title: "Card 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail:
        "https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: ["user-3", "user-4"],
      status: "new",
    },
    "card-3": {
      id: "card-3",
      title: "Card 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail:
        "https://images.unsplash.com/photo-1729614499339-b98e60ff68d6?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: ["user-2", "user-4"],
      status: "new",
    },
    "card-4": {
      id: "card-4",
      title: "Card 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail:
        "https://images.unsplash.com/photo-1729974354513-758c8a5d196d?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: ["user-1", "user-3"],
      status: "new",
    },
    "card-5": {
      id: "card-5",
      title: "Card 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail:
        "https://images.unsplash.com/photo-1729974354513-758c8a5d196d?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: ["user-2", "user-4"],
      status: "new",
    },
  },
  members: {
    "user-1": {
      id: "user-1",
      name: "User 1",
      avatar: "https://i.pravatar.cc/100",
    },
    "user-2": {
      id: "user-2",
      name: "User 2",
      avatar: "https://i.pravatar.cc/100",
    },
    "user-3": {
      id: "user-3",
      name: "User 3",
      avatar: "https://i.pravatar.cc/100",
    },
    "user-4": {
      id: "user-4",
      name: "User 4",
      avatar: "https://i.pravatar.cc/100",
    },
  },
};
