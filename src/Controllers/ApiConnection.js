import axios from "axios";

/* API in  https://github.com/Donnis1998/back-echarts */

const SERVER = "http://localhost:4000";

const GetModels = async () => {
  try {
    let res = await axios.get(`${SERVER}/`);

    if (res.status === 200) {
      return res.data;
    } else {
      window.alert("Ha ocurrido un error al obtener la lista de modelos.");
      return [];
    }
  } catch (error) {
    window.alert("Ha ocurrido un error al guardar el modelo");
    return [];
  }
};

const GetModelByName = async (name) => {
  try {
    let res = await axios.get(`${SERVER}/${name}`);

    if (res.status === 200) {
      return res.data;
    } else {
      window.alert(`Ha ocurrido un error al obtener el modelo ${name}`);
      return [];
    }
  } catch (error) {
    window.alert(`Ha ocurrido un error al obtener el modelo ${name}`);
    return [];
  }
};

const CreateModels = async (data) => {
  try {
    let res = await axios.post(`${SERVER}/register`, data);

    if (res.status === 204) {
      window.alert("El modelo se ha guardado exitosamente.");
    } else {
      window.alert("Ha ocurrido un error al guardar el modelo.");
    }
  } catch (error) {
    window.alert("Ha ocurrido un error al guardar el modelo");
  }
};

const DeleteModels = async (name) => {
  try {
    let res = await axios.delete(`${SERVER}/delete/${name}`);

    if (res.status === 204) {
      window.alert("El modelo se ha eliminado exitosamente.");
    } else {
      window.alert("Ha ocurrido un error al eliminar el modelo.");
    }
  } catch (error) {
    window.alert("Ha ocurrido un error al eliminar el modelo.");
  }
};

const UpdateModels = async () => {
  try {
  } catch (error) {
    window.alert("Ha ocurrido un error al actualizar el modelo.");
  }
};

export { GetModels, GetModelByName, CreateModels, UpdateModels, DeleteModels };
