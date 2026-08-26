import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useToDoStore = defineStore("todo", () => {
  const formData = reactive({
    id: 0,
    task: "",
    done: false,
  });

  const addItem = () => {
    if (formData.id) {
      // Editace existujícího
      const index = submittedData.findIndex((d) => d.id === formData.id);
      if (index !== -1) {
        submittedData[index].task = formData.task;
        submittedData[index].done = formData.done;
      }
    } else {
      // Přidání nového
      submittedData.push({
        ...formData,
        id:
          submittedData.length === 0
            ? 1
            : Math.max(...submittedData.map((t) => t.id)) + 1,
      });
    }

    // Reset formuláře
    formData.id = 0;
    formData.done = false;
    formData.task = "";

    localStorage.setItem("todos", JSON.stringify(submittedData));
  };

  const submittedData = reactive([]);

  const todos = JSON.parse(localStorage.getItem("todos"));

  if (todos != null && todos.length > 0) {
    for (let i = 0; i < todos.length; i++) {
      submittedData.push(todos[i]);
    }
  }

  const itemsPerPage = 5;

  const currentPage = ref(1);

  const totalPages = computed(() =>
    Math.ceil(submittedData.length / itemsPerPage),
  );

  const emptyList = () => {
    const x = submittedData.length;

    for (let i = 0; i < x; i++) {
      submittedData.pop();
    }

    localStorage.removeItem("todos");
    currentPage.value = 1;
  };

  const changePage = (direction) => {
    const newPage = currentPage.value + direction;

    if (newPage >= 1 && newPage <= totalPages.value) {
      currentPage.value = newPage;
    }
  };

  const filteredData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    // Tady chyběl druhý parametr (end)
    return submittedData.slice(start, end);
  });

  return {
    formData,
    submittedData,
    filteredData,
    addItem,
    currentPage,
    totalPages,
    changePage,
    emptyList,
  };
});
